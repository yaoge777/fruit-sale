<template>
  <div class="search-header">
    <div class="logo">
      <h1>Fruit <span>sale</span> </h1>
    </div>

    <div class="search">
      <el-dropdown trigger="click" size="large">
          <span class="el-dropdown-link">
            select type<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item >Item 1</el-dropdown-item>
              <el-dropdown-item >Item 2</el-dropdown-item>
              <el-dropdown-item >Item 3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
      </el-dropdown>
      <el-input v-model="input" placeholder="Please input" />
      <el-icon class="search-icon"><Search /></el-icon>
    </div>

    <div class="icon">
      <Avatar style="width:2rem" class="e-icon"/>
      <View style="width:2rem" class="e-icon"/>
      <span @click="() => cartStore.isShow = true" >
        <p>check the cart here</p>
        <Goods style="width:2rem" class="e-icon"/>
        <div class="goods-amount">{{ cartStore.goods.length }}</div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {  ref } from 'vue';
import { useCartStore } from '@/state';

const cartStore = useCartStore()
const input= ref<string>('')
</script>

<style lang='less' scoped>
.search-header{
  display: flex;
  padding: 1rem 1.2rem;
  justify-content: center;
  align-items: center;

  .logo, .icon,  .search{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .search{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    flex: 40% 10% 10%;

    .el-dropdown{
      width: 15vw;
      height: 3rem; 
      font-size: 1rem;
      border: 1px solid gray;
      display:flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
    }
    .el-input{
      width: 19vw; 
      height:3rem;
      font-size: 1rem;
      border: 1px solid gray;
    }
    .search-icon{
      width: 3rem;
      height:3rem;
      border: 1px solid gray;
    }
  }
  .logo h1{
    background: linear-gradient(to bottom,  rgb(98, 255, 0) 0%, rgb(98, 255, 0) 50%, rgb(60, 92, 52) 51%, rgb(60, 92, 52)  100%);
    font-size: 4rem;
    font-style: italic;
    color: transparent; 
    -webkit-background-clip: text; 
    span{
      background: linear-gradient(to bottom,  rgb(98, 255, 0) 0%, rgb(98, 255, 0) 50%, rgb(60, 92, 52) 51%, rgb(60, 92, 52)  100%);
      font-size: 3rem;
      color: transparent; 
      -webkit-background-clip: text; 
    }
  }

  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .e-icon:hover,  span:hover{
      cursor:pointer
    }


    span{
      position: relative;
      p{
        position:absolute;
        font-size: 20px;
        font-weight: bold;
        top: -20px;
        left:-30px;
        width:200px;
        color: red;
        transform: translateY(0);

        @keyframes bigger {
          50%{
            transform: translateY(-20px);
          }

          100%{
            transform: translateY(0);
          }
        }
        animation: bigger 2s ease-in-out infinite;

      }

    }
    

    span div{
      width: 1.5rem;
      height: 1.5rem;
      font-size: 0.5rem;
      border-radius: 50%;
      background-color: red;
      color: white;
      position: absolute;
      right:0;
      top:0;
      text-align: center;
      line-height: 1.5rem;
    }
  }
}
</style>