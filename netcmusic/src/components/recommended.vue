<template>
<!-- 这是你杰明爸爸的组件，你们这些渣渣，尤其是张兰同学 -->
<!-- 标题 -->
    <div class="recommended-app">
        <div class="recommended-title">
            <h4>推荐歌曲</h4>
            <span>歌曲广场</span>
        </div>
        <div class="recommended-content">
            <div class="item">
                <span>△563万</span>
                <img src='../../public/chudon.jpg' alt="图像已损坏">
                <h6>那些触动人心的女生名谣</h6>
            </div>
            <div class="item">
                <Amount></Amount>
                <img src='../../public/laoge.jpg' alt="图像已损坏">
                <h6>老歌越听越经典，旧人越看越无情</h6>
            </div>
            <div class="item">
                <Amount></Amount>
                <img src='../../public/dianyin.jpg' alt="图像已损坏">
                <h6>[东方电音动] 璇跳律，参透神经</h6>
            </div>
            <div class="item">
                <span>△563万</span>
                <img src='../../public/ruanmeizi.jpg' alt="图像已损坏">
                <h6>软妹子 萝莉 暖音 软耳朵</h6>
            </div>
            <div class="item">
                <Amount></Amount>
                <img src='../../public/baidadj.jpg' alt="图像已损坏">
                <h6>[全球百大DJ] 2018百大DJ精选作品</h6>
            </div>
            <div class="item">
                <Amount></Amount>
                <img src='../../public/qiubai.jpg' alt="图像已损坏">
                <h6>[燃系ACG],吾驰骋于沙场，未曾经历一败</h6>
            </div>
        </div>
        
    </div>
</template>
<script>
// 引入消息
import Amount  from "./Amount";
    export default {
        data(){
            return {

            }
        },
        // <!-- 2注册 -->
         components:{
             "Amount":Amount
         }
    }
</script>
<style>
    .recommended-app{
        padding: 10px 20px;
    }
    .recommended-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .recommended-title>h4{
        font-weight: bold;
    }
    .recommended-title>span{
        background: #fff;
        border:1px solid #eee;
        border-radius:15px;
        padding: 5px  10px;
    }
    .recommended-content{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
    }
    .recommended-content>.item{
        width:30%;
        border-radius: 5px;
        margin:2px 0;
        padding:2px; 
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: relative;
         min-height: 130px;
    }
    .item>img{
        width: 100%;
        border-radius: 5px;
    }
    .item>h6{
        margin: 5px 0;
        color: #000;
    }
    
</style>
