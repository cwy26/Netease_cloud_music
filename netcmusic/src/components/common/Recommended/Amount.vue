<template>
    <div class="amount-app">
        <img src="../../../assets/icon/normal_16px/bofang.png" alt="图片已损坏">
        <span>{{item}}</span>
    </div>
</template>
<script>
    export default {
       props:{
           item:{default:""}
       }
    }
</script>
<style scoped>
    .amount-app{
        display:flex;
        align-items: center;
        position: absolute;
        top:6px;
        left:45px;
    }
    .amount-app>span{
        font-size: 10px;
        color: #fff;
    }
</style>
