<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-07-09 10:55:28
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2021-07-20 10:25:36
-->
<template>
  <div id="app">
    <!-- <van-popup v-model="show" position="top" :style="{ height: '30%' }">内容</van-popup>
    <van-cell title="单元格" value="内容"  label="描述信息" /> -->
    <div id="nav">
      <van-button type="default">默认按钮</van-button>
     <van-button type="primary">主要按钮</van-button>
     
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show:true
    }
  },
  created(){
    // this.$setNodeSize("",10,15)
    console.log(document.body.offsetWidth)
    console.log(document.documentElement.style.fontSize)
  }
}
</script>
<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
