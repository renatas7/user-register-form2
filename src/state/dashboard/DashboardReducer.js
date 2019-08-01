import { constants } from '../constants';

const INITIAL_STATE = {
  isOnSync: false,
  dashboardData: {},
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.dashboard.SET_ON_SYNC_FLAG:
      return {
        ...state,
        isOnSync: action.flag,
      };
    case constants.dashboard.UPDATE_DASHBOARD_DATA:
      return {
        ...state,
        dashboardData: action,
      };
    case constants.dashboard.SET_DASHBOARD_DATA:
      return {
        ...state,
        dashboardData: action.payload,
      };

    default:
      return state;
  }
};
