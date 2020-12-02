<template>
  <b-navbar type="light" variant="light" class="navbar navbar-light bg-light">
    <b-navbar-brand class="col-md-8 col-lg-2 mr-0 px-3 ml-3">
       <b-navbar-nav class="">
          <b-nav-item>Lumin</b-nav-item>
      </b-navbar-nav>
    </b-navbar-brand>

    <div class="col-md-4 ml-auto text-right">
      <i class="fa fa fa-shopping-cart" target="sidebar-variant" @click="$store.dispatch('toggleSidebar')"></i>
    </div>
  </b-navbar>

</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Header',
})
</script>
