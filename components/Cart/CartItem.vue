<template>
  <div class="cart-items-container" v-if="cartItem">
    <h5 class="cart-prod-name">{{ cartItem.title }}
      <span style="margin-top: -5px;">
        <button type="button" class="close" @click="remove" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" >&times;</span>
        </button>
      </span>
    </h5>

    <div class="row" style="margin-top: 30px;">
      <div class="col-6">
          <div class="form-group">
              <div class="input-group">
                  <div class="input-group-btn">
                      <button id="down" class="btn btn-sm btn-default" @click="subtract()"><span class="fa fa-minus"></span></button>
                  </div>
                  <div class="input-group-btn">
                      <button id="up" class="btn btn-sm btn-default">{{ cartItem.quantity }}</button>
                  </div>
                  <div class="input-group-btn">
                      <button id="up" class="btn btn-sm btn-default" @click="add"><span class="fa fa-plus"></span></button>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-3">
          <p class="mt-1" style="color: black; font-weight: bold;">{{ currentCurrency }} {{ cartItem.price * cartItem.quantity }}</p>
      </div>
      <div class="col-3">
          <div class="">
              <div class="">
                  <img :src="cartItem.image_url" alt="Image" style="width: 35px; height: 35px;" class="img-fluid">
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {mapState, mapGetters} from 'vuex';
export default Vue.extend({
  name: 'CartItem',
  props: {
    cart: Object,
    index: Number
  },
  computed: {
    ...mapState([
      'currentCurrency'
    ]),
    ...mapGetters('carts',[
      'totalAmount','cartItems'
    ]),
    cartItem() {
      return this.cartItems.find((item: any, index: number) => index === this.index);
    }
  },
  methods: {
    add() {
      this.cart.quantity += 1
      this.$store.commit('carts/update', this.cart);
    },

    remove() {
      this.$store.commit('carts/remove', this.index);
    },

    subtract() {
      this.cart.quantity -= 1
      this.$store.commit('carts/update', this.cart);
    }
  }
})
</script>

