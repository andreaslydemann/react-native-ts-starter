import { Action } from "../types/common";

export const AUTH_TYPES = {
  SIGN_IN_REQUEST: "SIGN_IN_REQUEST",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
  SIGN_OUT: "SIGN_OUT",
};

export const signIn = (): Action<void> => {
  return {
    type: AUTH_TYPES.SIGN_IN_REQUEST
  };
};

export const signInSuccess = (): Action<void> => {
  return {
    type: AUTH_TYPES.SIGN_IN_SUCCESS
  };
};

export const signInFailure = (): Action<void> => {
  return {
    type: AUTH_TYPES.SIGN_IN_FAILURE
  };
};

export const signOut = (): Action<void> => {
  return {
    type: AUTH_TYPES.SIGN_OUT
  };
};
