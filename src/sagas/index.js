import {
    call,
    delay,
    fork,
    put,
    select,
    take,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects';
import { hideModal } from '../actions/modal';
import {
    addTaskFailed,
    addTaskSuccess,
    fetchTask,
    fetchTaskFailed,
    fetchTaskSuccess,
    updateTaskFailed,
    updateTaskSuccess,
    deleteTaskSuccess,
} from '../actions/task';
import { hideLoading, showLoading } from '../actions/ui';
import { addTask, deleteTask, getList, updateTask } from '../apis/task';
import { STATUSES, STATUS_CODE } from '../constants/index';
import * as taskTypes from '../constants/task';

function* watchFetchListTaskAction() {
    while (true) {
        const action = yield take(taskTypes.FETCH_TASK);
        yield put(showLoading());
        const { params } = action.payload;
        const resp = yield call(getList, params);
        const { data, status } = resp;
        yield delay(650);
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchTaskSuccess(data));
        } else {
            yield put(fetchTaskFailed(data));
        }
        yield put(hideLoading());
    }
}

function* addTaskSaga({ payload }) {
    const { title, description } = payload;
    yield put(showLoading());
    const resp = yield call(addTask, {
        title,
        description,
        status: STATUSES[0].value,
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.CREATED) {
        yield put(addTaskSuccess(data));
        yield put(hideModal());
    } else {
        yield put(addTaskFailed(data));
    }
    yield delay(650);
    yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
    const { title, description, status } = payload;
    const taskEditing = yield select((state) => state.task.taskEditing);
    yield put(showLoading());
    const resp = yield call(
        updateTask,
        { title, description, status },
        taskEditing.id,
    );
    const { data, status: statusCode } = resp;
    if (statusCode === STATUS_CODE.SUCCESS) {
        yield put(updateTaskSuccess(data));
        yield put(hideModal());
    } else {
        yield put(updateTaskFailed(data));
    }
    yield delay(650);
    yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
    const { id } = payload;
    yield put(showLoading());
    const resp = yield call(deleteTask, id);
    const { data, status: statusCode } = resp;
    if (statusCode === STATUS_CODE.SUCCESS) {
        yield put(deleteTaskSuccess(id));
        yield put(hideModal());
    } else {
        yield put(updateTaskFailed(data));
    }
    yield delay(650);
    yield put(hideLoading());
}

function* watchCreateTaskAction() {
    yield true;
    // console.log('Watching Create Task Action');
}

function* filterTaskSage({ payload }) {
    yield delay(500);
    const { keyword } = payload;
    yield put(fetchTask({ q: keyword }));
    // const { keyword } = payload;
    // const list = yield select((state) => state.task.listTask);
    // const filterdTask = list.filter((task) =>
    //     task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()),
    // );
    // yield put(filterTaskSuccess(filterdTask));
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSage);
    yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
    yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
    yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
