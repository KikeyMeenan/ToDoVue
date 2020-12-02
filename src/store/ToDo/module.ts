import { Item } from '@/types/ToDoTypes';
import json from '../../../testData/items.json';

interface ToDoState {
  toDos: Array<Item>;
}

export const moduleGetters = {
  ToDos: (state: ToDoState, getters: any, rootState: any, rootGetters: any) => {
    let filteredResult = state.toDos;

    const assignedFilterActive = rootGetters['AssignedFilterModule/IsActive'] as boolean;
    if (assignedFilterActive) {
      filteredResult = filteredResult.filter((x) => x.assignedToUserId === 1);
    }

    const completeFilterActive = rootGetters['CompleteFilterModule/IsActive'] as boolean;
    if (completeFilterActive) {
      filteredResult = filteredResult.filter((x) => x.complete);
    }

    const highPriorityFilterActive = rootGetters['HighPriorityFilterModule/IsActive'] as boolean;
    if (highPriorityFilterActive) {
      filteredResult = filteredResult.filter((x) => x.priority > 1);
    }

    const categoryFilterSelected = rootGetters['CategoryFilterModule/Selected'];
    if (categoryFilterSelected && categoryFilterSelected !== '0') {
      filteredResult = filteredResult.filter(
        (x) => x.categoryId === parseInt(categoryFilterSelected, 10),
      );
    }

    return filteredResult;
  },
};

export default {
  namespaced: true,
  state: {
    toDos: json,
  } as ToDoState,
  getters: moduleGetters,
};
