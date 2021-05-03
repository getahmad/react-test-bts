import { all } from "redux-saga/effects";
import { watchLogin, watchRegister } from "./authSaga";

export default function* rootSaga() {
  yield all([
   watchLogin(),
   watchRegister()
  ]);
}
