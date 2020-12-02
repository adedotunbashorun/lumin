<template>
  <div class="col-md-4 col-6" v-if="product">
    <div class="post-entry text-center">
      <div class="custom-thumbnai">
        <img :src="product.image_url" alt="Image" class="img-fluid product-image">
      </div>
      <div class="post-content">
        <h3>{{ product.title }}</h3>
        <p>From {{ currentCurrency }} {{ product.price }}</p>
        <button class="btn btn-flat btn-cart" @click="addToCart()">Add to cart</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {mapState} from 'vuex';
export default Vue.extend({
  name: 'ProductListItem',
  props: {
    product: <any>Object,
  },
  computed: {
    ...mapState([
      'currentCurrency'
    ])
  },
  methods: {
    async addToCart() {
      this.$store.commit('carts/add', this.product);
      this.$store.commit('open');
    }
  }
})
</script>
