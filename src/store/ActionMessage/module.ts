import ActionStatus from '@/types/ActionStatus';

interface State {
  actionResultDisplay: boolean;
  actionStatus: ActionStatus;
  actionMessage: string | null;
}

export default {
  namespaced: true,
  state: {
    actionResultDisplay: false,
    actionStatus: ActionStatus.None,
    actionMessage: null,
  } as State,
  mutations: {
    setActionResultDisplay(state: State, payload: boolean) {
      state.actionResultDisplay = payload;
    },
    setActionStatus(state: State, payload: ActionStatus) {
      state.actionStatus = payload;
    },
    setActionMessage(state: State, payload: string) {
      state.actionMessage = payload;
    },
  },
  actions: {
    updateActionResultDisplay(context: any, payload: boolean) {
      context.commit('setActionResultDisplay', payload);
    },
    updateActionStatus(context: any, payload: ActionStatus) {
      context.commit('setActionStatus', payload);
    },
    updateActionMessage(context: any, payload: string) {
      context.commit('setActionMessage', payload);
    },
  },
  getters: {
    getActionResultDisplay: (state: State) => state.actionResultDisplay,
    getActionStatus: (state: State) => state.actionStatus,
    getActionMessage: (state: State) => state.actionMessage,
  },
};
