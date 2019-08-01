import { constants } from '../constants';

const setUserOnSyncFlagAction = flag => {
  return {
    type: constants.dashboard.SET_ON_SYNC_FLAG,
    flag,
  };
};

const clearUserStateAction = () => {
  return {
    type: constants.dashboard.CLEAR_USER_STATE,
  };
};

const updateDashboardAction = () => {
  return {
    type: constants.dashboard.UPDATE_DASHBOARD_DATA,
  };
};

const setformDataAction = payload => {
  return {
    type: constants.dashboard.SET_DASHBOARD_DATA,
    payload,
  };
};

const setRegisterModalOpenAction = payload => {
  return {
    type: constants.dashboard.REGISTER_MODAL_OPEN,
    payload,
  };
};

export const userActions = {
  clearUserStateAction,
  updateDashboardAction,
  setUserOnSyncFlagAction,
  setformDataAction,
  setRegisterModalOpenAction,
};
