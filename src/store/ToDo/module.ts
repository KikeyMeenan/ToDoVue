import { Item } from '@/types/ToDoTypes';
import activeFilters from '@/store/Filters/activeFilters';
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
      let filteredResult = state.toDos;

      activeFilters.forEach((filter) => {
        const filterActive = rootGetters[`${filter.moduleName}/IsActive`] as boolean;
        if (filterActive) {
          filteredResult = filteredResult.filter((x) => filter.filterMethod(x));
        }
      });

      return filteredResult;
    },
  },
};
