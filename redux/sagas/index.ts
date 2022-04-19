import { all } from 'redux-saga/effects';
import { watchBoard } from './boardSaga.ts';
import { watchTodo } from './todoSaga.ts';
import { watchJoin } from "./userSaga.ts";

export default function* rootSaga() {
    yield all([watchJoin(),watchTodo(),watchBoard()]);
}