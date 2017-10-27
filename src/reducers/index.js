import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import todos from "./todos";
import ajaxCallsInProgress from "./ajaxStatus";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer.plugin({
    "todo_edit": (state, action) => {
      // reset form (wipe state) when navigating away from the Todo edit page
      switch(action.type) {
        case "@@router/LOCATION_CHANGE":
          return undefined;
        default:
          return state;
      }
    }
  }),
  todos,
  ajaxCallsInProgress,
});
