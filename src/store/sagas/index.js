import { all } from "redux-saga/effects";
import { watchLogin, watchRegister } from "./authSaga";
import { watchGetList } from "./listSaga";

export default function* rootSaga() {
  yield all([
   watchLogin(),
   watchRegister(),
   watchGetList()
  ]);
}
