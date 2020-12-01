interface FilterState {
  active: boolean;
}

export default {
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
};
