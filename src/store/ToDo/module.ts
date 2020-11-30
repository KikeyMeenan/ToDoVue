import { Item } from '@/types/ToDoTypes';

interface ToDoState {
  toDos: Array<Item>;
}

export default {
  namespaced: true,
  state: {
    toDos: [
      { id: 1, name: 'item 1' },
      { id: 2, name: 'item 2' },
    ],
  } as ToDoState,
  getters: {
    ToDos: (state: ToDoState) => state.toDos,
  },
};
