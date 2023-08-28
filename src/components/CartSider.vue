<template>
  <div class="cart-container" @click.self="handleClose">
    <div class="cart-sider">
      <div class="title" style="display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width:100%">
        <p>Shopping Cart</p> 
        <button class='close' @click="handleClose">close</button>
      </div>
       <div class="goods">
          <div v-if="cartStore.goods.length==0">
            <h1>There is not stuff in the cart</h1> 
          </div>
         <div v-for="i in cartStore.goods" :key="i.path+i.name" class="good">
          <img :src="i.path">
          <div class="goods-desc">
            <div style="display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width:100%">
              <h3>{{ i.name }}</h3>
              <button @click="handleDelete(i.id)">Delete</button>
            </div>
            <div style="display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width:100%">
              <p>${{ i.price }}</p>
              <p>数量：{{ i.quantity }}</p>
            </div>
            
            
          </div>
         </div>
       </div>
       
      <div class="viewcart">
        <h3>click to view cart</h3>
        <div class="subtotal" style="display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width:100%">
          <p>total</p>
          <p>${{total}}</p>
        </div>
        <button @click="router.push('/cart')">view cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/state';
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const cartStore = useCartStore()
const total = computed(() => cartStore.goods.reduce((a,c) => a+parseInt(c.price)*c.quantity, 0))
const handleDelete = (id:string) => {
  cartStore.goods.forEach((v,i) => {
    if(v.id == id){
      cartStore.goods.splice(i,1)
    }
  })
}

const handleClose = () => {
  const t = document.querySelector('.cart-sider') as HTMLElement
  t.style.transform = 'translateX(40vw)'
  
  setTimeout(() => {
    cartStore.isShow = false
  }, 700)
  
}

onMounted(() => {

  setTimeout(() => {
    const t = document.querySelector('.cart-sider') as HTMLElement
    t.style.transform = 'translateX(0)'
  }, 200)
  
  // t.animate({transform:'translateX(0)'}, 600)
})

</script>

<style lang="less" scoped>

.cart-container{
  width:100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.576);
  position: fixed;
  top:0;
  z-index:9999;

}
.cart-sider{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position:absolute;
  right:0;
  height:100vh;
  background-color: white;
  padding: 3rem;
  gap: 2rem;
  width: 40vw;
  transition: all 0.5s;
  transform: translateX(40vw);
  // animation: trans 0.5s;
  // @keyframes trans {
  //   100%{
  //     transform:translateX(0)
  //   }
  // };
  // animation-fill-mode:forwards;
  .title{
    font-weight: 700;
    font-size: 1rem
  }
  .goods{
    height: 65vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    overflow-y: scroll;

    .good{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1.5rem;
      padding: 2rem 0.5rem;
      border-bottom: 1px solid rgb(187, 187, 187);
      .goods-desc{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1.5rem;
        width: 20vw;
        h3{
          font-weight: 200;
          font-size: 1rem;
        }

        p{
          font-weight: 300;
          font-size: 0.5rem;
        }

        button {
          font-size: 0.5rem;
          padding: 0.3rem 0.5rem;
          border: none;
          background-color: rgb(249, 103, 103);
        }
      }

      img{
        width: 7vw
      }
    }
   
  }

  .viewcart{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 2rem;
    position: relative;
    button{
      width: 100%;
      height: 2rem;
      background-color: black;
      color:white;
      font-size: medium;
      border:none
    }

    button:hover{
      background-color: rgb(92, 146, 42);
      cursor:pointer
    }
    h3{
      z-index: 100;
      position:absolute;
        bottom: 30px;
        left:140px;
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
}

.close{
  background-color:black; 
  color:white; 
  border:none
}

.close:hover{
  cursor: pointer;
}
</style>