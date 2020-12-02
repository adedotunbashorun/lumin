import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  products: <any>[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  productItems: state => state.products,
}

export const mutations: MutationTree<RootState> = {
  setProducts(state, payload) {
    state.products = payload;
  },
}
