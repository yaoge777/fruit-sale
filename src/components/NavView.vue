<template>
  <div class="nav">
    <span @click="handleHome">Home</span>
    <span>About</span>
    <span>Shop</span>
    <span>Pages</span>
    <span>Blog</span>
    <span>Contact</span>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import {useCartStore} from '@/state/index'
const cartStore = useCartStore()
const router = useRouter()

const handleHome = () => {
  cartStore.isShow = false
  router.push('/home')
}
</script>

<style lang="less" scoped>
.nav{
  display: flex;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  background-color: rgb(186,195,78);
  gap: 3rem;

  span{
    height: 2rem;
    line-height: 2rem;
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 1rem;
  }
  span:hover{
    cursor:pointer
  }
}
</style>