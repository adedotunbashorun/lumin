<template>
  <div class="site-section" style="background-color: #E1E6E2;">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="row">
            <product-list-item v-for="(product, index) in products" :key="index" :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ProductList',
  props: {
    products: Array
  },
  components: {
    ProductListItem: () => import('@/components/Products/ProductListItem.vue')
  },
})
</script>
