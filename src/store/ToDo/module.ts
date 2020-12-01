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
      const assignedFilterActive = rootGetters['AssignedFilterModule/IsActive'] as boolean;
      const highPriorityFilterActive = rootGetters['HighPriorityFilterModule/IsActive'] as boolean;

      let filteredResult = state.toDos;

      if (completeFilterActive) {
        filteredResult = filteredResult.filter((x) => x.complete);
      }
      if (assignedFilterActive) {
        filteredResult = filteredResult.filter((x) => x.assignedToUserId === 1);
      }
      if (highPriorityFilterActive) {
        filteredResult = filteredResult.filter((x) => x.priority > 1);
      }

      return filteredResult;
    },
  },
};
