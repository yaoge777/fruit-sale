<template>

  <div class="cart-main">
    <table>
      <thead>
        <tr>
          <th> <input type="checkbox" v-model="checkAll"> Check All</th>
          <th>Images</th>
          <th>Product</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <TransitionGroup name="list">
        <tr v-for="i in cartStore.goods" :key="i.id+i.name">
          <td>
            <input type="checkbox" v-model="i.isChecked" @click='handleSelect(i)'>
          </td>
          <td>  
             <img :src="i.path">
          </td>
          <td>
            {{ i.name }}
          </td>
          <td>
            ${{ i.price }}
          </td>
          <td>
            <span @click="handleQuan('m', i)">-</span> {{ i.quantity }} <span @click="handleQuan('a', i)">+</span>
          </td>
          <td>
            ${{  parseInt(i.price)*i.quantity  }}
          </td>
          <td>
            <p class="delete" @click="handleDelete(i.id)">x</p> 
          </td>

        </tr>
        </TransitionGroup>
        <tr>
          <td>

          </td>
          <td>  

          </td>
          <td>

          </td>
          <td>

          </td>
          <td>

          </td>
          <td>

          </td>
          <td class="total-price">
            total:${{total}}
          </td>
        </tr>
        
      </tbody>
    </table>
    <div class="payment">
      <div>
        <input type="text" placeholder="coupond code">
        <button>Apply Coupond</button>
      </div>

      <div>
        <button>Proceed To Pay</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from '@/state/index'
import {computed} from 'vue';
import {cartData} from '@/data/imgData'


const cartStore = useCartStore()


const total = computed(() => {
  let ret = 0
  for(const i of cartStore.goods){
    if(i.isChecked) ret += i.quantity* parseInt(i.price)
  }
  return ret
})
const checkAll = computed({
  get: () => {
    return cartStore.goods.filter(v => v.isChecked).length === cartStore.goods.length
  },

  set: (v) => {

    if(v == true) {

      for(const i of cartStore.goods) i.isChecked=true
    } else {

      for(const i of cartStore.goods) i.isChecked=false
    }       
  }
})

const handleSelect = (i:cartData) => {
    i.isChecked =! i.isChecked

}



const handleQuan = (v:string, t:cartData) => {
  if(v=='m' && t.quantity >1){
    t.quantity -= 1
  }
  else if (v=='a') {
    t.quantity += 1
  }
}

const handleDelete = (id:string) => {
  let i=0
  for(let idx=0; idx < cartStore.goods.length; idx++){
    if(cartStore.goods[idx].id == id){
      i = idx
      break
    }
  }
  cartStore.goods.splice(i,1)


}



</script>

<style lang="less" scoped>

.cart-main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  table{
    width: 100%;
  }

}


th, td {
  border: 1px solid rgb(192, 192, 192);
  border-top-width: 0;
  border-left-width: 0;
  padding: 1rem;
  text-align: center;

  img{
    width: 6rem;
  }

  span{
    border: 1px solid gray;
    font-size: 1rem;
    padding: 0.1rem
  }

  span:hover{
    cursor: pointer
  }
  .delete{
    font-size: 1.5rem;
    color: gray;
  }

  .delete:hover{
    cursor: pointer
  }
}

th{
  border-top-width: 1px
}
th:first-child,
td:first-child {

  border-left-width:1px;
  
}

tr:last-child td{
  border-width: 0;
}

tr:last-child td:last-child{
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
}

.total-price{
  font-size: 1.5rem;
  font-weight: 500;
}

.payment{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  button{
    width: 8rem;
    height: 3rem;
    background-color:black;
    color:white;
    border:none;
    border-radius: 2px;
  }

  button:hover{
    cursor:pointer
  }

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    input{
      width: 8rem;
      height: 3rem
    }
  }
}

.list-move,
.list-leave-active {
  transition: all 1s ease;
}
.list-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translateX(-30vw);
}

.list-leave-active{
  position: absolute;
}
</style>