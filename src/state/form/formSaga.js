import { actions } from '../actions';
import { put, select, call } from 'redux-saga/effects';
import {
  selectUsersList,
  selectFormData,
} from './../../utils/selectors/selectors';
import { geocodeByAddress } from 'react-places-autocomplete';
import { formatAddressData } from './../../utils/helpers/helpers';

function* updateFormSaga() {
  try {
    yield put(actions.form.setUserOnSyncFlagAction(true));
    const userListData = localStorage.getItem('usersList');
    if (userListData !== undefined && userListData !== null) {
      const parsedData = JSON.parse(userListData);
      yield put(actions.form.pushEditedUsersData(parsedData));
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.form.setUserOnSyncFlagAction(false));
  }
}

function* setUserDataSaga(action) {
  try {
    yield put(actions.form.setUserOnSyncFlagAction(true));
    const payloadData = action.payload;
    const allfeeldAreFilled = Object.values(payloadData.data).some(
      x => x === undefined || x === ''
    );

    if (!allfeeldAreFilled) {
      if (payloadData.editingUserId === null) {
        const datatoPush = {
          id: Date.now(), // for creating unique id
          ...payloadData.data,
        };
        yield put(actions.form.addUser(datatoPush));
        const usersList = yield select(selectUsersList);
        localStorage.setItem('usersList', JSON.stringify(usersList));
        yield put(actions.form.formNotValid(false));
      } else {
        const usersList = yield select(selectUsersList);
        const formData = yield select(selectFormData);
        const newData = usersList.map(data =>
          data.id === payloadData.editingUserId
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
      yield put(actions.form.formNotValid(false));
    } else {
      yield put(actions.form.formNotValid(true));
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.form.setUserOnSyncFlagAction(false));
  }
}

function* formatAddressDataSaga(action) {
  try {
    yield put(actions.form.setUserOnSyncFlagAction(true));
    const address = action.payload.address;
    const formData = action.payload.data;
    const results = yield call(geocodeByAddress, address);
    const rawAddress = { ...results[0].address_components };

    // const addressData = formData
    // addressData.street = rawAddress[1].short_name;
    // addressData.house = rawAddress[0].short_name;
    // addressData.city = rawAddress[2].short_name;
    // addressData.country = rawAddress[5].long_name;
    // addressData.zipCode = rawAddress[6].short_name;

    const formatted = formatAddressData(formData, rawAddress);
    console.log(formatted);

    yield put(actions.form.updateAddressData(formatted));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.form.setUserOnSyncFlagAction(false));
  }
}

export { updateFormSaga, setUserDataSaga, formatAddressDataSaga };
