import { CreateItem } from '@/types/ToDoTypes';

export default {
  namespaced: true,
  actions: {
    createItem(context: any, payload: CreateItem) {
      // update via api here
      console.log(1, payload);
    },
  },
};
