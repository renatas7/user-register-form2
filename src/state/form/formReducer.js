import { constants } from '../constants';

const INITIAL_STATE = {
  isOnSync: false,
  registerModalIsOpen: false,
  formData: {
    id: null,
    name: '',
    surname: '',
    email: '',
    street: '',
    house: '',
    city: '',
    country: '',
    zipCode: '',
  },
  editingUserId: null,
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
    case constants.form.PUSH_EDITED_USERS_DATA:
      return {
        ...state,
        usersList: [...action.payload],
      };
    case constants.form.CLEAR_FORM:
      return {
        ...state,
        formData: {
          id: null,
          name: '',
          surname: '',
          email: '',
          street: '',
          house: '',
          city: '',
          country: '',
          zipCode: '',
        },
        editingUserId: null,
      };
    case constants.form.ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };
    case constants.form.EDITING_USER_ID:
      return {
        ...state,
        editingUserId: action.payload,
      };
    default:
      return state;
  }
};
