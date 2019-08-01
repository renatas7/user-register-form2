import { userActions } from './dashboard/DashboardActions';
import { modalActions } from './modals/ModalsActions';

export const actions = {
  dashboard: userActions,
  modal: modalActions,
};
