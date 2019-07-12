import { Action } from "types/common";
import { AuthState } from "../types/states";
import { AUTH_TYPES } from "actions";

let initialState: AuthState = {
  isAuthorized: false
};

export default function(state: AuthState = initialState, action: Action<any>) {
  switch (action.type) {
    case AUTH_TYPES.SIGN_IN_SUCCESS:
      return { isAuthorized: true };
    case AUTH_TYPES.SIGN_IN_FAILURE:
      return { isAuthorized: false };
    case AUTH_TYPES.SIGN_OUT:
      return { isAuthorized: false };
    default:
      return state;
  }
}
