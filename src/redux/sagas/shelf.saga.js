import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchShelf() {
  try {
    const response = yield axios.get("/api/shelf");
    yield put({ type: "SET_SHELF", payload: response.data });
  } catch (error) {
    console.log("GET no good", error);
  }
}

function* postShelf(action) {
  try {
    yield axios.post("/api/shelf", action.payload);
    yield put({ type: "FETCH_SHELF" });
  } catch (error) {
    console.log("POST bad - BAD");
  }
}

function* deleteItem(action) {
  try {
    yield axios.delete(`/api/shelf/${action.payload}`);
    yield put({ type: "FETCH_SHELF" });
  } catch (error) {
    console.log("delete-delete-delete");
  }
}

function* shelfSaga() {
  yield takeLatest("FETCH_SHELF", fetchShelf);
  yield takeLatest("ADD_TO_SHELF", postShelf);
  yield takeLatest("DELETE_ITEM", deleteItem);
}

export default shelfSaga;
