import { defineStore } from 'pinia'
import {cartData} from '@/data/imgData'


export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      isShow:false,
      goods:[] as cartData[],
    }
  }
})