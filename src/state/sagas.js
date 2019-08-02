import { constants } from './constants';
import { takeLatest, all, call } from 'redux-saga/effects';

import { updateForm } from './form/formSaga';

function* actionWatcher() {
  yield takeLatest(constants.form.UPDATE_DASHBOARD_DATA, updateForm);
}

export default function* rootSaga() {
  yield all([call(actionWatcher)]);
}
