import { animateScroll } from "react-scroll";
import {ErrorWrapper} from "../app/viewModels/ErrorWrapper";
import {toastr} from "react-redux-toastr";

export default class CommonUtilities {
    public static ReactScrollDefaultOptions = { duration: 500, smooth: 'easeInOutQuint' };

    public static logDevMessage(...params: any[]) {
        if (process.env.NODE_ENV !== 'production') {
            console.log(...params);
        }
    }

    public static showSuccessToast(title: string, message: string) {
        toastr.success(title, message);
    }

    public static showErrorToast(title: string, message: string) {
        toastr.error(title, message);
    }

    public static scrollToTop() {
        animateScroll.scrollTo(0, CommonUtilities.ReactScrollDefaultOptions);
    }

    public static async tryCatchWrapper(
        mainAction: () => Promise<void>,
        catchAction: (exception: ErrorWrapper) => Promise<void>): Promise<void> {
        try {
            await mainAction();
        } catch (exception) {
            if (exception instanceof ErrorWrapper) {
                await catchAction(exception);
            } else {
                console.error('Unknown error: ', exception);
            }
        }
    }

    public static typeSafeName<T>(name: keyof T) {
        return name;
    }
}