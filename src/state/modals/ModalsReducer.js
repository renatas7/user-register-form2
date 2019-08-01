import { constants } from '../constants';

const INITIAL_STATE = {
  globalLoaderModalVisible: false,
  globalErrorModalVisible: false,
  globalInfoModalVisible: false,
};

export const modalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.modals.SET_MODAL_VISIBLE_FLAG:
      const { payload } = action;
      const key: string = payload.modalName + 'Visible';
      return {
        ...state,
        [key]: payload.visible,
      };
    default:
      return state;
  }
};
