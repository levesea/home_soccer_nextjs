import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { boardActions } from '../../redux/reducers/boardReducer.ts';
import { addBoard } from '../api/boardApi.ts'

interface PostSagaType{
    type: string;
    payload: {
        title: string,
        name: string,
        team: string,
        subject: string
    }
}
interface PostSagaSuccessType{
    type: string;
    payload: {
        title: string
    }
}

function* add(inputs: PostSagaType){
    try{
        alert(` 진행 3: saga내부 join 성공  ${JSON.stringify(inputs)}`)
        const response : PostSagaSuccessType = yield addBoard(inputs.payload)
        yield put(boardActions.addSuccess(response))
        
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(boardActions.addFailure(error))
    }
}

export function* watchBoard(){
    yield takeLatest(boardActions.addBoard, add)
}