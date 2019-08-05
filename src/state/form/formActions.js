import { constants } from '../constants';

const setUserOnSyncFlagAction = flag => {
  return {
    type: constants.form.SET_ON_SYNC_FLAG,
    flag,
  };
};

const updateDashboardAction = () => {
  return {
    type: constants.form.UPDATE_DASHBOARD_DATA,
  };
};

const setRegisterModalOpenAction = payload => {
  return {
    type: constants.form.REGISTER_MODAL_OPEN,
    payload,
  };
};

const formState = payload => {
  return {
    type: constants.form.UPDATE_FILLING_FORM,
    payload,
  };
};

const addUser = payload => {
  return {
    type: constants.form.ADD_USER,
    payload,
  };
};

const clearForm = () => {
  return {
    type: constants.form.CLEAR_FORM,
  };
};

const editingUserId = payload => {
  return {
    type: constants.form.EDITING_USER_ID,
    payload,
  };
};

const setUserData = payload => {
  return {
    type: constants.form.SET_USER_DATA,
    payload,
  };
};

const pushEditedUsersData = payload => {
  return {
    type: constants.form.PUSH_EDITED_USERS_DATA,
    payload,
  };
};

const formNotValid = payload => {
  return {
    type: constants.form.FORM_NOT_VALID,
    payload,
  };
};

const pushAddressData = payload => {
  return {
    type: constants.form.PUSH_ADDRESS_DATA,
    payload,
  };
};

export const userActions = {
  updateDashboardAction,
  setUserOnSyncFlagAction,
  setRegisterModalOpenAction,
  formState,
  addUser,
  clearForm,
  editingUserId,
  setUserData,
  pushEditedUsersData,
  formNotValid,
  pushAddressData,
};
