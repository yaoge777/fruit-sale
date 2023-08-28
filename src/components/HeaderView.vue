<template>
  <div class="header">
    <div class="dropdown">
      <el-dropdown trigger="click" size="large">
          <span class="el-dropdown-link">
            language<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item >English</el-dropdown-item>
              <el-dropdown-item >Chinese</el-dropdown-item>
              <el-dropdown-item >Japanese</el-dropdown-item>
            </el-dropdown-menu>
          </template>
      </el-dropdown>
    </div>
    
    <div class="call">
      Call us on +852 1234 5678
    </div>

    <div class="info">
      <span>
        Free delivery on order over <span style="color:rgb(4, 249, 0); font-size: 1.7rem">$200</span>!
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang='less' scoped>
.header{
  display: flex;
  padding: 20px 30px;
  justify-content: flex-start;
  border-bottom: 0.1rem rgba(128, 128, 128, 0.288) solid;
  .info{
  width:60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
  color:rgb(86, 89, 91);
  span{
    background-color: rgb(186,195,78)
  }
  }

  .dropdown{
    color: gray;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    border-right:  0.1rem solid rgba(128, 128, 128, 0.391)
  }
  .call{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    color: gray;
    font-size: 1rem;
    font-weight: bold;
  }
}


</style>