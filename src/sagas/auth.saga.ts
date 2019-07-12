import { put, takeEvery, all } from "redux-saga/effects";
import { AUTH_TYPES, signInSuccess } from "actions";

export default function* authSaga() {
  yield all([takeEvery(AUTH_TYPES.SIGN_IN_REQUEST, signIn)]);
}

function* signIn() {
  yield put(signInSuccess());
}
