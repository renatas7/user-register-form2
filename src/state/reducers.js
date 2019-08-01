import { combineReducers } from 'redux';
import { userReducer } from './dashboard/DashboardReducer';
import { modalsReducer } from './modals/ModalsReducer';

export const reducers = combineReducers({
  dashboardState: userReducer,
  modalsState: modalsReducer,
});
