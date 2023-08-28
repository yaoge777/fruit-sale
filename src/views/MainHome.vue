<template>
  
  <div>
    <div>
      <HeaderView/>
    </div>
    <div>
      <MenuView></MenuView>
      <NavView></NavView>
    </div>
    <div>
      <router-view></router-view>
    </div>
   
  </div>
</template>

<script setup lang="ts">
import HeaderView from '@/components/HeaderView.vue';
import MenuView from '@/components/MenuView.vue';
import NavView from '@/components/NavView.vue';



</script>

<style lang="scss" scoped>

</style>