import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    auth,
    googleAuthProvider
} from "../firebase/firebase";
import {
    SIGNIN_GOOGLE_USER,
    SIGNIN_USER,
    SIGNOUT_USER
} from "constants/ActionTypes";

import {showAuthMessage, userSignInSuccess, userSignOutSuccess} from "actions/Auth";
import {
    userGoogleSignInSuccess
} from "../actions/Auth";


const signInUserWithEmailPasswordRequest = async (email, password) =>
    await  auth.signInWithEmailAndPassword(email, password)
        .then(authUser => authUser)
        .catch(error => error);

const signOutRequest = async () =>
    await  auth.signOut()
        .then(authUser => authUser)
        .catch(error => error);


const signInUserWithGoogleRequest = async () =>
    await  auth.signInWithPopup(googleAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

function* signInUserWithGoogle() {
    try {
        const signUpUser = yield call(signInUserWithGoogleRequest);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.user.uid);
            localStorage.setItem('user_name', signUpUser.user.displayName);
            localStorage.setItem('user_photo', signUpUser.user.photoURL);
            yield put(userGoogleSignInSuccess(signUpUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}


function* signInUserWithEmailPassword({payload}) {
    const {email, password} = payload;
    try {
        const signInUser = yield call(signInUserWithEmailPasswordRequest, email, password);
        if (signInUser.message) {
            yield put(showAuthMessage(signInUser.message));
        } else {
            localStorage.setItem('user_id', signInUser.user.uid);
            yield put(userSignInSuccess(signInUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signOut() {
    try {
        const signOutUser = yield call(signOutRequest);
        if (signOutUser === undefined) {
            localStorage.removeItem('user_id');
            localStorage.removeItem('user_name');
            localStorage.removeItem('user_photo');
            yield put(userSignOutSuccess(signOutUser));
        } else {
            yield put(showAuthMessage(signOutUser.message));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

export function* signInWithGoogle() {
    yield takeEvery(SIGNIN_GOOGLE_USER, signInUserWithGoogle);
}

export function* signInUser() {
    yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
    yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
    yield all([fork(signInUser),
        fork(signInWithGoogle),
        fork(signOutUser)]);
}