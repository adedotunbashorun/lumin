<template>
  <home :products="productItems" />
</template>

<script lang="ts">
import Vue from 'vue';
import {mapGetters} from 'vuex';
import { products } from '~/apollo/graphql/product';
export default Vue.extend({
  layout: 'app',
  data: () => ({
    loading: 0,
  }),
  computed: {
    ...mapGetters('products',[
      'productItems'
    ])
  },
  async fetch() {
    const result = await (this as any).$apollo.query({ query: products(this.$store.state.currentCurrency) });
    this.$store.commit('products/setProducts', result.data.products);
  },
  components: {
    Home: () =>  import('@/components/Home.vue'),
  },
});
</script>
