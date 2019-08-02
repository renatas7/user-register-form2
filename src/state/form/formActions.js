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

const updateFillingForm = payload => {
  return {
    type: constants.form.UPDATE_FILLING_FORM,
    payload,
  };
};

export const userActions = {
  updateDashboardAction,
  setUserOnSyncFlagAction,
  setRegisterModalOpenAction,
  updateFillingForm,
};
