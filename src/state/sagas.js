import { constants } from './constants';
import { takeLatest, all, call } from 'redux-saga/effects';

import { updateUserDetailsSaga } from './dashboard/DashboardSaga';

function* actionWatcher() {
  yield takeLatest(
    constants.dashboard.UPDATE_DASHBOARD_DATA,
    updateUserDetailsSaga
  );
}

export default function* rootSaga() {
  yield all([call(actionWatcher)]);
}
