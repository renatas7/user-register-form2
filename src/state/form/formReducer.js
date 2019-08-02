import { constants } from '../constants';

const INITIAL_STATE = {
  isOnSync: false,
  registerModalIsOpen: false,
  formData: {
    name: '',
    surname: '',
    email: '',
    address: '',
  },
  usersList: [],
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.form.SET_ON_SYNC_FLAG:
      return {
        ...state,
        isOnSync: action.flag,
      };
    case constants.form.REGISTER_MODAL_OPEN:
      return {
        ...state,
        registerModalIsOpen: action.payload,
      };
    case constants.form.UPDATE_FILLING_FORM:
      return {
        ...state,
        formData: { ...action.payload },
      };
    case constants.form.CLEAR_FORM:
      return {
        ...state,
        formData: {
          name: '',
          surname: '',
          email: '',
          address: '',
        },
      };
    case constants.form.ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };

    default:
      return state;
  }
};
