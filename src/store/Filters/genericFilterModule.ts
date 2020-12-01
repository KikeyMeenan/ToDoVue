import { Item } from '@/types/ToDoTypes';

interface FilterState {
  active: boolean;
}

export interface Filter {
  moduleName: string,
  filterMethod: (Item: Item) => boolean,
  module: any
}

export default function (moduleName: string, filterMethod: (Item: Item) => boolean): Filter {
  return {
    moduleName,
    filterMethod,
    module: {
      namespaced: true,
      state: {
        active: false,
      } as FilterState,
      getters: {
        IsActive: (state: FilterState) => state.active,
      },
      mutations: {
        toggleActive(state: FilterState) {
          state.active = !state.active;
        },
      },
      actions: {
        toggleActive(context: any) {
          context.commit('toggleActive');
        },
      },
    },
  };
}
