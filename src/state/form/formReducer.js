import { constants } from '../constants';

const INITIAL_STATE = {
  isOnSync: false,
  userFormModalIsOpen: false,
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
  formNotValid: false,
  addressUpdate: {},
  addressSelected: false,
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
        userFormModalIsOpen: action.payload,
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
        addressUpdate: {},
        addressSelected: false,
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
    case constants.form.FORM_NOT_VALID:
      return {
        ...state,
        formNotValid: action.payload,
      };
    case constants.form.UPDATE_ADDRESS_DATA:
      return {
        ...state,
        addressUpdate: action.payload,
      };
    case constants.form.CLEAR_ADDRESS_DATA:
      return {
        ...state,
        addressUpdate: {},
      };
    case constants.form.ADDRESS_SELECTED:
      return {
        ...state,
        addressSelected: action.payload,
      };
    default:
      return state;
  }
};
