import { actions } from '../actions';
import { put } from 'redux-saga/effects';

function* updateUserDetailsSaga() {
  try {
    yield put(actions.dashboard.setUserOnSyncFlagAction(true));

    console.log('saga was called');
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.dashboard.setUserOnSyncFlagAction(false));
  }
}

export { updateUserDetailsSaga };
