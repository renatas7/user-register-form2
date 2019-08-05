import { actions } from '../actions';
import { put, select } from 'redux-saga/effects';
import {
  selectUsersList,
  selectFormData,
} from './../../utils/selectors/selectors';
import { geocodeByAddress } from 'react-places-autocomplete';

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
    geocodeByAddress(address).then(results => {
      const rawAddress = { ...results[0].address_components };
      formData.street = rawAddress[1].short_name;
      formData.house = rawAddress[0].short_name;
      formData.city = rawAddress[2].short_name;
      formData.country = rawAddress[5].long_name;
      formData.zipCode = rawAddress[6].short_name;
      return formData;
    });
    console.log(formData);
    const aa = {
      name: 'fefefefe',
      surname: 'fef',
      email: 'efefe',
      street: 'Savanorių pr.',
      house: '180',
      city: 'Vilnius',
      country: 'Lietuva',
      zipCode: '03154',
    };
    yield put(actions.form.formState(aa));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.form.setUserOnSyncFlagAction(false));
  }
}

export { updateFormSaga, setUserDataSaga, formatAddressDataSaga };
