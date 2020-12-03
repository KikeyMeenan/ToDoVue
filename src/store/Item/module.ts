import { ItemSubmission } from '@/types/ToDoTypes';
import json from '../../../testData/items.json';

interface State {
  activeItemId: number | null;
  test: number;
}

export default {
  namespaced: true,
  state: {
    activeItemId: null,
    test: 2,
  } as State,
  mutations: {
    setActiveItemId(state: State, payload: number) {
      state.activeItemId = payload;
    },
  },
  actions: {
    createItem(context: any, payload: ItemSubmission) {
      // update via api here
      console.log('create', payload);
    },
    editItem(context: any, payload: ItemSubmission) {
      // update via api here
      console.log('edit', payload);
    },
    setActiveItemId(context: any, payload: string) {
      context.commit('setActiveItemId', parseInt(payload, 10));
    },
  },
  getters: {
    getActiveItem: (state: State) => json.find((x) => x.id === state.activeItemId),
  },
};
