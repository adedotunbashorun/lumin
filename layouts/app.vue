<template>
  <div>
    <main-header/>
    <main-side-bar/>
    <main role="main">
      <nuxt/>
    </main>
    <main-footer/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {
    MainHeader: () => import('@/components/Layouts/Header.vue'),
    MainFooter: () => import('@/components/Layouts/Footer.vue'),
    MainSideBar: () => import('@/components/Layouts/SideBar.vue'),
  },
})
</script>
