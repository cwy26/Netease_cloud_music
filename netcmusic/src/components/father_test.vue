<template>
  <div>
    <Nav :navList="navList"></Nav>
  </div>
</template>
<script>
  // 导入子组件
  import Nav from "./common/nav.vue"
export default {
  data(){
    return{
      navList:[
        {img:require('./../assets/imgs/meirituijian.png'),title:"每日推荐"},
        {img:require('./../assets/imgs/gedanshouluOFF.png'),title:"歌单"},
        {img:require('./../assets/imgs/paihangbang.png'),title:"排行榜"},
        {img:require('./../assets/imgs/diantai.png'),title:"电台"},
        {img:require('./../assets/imgs/zhibo.png'),title:"直播"},
      ]
    }

  },
  components:{
    "Nav":Nav,
    }
}
</script>
<style>

</style>
