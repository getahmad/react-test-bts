import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { ADD_LIST_REQUEST, ADD_LIST_SUCCESS, LIST_REQUEST, LIST_SUCCESS } from "../actions/types";

const baseUrl = "http://18.139.50.74:8080/checklist";

function* get() {
  const token = localStorage.getItem("token");
  try {
    const res = yield axios.get(`${baseUrl}`, {
      headers: {
        // Authorization: token,
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    yield put({ type: LIST_SUCCESS, payload: res.data.data });
  } catch (e) {
    console.log(e);
  }
}

function* add(actions) {
  const { payload } = actions;
  const token = localStorage.getItem("token");
  try {
    const res = yield axios.post(`${baseUrl}`, payload, {
      headers: {
        // Authorization: token,
        Authorization: `Bearer ${token}`,
      },
    });
    yield put({ type: ADD_LIST_SUCCESS, payload: res.data.data });
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetList() {
  yield takeLatest(LIST_REQUEST, get);
}

export function* watchAddList() {
  yield takeLatest(ADD_LIST_REQUEST, add);
}
