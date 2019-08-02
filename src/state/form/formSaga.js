import { actions } from '../actions';
import { put } from 'redux-saga/effects';

function* updateForm() {
  try {
    yield put(actions.form.setUserOnSyncFlagAction(true));

    console.log('saga was called');
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.form.setUserOnSyncFlagAction(false));
  }
}

export { updateForm };
