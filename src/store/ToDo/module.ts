import { Item } from '@/types/ToDoTypes';
import json from '../../../testData/items.json';

interface ToDoState {
  toDos: Array<Item>;
}

export default {
  namespaced: true,
  state: {
    toDos: json,
  } as ToDoState,
  getters: {
    ToDos: (state: ToDoState, getters: any, rootState: any, rootGetters: any) => {
      const completeFilterActive = rootGetters['CompleteFilterModule/IsActive'] as boolean;
      if (completeFilterActive) {
        return state.toDos.filter((x) => x.complete);
      }
      return state.toDos;
    },
  },
};
