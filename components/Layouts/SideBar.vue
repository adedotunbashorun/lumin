<template>
  <b-sidebar id="sidebar-no-header-title" width="500px" v-if="toggle" aria-labelledby="sidebar-no-header-title" no-header :visible="toggle" right shadow>
    <template>
      <div class="p-3">
        <h4 id="sidebar-no-header-title" class="text-center">
          <span class="fa fa-angle-left float-left" @click="$store.dispatch('toggleSidebar')"></span>
          <strong class="cart-header text-uppercase">Your Cart</strong>
        </h4>
        <div class="side-inner">
          <div class="form-group" style="width: 25%; margin-left: 20px;">
              <select class="form-control form-control-xs" @change="getProducts($event.target.value)">
                <option v-for="(cur, index) in currency" :key="index">{{ cur }}</option>
              </select>
          </div>
          <cart-item  v-for="(cart, index) in cartItems" :key="index" :index="index" :cart="cart"/>
          <div class="m-3 sidebar-footer">
              <div class="total border-top py-1">
                <p style="color: black;">Subtotal
                  <span class="pull-right"><strong class="total-price">${{ totalAmount }}</strong></span>
                </p>
              </div>
              <a href="#" class="btn btn-subscription rounded-0 btn-block mb-2">MAKE THIS A SUBSCRIPTION (SAVE 20%)</a>
              <a href="#" class="btn btn-checkout rounded-0 btn-block text-uppercase"> Proceed To Checkout</a>
          </div>
      </div>
      </div>
    </template>
  </b-sidebar>
</template>
<script lang="ts">
import Vue from 'vue';
import {mapGetters, mapState} from 'vuex';
import sidebarToggle from '~/mixins/sidebarToggle.ts';
import { currency } from '~/apollo/graphql/currency';
import { products } from '~/apollo/graphql/product';
export default Vue.extend({
  mixins: [sidebarToggle],
  name: 'SideBar',
  data: () => ({
    loading: 0,
    currency: []
  }),
  async fetch() {
    const result = await (this as any).$apollo.query({ query: currency });
    this.currency = result.data.currency;
  },
  computed: {
    ...mapGetters('carts',[
      'totalAmount','cartItems'
    ])
  },
  created() {
    console.log(this.cartItems);
  },
  components: {
    CartItem: () => import('~/components/Cart/CartItem.vue'),
  },
  methods: {
    async getProducts(currency: string) {
      this.$store.commit('setCurrency', currency);
      const result = await (this as any).$apollo.query({ query: products(currency) });
      this.$store.commit('products/setProducts', result.data.products);
      const data = result.data.products;
      const cartItems = this.cartItems;
      data.forEach((product: any) => {
        cartItems.forEach((cart: any) => {
          if(product.id === cart.id) {
            product.quantity = cart.quantity;
            this.$store.commit('carts/update', product);
          }
        });
      });
    }
  }
})
</script>
