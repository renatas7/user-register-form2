import { combineReducers } from 'redux';
import { userReducer } from './form/formReducer';
import { modalsReducer } from './modals/ModalsReducer';

export const reducers = combineReducers({
  formState: userReducer,
  modalsState: modalsReducer,
});
