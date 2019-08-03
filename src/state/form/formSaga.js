import { actions } from '../actions';
import { put, select } from 'redux-saga/effects';
import {
  selectUsersList,
  selectFormData,
} from './../../utils/selectors/selectors';

function* updateFormSaga() {
  try {
    yield put(actions.form.setUserOnSyncFlagAction(true));
    const userListData = localStorage.getItem('usersList');
    const parsedData = JSON.parse(userListData);
    yield put(actions.form.pushEditedUsersData(parsedData));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.form.setUserOnSyncFlagAction(false));
  }
}

function* setUserDataSaga(action) {
  try {
    yield put(actions.form.setUserOnSyncFlagAction(true));

    if (action.payload.editingUserId === null) {
      const datatoPush = {
        id: Date.now(), // for creating unique id
        ...action.payload.data,
      };
      yield put(actions.form.addUser(datatoPush));
      const usersList = yield select(selectUsersList);
      localStorage.setItem('usersList', JSON.stringify(usersList));
    } else {
      const usersList = yield select(selectUsersList);
      const formData = yield select(selectFormData);
      const newData = usersList.map(data =>
        data.id === action.payload.editingUserId
          ? { ...data, ...formData }
          : data
      );
      yield put(actions.form.pushEditedUsersData(newData));
      const newUsersList = yield select(selectUsersList);
      localStorage.setItem('usersList', JSON.stringify(newUsersList));
    }
    yield put(actions.form.updateDashboardAction());
    yield put(actions.form.clearForm());
    yield put(actions.form.setRegisterModalOpenAction(false));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.form.setUserOnSyncFlagAction(false));
  }
}

export { updateFormSaga, setUserDataSaga };
