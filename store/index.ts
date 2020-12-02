import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  toggleSidebar: false,
  currentCurrency: 'USD',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  toggleSidebar: state => state.toggleSidebar,
}

export const mutations: MutationTree<RootState> = {
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar;
  },

  open(state) {
    state.toggleSidebar = true;
  },

  setCurrency(state, payload) {
    state.currentCurrency = payload;
  },
}

export const actions: ActionTree<RootState, RootState> = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  },
}
