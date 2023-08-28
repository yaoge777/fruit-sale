<template>
  <div class="foot-container">
    <div class="address">
      <h1>Fruit <span>sale</span></h1>
      <p>
        If you have any question, 
        feel free to reach us at
      </p>
      <div style="display:flex; justify-content: center; align-items: center;">
        <Location class="icon" />
        <p>
          123room, 123street, HK
        </p> 
      </div>

      <div style="display:flex; justify-content: center; align-items: center;">
        <Message class="icon"/>
        <p>
          info@example.com
        </p>
      </div>
        
    </div>

    <div class="faq">
      <h2> <span>INFO</span>RMATION</h2>
      <p>FAQ</p>
      <p>SHIPPING</p>
      <p>RETURNS</p>
      <p>GIFT CARDS</p>
    </div>

    <div class="account">
      <h2> <span>MY A</span>CCOUNT</h2>
      <p>MY ACCOUNT</p>
      <p>CHECKOUT</p>
      <p>VALIDATION</p>
      <p>TERM OF USE</p>
      <p>FAQ</p>
    </div>

    <div class="news">
      <h2> <span>NEWS</span>LETTER</h2>
      <p>subscribe us and do not miss the lates discount!</p>
      <input type="text" placeholder="Your Email">
      <button>SEND MAIL</button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.foot-container{
  margin-top: 10rem;
  padding: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  color: rgb(73, 73, 73);
  background-color: antiquewhite;
  span{
    border-bottom: 2px solid cadetblue;
  }
  p{
    font-size: 0.9rem;
    font-weight: 400;
  }
  .address, .faq, .account, .news {
    gap: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

  }
  .news{
    width: 13rem;
    p{
      line-height: 1.5rem;
    }
  }
  .address{
    width: 13rem;
    h1{
      background: linear-gradient(to bottom,  rgb(98, 255, 0) 0%, rgb(98, 255, 0) 50%, rgb(60, 92, 52) 51%, rgb(60, 92, 52)  100%);
      color: transparent; 
      -webkit-background-clip: text; 
      background-clip: text;
      text-decoration:none;
      font-style: italic;
      font-size: 4rem;
      font-weight: bold;
    }
    span{
      background: linear-gradient(to bottom,  rgb(98, 255, 0) 0%, rgb(98, 255, 0) 50%, rgb(60, 92, 52) 51%, rgb(60, 92, 52)  100%);
      font-size: 2rem;
      border:none;
      font-style: none;
      color: transparent; 
      -webkit-background-clip: text; 
      background-clip: text;
    };
    
    p{
      line-height: 1.5rem;
    }
  }

  .icon{
    width: 2rem;
  }

 

  p:hover{
    color:green;
    cursor:pointer
  }

  input{
    width: 15rem;
    height: 3rem;
    padding: 1rem;
    border: none
  }

  button{
    color:aliceblue;
    background-color: rgb(162, 186, 56);
    font-size: 1rem;
    padding: 0.5rem;
    border:none
  }
}
</style>