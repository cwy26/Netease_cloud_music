// 首页导航
<template>
  <div class="nav">
    <ul class="ul-nav">
      <li v-for="(navlist,i) of navList" :key="i">
        <img :src="navlist.img" alt="">
        <div>{{navlist.title}}</div>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props:{
    navList:{defalut:[]},
  }
};
</script>
<style>
/* 导航栏父元素 */
.nav {
  position: relative;
}
.nav .ul-nav {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 10px 0px;
  padding: 0px;
}
.nav .ul-nav li>img{
  padding-bottom:5px;
}
</style>


