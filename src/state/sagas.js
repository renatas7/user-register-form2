import { constants } from './constants';
import { takeLatest, all, call } from 'redux-saga/effects';

import { updateFormSaga, setUserDataSaga } from './form/formSaga';

function* actionWatcher() {
  yield takeLatest(constants.form.UPDATE_DASHBOARD_DATA, updateFormSaga);
  yield takeLatest(constants.form.SET_USER_DATA, setUserDataSaga);
}

export default function* rootSaga() {
  yield all([call(actionWatcher)]);
}
