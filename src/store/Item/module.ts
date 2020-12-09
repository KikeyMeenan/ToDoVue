import { Item, ItemSubmission } from '@/types/ToDoTypes';

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
      // proxy not working for post? hmmm
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
      })).json();
      // update items in state
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
