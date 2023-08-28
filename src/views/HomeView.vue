<template>
  <div class="home">
    <teleport to='body'><CartSider v-if="cartStore.isShow"></CartSider> </teleport>
    
    <div class="banner" @mousemove="handleMouseMove1($event)">
      <div class="banner-slogan">
        <span>
          Natural & Organic
        </span>

        <h1>Up to 40% Discount</h1>

        <h2>Enjoy It and Shop Now!</h2>
      </div>
      <img src="imgs/banner1.jpg">
    </div>

    <div class="gap1">
      <div class="gap1item">
        <div class="shipping-img">
          <img src="imgs/plane.png">
        </div>
        <div class="shipping-content">
          <h5>Free Shipping</h5>
          <p>Free Home Delivery Offer</p>
        </div>
      </div>
      <div class="gap1item">
        <div class="shipping-img">
          <img src="imgs/earphones.png">
        </div>
        <div class="shipping-content">
          <h5>Online Support</h5>
          <p>24/7 Online Support Provide</p>
        </div>
      </div>
      <div class="gap1item">
        <div class="shipping-img">
          <img src="imgs/shield.png">
        </div>
        <div class="shipping-content">
          <h5>Secure Payment</h5>
          <p>Fully Secure Payment System</p>
        </div>
      </div>
    </div>

    <div class="gap2">
      <div class="gap2item active" id="gap2item1" @click="changeShow('gap2item1',0)">
        <img src="imgs/1.png">
        <p>All items</p>
      </div>
      <div class="gap2item" id="gap2item2" @click="changeShow('gap2item2',1)">
        <img src="imgs/2.png">
        <p>Fresh Fruits</p>
      </div>
      <div class="gap2item" id="gap2item3" @click="changeShow('gap2item3',2)">
        <img src="imgs/3.png">
        <p>Vegatable</p>
      </div>
      <div class="gap2item" id="gap2item4" @click="changeShow('gap2item4',3)">
        <img src="imgs/4.png">
        <p>Fish & Meat</p>
      </div>
      <div class="gap2item" id="gap2item5"  @click="changeShow('gap2item5',4)">
        <img src="imgs/5.png">
        <p>Wheat</p>
      </div>
    </div>

    <DisplayA  :cat="cat"></DisplayA>

    <div class="gap3">
      <div class="gap3item">
        <img src="imgs/1-1bg.jpg">
        <div class="content">
          <h3>-20% off</h3>
          <p>Bell Pepper Orange</p>
          <button>Shop now</button>
        </div>
      </div>
      <div class="gap3item">
        <img src="imgs/1-2bg.jpg">
        <div class="content">
          <h3>-20% off</h3>
          <p>Fruit Juice Package</p>
          <button>Shop now</button>
        </div>
      </div>
      <div class="gap3item">
        <img src="imgs/1-3bg.jpg">
        <div class="content">
          <h3>-30% off</h3>
          <p>Full Fresh Vegetable</p>
          <button>Shop now</button>
        </div>
      </div>
    </div>

    <div class="gap4">
      <div class="titles">
        <p>SEE OUR LATEST</p>
        <h1>ARRIVAL PRODUCTS</h1>
      </div>

      <div class="flash">
        <div class="left"  @click="moveFlash(false)"> &lt; </div>
        <div class="right" @click="moveFlash(true)"> > </div>
        <div class="exhibit2">
          <div v-for="i in imgs" :key="i.path"  class="cards2">
            <div class="img-frame">
              <img :src= "i.path">

              <div class="icon">

                <ShoppingCart class="cart" @click="addToCart(i)"/>
              </div>
            </div>
            <p class="title">{{i.name}}</p>
            <p>${{i.price}}</p>
            <el-rate v-model="rate" />
          </div>
        </div>
      </div>
    </div>

    <div class="gap5" @mousemove="handleMouseMove($event)">
      <img src="imgs/sale-bg.jpeg" class="bg">
      <img src="imgs/sale-fruit.png" class="fruit">
      <div class="gap5item">
        <h1>SAVE 20% OFF</h1>
        <h2>{{ countDown }}</h2>
        <div class="count">
          <div>
            <p>{{ clock.hour }}</p>
            <hr>
            <p>Hr</p>
          </div>
          <div>
            <p>{{ clock.min }}</p>
            <hr>
            <p>Mins</p>
          </div><div>
            <p>{{ clock.second }}</p>
            <hr>
            <p>Secs</p>
          </div>
        </div>
        <button>SHOP NOW</button>
      </div>
    </div>

    <FooterView></FooterView>

  </div>
</template>

<script setup lang="ts">
/* eslint-disable */
import {getFruitCards} from '@/api/index'
import DisplayA from '@/components/DisplayA.vue';
import FooterView from '@/components/FooterView.vue';
import { onMounted, reactive, ref } from 'vue';
import {imgData} from '@/data/imgData'
import {useCartStore} from '@/state/index'
import CartSider from '@/components/CartSider.vue';
const cat = ref(0)
const imgs = ref<imgData[]>([{id:'1',path:'imgs/1-1.jpg',name:'papaya',price:'10'}])
const countDown = ref('Time Before Next Sale Starts')
const rate = ref(0)
const cartStore = useCartStore()
var gp = 0
const clock = reactive({
  hour:0,
  min:0,
  second:0
})



const addToCart = (good:imgData) => {

  for(let i=0; i < cartStore.goods.length; i++){
    if(cartStore.goods[i].id == good.id){
      cartStore.goods[i].quantity += 1
      return
    }
  }
  cartStore.goods.push({...good, quantity:1, isChecked:true})
}

const handleMouseMove1 = (ev:MouseEvent) => {
  const t = document.querySelector('.banner img') as HTMLElement
  t.style.transform = `translateX(-${ev.clientX/1000}rem) translateY(-${ev.clientY/1000}rem)`

}
const changeShow = (id:string,v:number,) => {
  cat.value=v
  const t = document.querySelector('.active')
  t?.classList.remove('active')
  const a = document.querySelector(`#${id}`)
  a?.classList.add('active')

}

const moveFlash = (plus:boolean) => {
  if(plus){
    var long = (gp+1)*3
    if(long >= imgs.value.length) {
      return
    }
    else{
      gp += 1
    }
  } else{
    if (gp == 0){
      return
    }
    else{
      gp -=1
    }
  }

  var shift = -57*gp
  
  const t = document.querySelector('.exhibit2') as HTMLElement;
  t.style.transform = `translateX(${shift}rem)`

};

const setClock = () => {
  const nowT = new Date()
  const nowH = nowT.getHours()
  const setT = new Date()
  if(nowH < 19){
    setT.setHours(19,0,0,0)
    countDown.value = 'Time Before Next Sale Starts'
    
    
  } else if (19 <= nowH && nowH< 22){
    setT.setHours(22,0,0,0)
    countDown.value = 'Time Before This Sale Ends'
    
  } else {
    setT.setDate(setT.getDate()+1)
    setT.setHours(19,0,0,0)
    countDown.value = 'Time Before Next Sale Starts'
  }

    const diff = setT.getTime() - nowT.getTime()
    clock.hour = Math.floor(diff / (1000 * 60 * 60));
    clock.min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    clock.second = Math.floor((diff % (1000 * 60)) / 1000);
}

const handleMouseMove = (event:MouseEvent) => {


  const t = document.querySelector('.fruit') as HTMLElement

  t.style.left = String(2-event.clientX/1000)+'rem'
  t.style.top = String(7-event.clientY/1000)+'rem'
}

onMounted(() => {
  getFruitCards().then(res => {
    imgs.value = res.data.data
  })

  setInterval(() => setClock(), 1000)

})

</script>

<style lang="less" scoped>


CartSider{
  position:absolute;
}
.banner{
  width: 100%;
  height: 70vh;
  overflow: hidden;
  position: relative;
  img{
    width:110%;
    transition: all 0.1s;
  }

  .banner-slogan{
    span{
      color:#52b349;
      font-size: 3rem;
      transform: translateY(1000%);
      animation: transY 1s;
      @keyframes transY {
        100%{
          transform: translateY(0)
      };
      }
      animation-delay: 0.5s;
      animation-fill-mode:forwards;

    }

    h1{
      font-size: 4rem;
    }

    h1, h2{
      transform: translateY(1000%);
      animation: transY 1s;
      color:white;
      @keyframes transY {
        100%{
          transform: translateY(0)
      };
      }
      animation-delay: 1s;
      animation-fill-mode:forwards;

    }
    
    display: grid;
    grid-gap: 2rem;
    z-index:10;
    top: 20%;
    position:absolute;
    width: 100%;
    text-align: center;
   
  }
  
}

.gap1{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  padding: 6rem 5rem;

  .gap1item{
    display: flex;
    justify-content: center;
    align-items: center;
    border:2px solid #bac34e;
    padding: 2rem 2rem;
    gap: 1rem;
    position: relative;
    .shipping-img::before{
      background-color: #fff;
      width: 10px;
      height: 70px;
      content: "";
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      left: -5px;
    }
    .shipping-content{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
      h5{
        font-size: 1.3rem;
      }

      p{
        font-size:0.9rem
      }
    }

  }
}


.gap2{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 4rem;

  .gap2item{
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    font-size: 1rem;
  }

  .gap2item:hover{
    cursor: pointer
  }

  .active{
    color:#bac34e
  }
}

.gap3{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 4rem;
  
  .gap3item{
    position:relative;
    width: 18rem;
    overflow: hidden;
    img{
      width: 100%;
      transition: all 0.5s ease-in-out;

    }
    .content{
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.1rem;
      width: 6rem;
      position: absolute;
      left: 1.7rem;
      top: 1.4rem;
      h3{
        color: red
      }

      p{
        font-weight: 600;
        color:rgb(91, 91, 91)
      }

      button{
        background-color: rgb(122, 180, 56);
        font-size: 1rem;
        color:white;
        padding: 0.7rem;
        border:none;        
      }

      button:hover{
        background-color: aliceblue;
        color: gray;
        cursor:pointer
      }


    }
  }

  .gap3item:hover{
  img{
    transform: rotate(2deg) scale(1.1);
  }
}
}

.gap4{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 4rem;

  .titles{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    p{
      font-weight: 600;
      font-size: 1rem;
      color:#bac34e
    }
  }
}

.flash{
  overflow: hidden;
  width: 57rem;
  position: relative;
}
.exhibit2{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 600%;
  transition: all 2s;
  
  
  .img-frame{
    width: 100%;
    overflow: hidden;
    position: relative;
   
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
  

  .cards2{
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

.left, .right{
  color:#bac34e;
  font-size: 2rem;
  font-weight: 400;
  width: 3rem;
  height: 3rem;
  border: 1px solid #bac34e;
  border-radius: 50%;
  background-color: aliceblue;
  display:flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 12rem;
  z-index: 1000;
  background:transparent;
  transition: all 0.5s ease-in-out
}

.left:hover, .right:hover{
  cursor:pointer;
  background-color: #bac34e;
  color: white;
}
.left{
  left: 1rem;
}
.right{
  right:1rem
}

.gap5{
  position: relative;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  
  .bg{
    width: 190%;
  }
  .fruit{
    position:absolute;
    height: 60%;
    left: 2rem;
    top: 7rem;
    z-index: 100;
    transition: all 0.2s

  }
  .gap5item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    right: 7rem;
    top:10%;
    gap: 3rem;
    color:white;
    h1{
      font-size: 4rem;
    }
    .count{
      display:flex;
      justify-content: flex-start;
      align-items: center;
      gap: 3rem;

      div{
        display: flex;
        flex-direction: column;
        padding:10px 10px;
        justify-content: space-between;
        align-items: center;
        border: 2px solid white;
        width: 6rem;
        height: 8rem;
        hr{
          height: 1px;
          color:#fff;
          width: 100%
        }
        p{
          font-size: 2rem;
        }
      }
    }

    button{
      color:#bac34e;
      background-color: white;
      font-size: 2rem;
      padding: 1rem 0.4rem;
      border:none;
      transition: all 0.5s ease-in-out;
    }

    button:hover{
      color:white;
      background-color: #bac34e;
      cursor:pointer
    }
  }
}

</style>
