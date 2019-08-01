import { constants } from '../constants';

const setModalVisibleFlagAction = payload => {
  return {
    type: constants.modals.SET_MODAL_VISIBLE_FLAG,
    payload,
  };
};

export const modalActions = {
  setModalVisibleFlagAction,
};
