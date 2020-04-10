import Vue from 'vue';
import Vuex from 'vuex';
import UserModule from '@/store/modules/user';
import { getModule } from 'vuex-module-decorators';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    UserModule,
  },
});

export default store;
export const userModule = getModule(UserModule, store);
