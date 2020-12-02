export const strict = false;
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    carts: <any>[],
})
export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    totalAmount: (state) => {
        const total = state.carts.reduce((accum: number, item: any) => accum + (Number(item.price) * Number(item.quantity)), 0);
        return total;
    },
    cartItems: state => state.carts,
}

export const mutations: MutationTree<RootState> = {

    add(state, payload: any) {
        const index = state.carts.findIndex((item: any) => item.id === payload.id);
        if (index !== -1) {
            payload.quantity += 1;
            state.carts.splice(index, 1, payload);
        } else {
            payload.quantity = 1;
            state.carts.push(payload);
        }
    },

    remove(state, payload) {
        state.carts.splice(payload, 1);
    },

    update(state, payload) {
        const index = state.carts.findIndex((item: { id: any; }) => item.id === payload.id);
        if (index !== -1) state.carts.splice(index, 1, payload);
    },
}
