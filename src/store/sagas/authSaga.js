import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { AUTH_SUCCESS, LOGIN, REGISTER, REGISTER_SUCCESS } from "../actions/types";
const baseUrl = "http://18.139.50.74:8080";

function* login(actions) {
  const { payload } = actions;
  console.log(payload);
  try {
    const res = yield axios.post(`${baseUrl}/login`, payload);
    // console.log(res);
    localStorage.setItem("token", res.data.data.token);
    yield put({ type: AUTH_SUCCESS });
  } catch (e) {
    console.log(e);
    //   const errors = e.response.data.errors;
  }
}

function* register(actions) {
  const { payload } = actions;
  try {
    const res = yield axios.post(`${baseUrl}/register`, payload);
    console.log(res);
    yield put({ type: REGISTER_SUCCESS,payload:res.data.message });
  } catch (e) {
    // const errors = e.response.data.errors;
    console.log(e);
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}
export function* watchRegister() {
  yield takeEvery(REGISTER, register);
}
