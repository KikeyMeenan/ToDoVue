import { Item, ItemSubmission } from '@/types/ToDoTypes';
// import router from '@/router/index';
import ActionStatus from '@/types/ActionStatus';

interface State {
  activeItemId: number | null;
  items: Array<Item> | null;
}

export default {
  namespaced: true,
  state: {
    activeItemId: null,
    items: null,
  } as State,
  mutations: {
    setActiveItemId(state: State, payload: number) {
      state.activeItemId = payload;
    },
    setItems(state: State, payload: Array<Item>) {
      state.items = payload;
    },
  },
  actions: {
    async getItems(context: any) {
      const items = await (await fetch('/api/items')).json();
      context.commit('setItems', items);
    },
    async createItem(context: any, payload: ItemSubmission) {
      // update via api here
      const result = await (await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })).status;

      if (result === 200) {
        // actually, we should probably have a generic service
        // that handles requests and error handling
        // instead of having to do this on every request

        // put this thing on the main level so it shows even after navigation
        // if we don't have those levels, add them!
        context.dispatch('updateActionStatus', ActionStatus.Success);
        context.dispatch('updateActionMessage', 'successfuly added item');
      }
      else {
        context.dispatch('updateActionStatus', ActionStatus.Error);
        context.dispatch('updateActionMessage', 'failed to add item');
      }
    },
    editItem(context: any, payload: ItemSubmission) {
      // update via api here
      console.log('edit', payload);
      // update items in state
    },
    setActiveItemId(context: any, payload: string) {
      context.commit('setActiveItemId', parseInt(payload, 10));
    },
  },
  getters: {
    getActiveItem: (state: State) => state.items?.find((x) => x.id === state.activeItemId),
    getItems: (state: State) => state.items,
  },
};
