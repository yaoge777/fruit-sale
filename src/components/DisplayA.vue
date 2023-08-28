<template>
  <el-skeleton
    style="width: 17rem; margin:3rem"
    animated
    :loading="loading"
    class="cards"
  >
    <template #template>
      <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
      <div style="padding: 14px">
        <el-skeleton-item variant="h3" style="width: 50%" />
        <div
          style="
            display: flex;
            align-items: center;
            justify-items: space-between;
            margin-top: 16px;
            height: 16px;
          "
        >
          <el-skeleton-item variant="text" style="margin-right: 16px" />
          <el-skeleton-item variant="text" style="width: 30%" />
        </div>
      </div>
    </template>
    <template #default>
      <div class="exhibit">
        <div v-for="i in imgs" :key="i.path"  class="cards">
          <div class="img-frame">
            <img v-lazy="i.path" :src= "i.path">
            <p>hover and add to cart</p>
            <div class="icon">
              <ShoppingCart class="cart" @click="addToCart(i)"/>
            </div>
          </div>
          <p class="title">{{i.name}}</p>
          <p>${{i.price}}</p>
          <el-rate v-model="rate" />
        </div>
      </div>
    </template>
  </el-skeleton>


</template>

<script setup lang="ts">
/* eslint-disable */
import { onMounted, ref, watch} from 'vue';
import {getFruitCards} from '@/api/index'
import {imgData} from '@/data/imgData'
import {useCartStore} from '@/state/index'
import { ElMessage } from 'element-plus';
import type {Directive} from 'vue'
const imgs = ref<imgData[]>([])
const loading = ref<boolean>(true)
const rate = ref(0)
const cartStore = useCartStore()

const props = defineProps<{
  cat:number
}>()


watch(props, () => {
  loading.value=true
  setTimeout(() => {
    imgs.value=[...imgs.value.slice(props.cat+1), ...imgs.value.slice(0,props.cat+1)]
    loading.value=false
  }, 500)
})

const addToCart = (good:imgData) => {

for(let i=0; i < cartStore.goods.length; i++){
  if(cartStore.goods[i].id == good.id){
    cartStore.goods[i].quantity += 1
    ElMessage({
      type:'info',
      message:'amount +1'    
    })
    return
  }
}
  cartStore.goods.push({...good, quantity:1,isChecked:true})
  ElMessage({
        type:'info',
        message:'successfully added!'    
  })
}

const sleep = (t:number) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, t)
  })
}

const vLazy:Directive<HTMLImageElement, string> = async (el, binding) => {
  const def = await import('@/assets/logo.png')
  el.src = def.default
  const observerOptions = {
      threshold: 0.5
  };
  const obs = new IntersectionObserver(ent => {
    if(ent[0].isIntersecting) {
      setTimeout(() => {
        el.src = binding.value
      },1000)
     
      obs.unobserve(el)
    } 
  },observerOptions)
  obs.observe(el)
}

onMounted(() => {
  Promise.all([getFruitCards(), sleep(300)]).then((res) => {
    imgs.value= res[0].data.data.reverse()
    loading.value=false
  })
})
</script>

<style lang="less" scoped>

.exhibit{
display: flex;
justify-content: space-around;
align-items: center;
padding: 2rem 2rem;
flex-wrap: wrap;
gap: 1rem;

.img-frame{
  width: 100%;
  overflow: hidden;
  position: relative
}

.img-frame:nth-child(1) p{
  
      z-index: 99;
      position:absolute;
      bottom: 30px;
      right: 5%;
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

.img-frame:hover{
  img{
    transform: scale(1.1) rotate(5deg);
    transition: 0.55s ease-in-out;
  }
  .icon{
    height: auto;
    .cart{
      height:3rem;
      padding: 0.7rem;
      transition: all 0.2s;
    }
  }
  
}
.icon{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  width: 100%;
  height:0;
  z-index: 100;
  overflow-y: hidden;
  transition: height 5s;
    
  .cart{
    width: 3rem;
    height: 0;
    border: 1px solid rgb(200, 200, 200);
    background-color: white;
    padding: 0;
   
  }

  .cart:hover{
    cursor: pointer;
    background-color: #bac34e;
  }
}


.cards{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 17rem;
  gap: 1rem;
  border: 1px solid rgb(239, 239, 239);


  .title{
    font-size: 1rem;
    font-weight: 700;
  }

  .title:hover {
    cursor:pointer;
    color: #bac34e;
    transition: all 0.3s
  }
}


}


</style>