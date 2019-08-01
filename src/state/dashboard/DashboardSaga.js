import { actions } from '../actions';
import { call, put } from 'redux-saga/effects';
import { Api } from './../../api/api';

function* updateUserDetailsSaga() {
  try {
    yield put(actions.dashboard.setUserOnSyncFlagAction(true));
    const data = yield call(Api.updateDashboardDetails);
    yield put(actions.dashboard.setDashboardDataAction(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.dashboard.setUserOnSyncFlagAction(false));
  }
}

export { updateUserDetailsSaga };
