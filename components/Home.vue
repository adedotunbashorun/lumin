<template>
  <div>
    <div class="container">
      <div class="row py-4 px-3">
        <div class="col-6 mr-auto">
          <h3>All Products</h3>
          <span>A 360 Look at Lumin</span>
        </div>
        <div class="col-6 ml-auto">
          <b-form class="mt-4" @submit.stop.prevent="onSubmit">
            <DynamicForm
              :schema="filterSchema"
              v-model="filterForm"
              @status="saveStatus"
              ref="dynamicForm"
            />
          </b-form>
        </div>
      </div>
    </div>
    <product-list :products="products" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import filterSchema from '@/schema/filter';
export default Vue.extend({
  name: 'Home',
  props: {
    products: Array
  },
  components: {
    ProductList: () => import('@/components/Products/ProductList.vue'),
    DynamicForm: () => import('@/components/Forms/DynamicForm.vue')
  },
  data: () => {
    return {
      loading: false,
      filterSchema,
      filterForm: {},
      status: null
    }
  },
  mounted() {
    this.getOptions();
  },
  methods: {
    async onSubmit() {
      const formData: any = {...this.filterForm}
        if (!formData) {
            return;
        }
        this.loading = true;
        console.log(formData);
        this.loading = false;
    },
    saveStatus (status: any) {
      this.status = status
    },
    getOptions() {
      this.filterSchema.filter.options = [
        { value: null, text: 'Filter By' },
        { value: 'price', text: 'Price' },
      ]
    }
  }
})
</script>
