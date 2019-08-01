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

const setDashboardDataAction = payload => {
  return {
    type: constants.dashboard.SET_DASHBOARD_DATA,
    payload,
  };
};

export const userActions = {
  clearUserStateAction,
  updateDashboardAction,
  setUserOnSyncFlagAction,
  setDashboardDataAction,
};
