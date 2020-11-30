import Vue from 'vue';
import Vuex from 'vuex';
import ToDoModule from './ToDo/module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ToDoModule,
  },
});
