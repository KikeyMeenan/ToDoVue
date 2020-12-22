import { Item, ItemSubmission } from '@/types/ToDoTypes';
// import router from '@/router/index';
import { processRequest, Request, requestTypes } from '@/api/service';

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
      const items = await processRequest(
        context,
        {
          url: '/api/items',
          showSuccess: false,
          showError: true,
          requestType: requestTypes.GET,
          errorMessage: 'failed to get items',
        } as Request,
      );
      context.commit('setItems', await items?.json());
    },
    async createItem(context: any, payload: ItemSubmission) {
      await processRequest(
        context,
        {
          url: '/api/items',
          showSuccess: true,
          showError: true,
          requestType: requestTypes.POST,
          body: JSON.stringify(payload),
          successMessage: 'successfully created item',
          errorMessage: 'failed to create item',
        } as Request,
      );
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
