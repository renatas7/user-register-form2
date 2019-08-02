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

export const userActions = {
  updateDashboardAction,
  setUserOnSyncFlagAction,
  setRegisterModalOpenAction,
  formState,
  addUser,
  clearForm,
};
