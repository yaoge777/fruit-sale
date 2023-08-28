<template>
  <div class="container">
    <div class="glass">
      <span>Welcome!</span>
      <span><input type="text" placeholder="randomly input username"> <input type="password" placeholder="randomly input password"></span>
      <span><button @click="handleClick">login</button></span>
    </div>
    <div class="bg">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';

const router = useRouter()

const handleClick = () => {
  sessionStorage.setItem('token', '1')
  router.push('/home')
}
</script>

<style lang="less" scoped>
.container{
  position: relative;
  background-image: url('../assets/bg.jpg');
  background-size: cover; /* Adjust the size of the background image */
  background-position: center center; /* Position the background image */
  background-repeat: no-repeat;
  display: grid;
  place-items: center;
  height: 100vh

}

@keyframes flt {
  0% {transform: translateY(0) translateX((-30px))}
  100% {transform: translateY(-30px) translateX(0);}
}
.bg{
  background-color:  transparent;
  width: 800px;
  height: 800px;
  position: relative;
  span:nth-child(1){
    width: 250px;
    height:250px;
    border-radius: 50%;
    background-color: rgb(180, 254, 202);
    position: absolute;
    left: 10px;
    top: 20px;
    animation: flt ease-in-out 3s infinite alternate
  }
  span:nth-child(2){
    width: 50px;
    height:50px;
    border-radius: 50%;
    background-color: rgb(0, 229, 255);
    position: absolute;
    right: 200px;
    top: 200px;
    animation: flt ease-in-out 4s infinite alternate-reverse

  }
  span:nth-child(3){
    width: 100px;
    height:100px;
    border-radius: 50%;
    background-color: rgb(252, 254, 180);
    position: absolute;
    right: 100px;
    bottom: 120px;
    animation: flt ease-in-out 2.5s .5s infinite alternate

  }
}

.glass:hover{
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgb(140, 163, 136), inset 0 0 5px #999;
}
.glass{
  border-radius: 20px;
  width: 400px;
  height: 500px;
  padding: 80px 50px;
  background-color: transparent;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(7px);
  box-shadow: inset 1px 1px 6px rgba(127, 255, 212, 0.3), 2px 2px 15px rgba(0,0,0,0.5);
  
  span:first-child{
    color: rgb(255, 255, 255);
    font-size: 50px;
    font-weight: bold;
  }
  span input{
    outline: none;
    border: none;
    border-bottom: 1px solid white;
    height: 55px;
    line-height: 40px;
    font-size: 15px;
    color: black;
    font-weight: bold;
    background-color:transparent;
    width: 100%;
    margin-bottom: 20px;
  }

  span button{
    border: none;
    border-radius: 20px;
    width: 150px;
    height: 50px;
    cursor: pointer;
    background-color: rgba(127, 255, 212, 0.1);
    box-shadow: 0 2px 10px rgb(84, 155, 111);
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    transition: all .5s ease-in-out;
  }

  span button:hover{
    border-radius: 0%;
    width: 200px
  }

}
</style>