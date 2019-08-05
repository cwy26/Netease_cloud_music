<template>
    <div class="NewProduct-app">
        <div class="TopHeader">
            <!-- 添加自定义属性和点击事件 -->
            <div>
                <span @click="song" data-id="disc"  :class="discClass">新碟</span>
                <span>|</span>
                <span @click="song" data-id="playlist" :class="playlistClass" >新歌</span>
            </div>
            <!-- 应用子组件Song -->
            <Song :MoreSong="RightSong"></Song>
        </div>
        <!-- 父元素 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="disc">
                <!-- 应用子组件DiscPanel -->
               <DiscPanel></DiscPanel>
            </mt-tab-container-item>
            <mt-tab-container-item id="playlist">
                <!-- 应用子组件NewSongPanel -->
                <NewSongPanel></NewSongPanel>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
// 引入子组件
import Song from "./Song"
import DiscPanel from "./DiscPanel"
import NewSongPanel from "./NewSongPanel"
    export default {
        data(){
            return{
                active:"disc",//保存显示字面版的id
                RightSong:"更多新碟",//默认显示的子组件内容
                // 左边两个点击对象默认样式为false,不执行
                discClass:{vali_success:false},
                playlistClass:{vali_success:false}
            }
        },
        // 定义事件函数
        methods:{
            song(e){
                // 把点击对象自定义的属性值，赋值给active
                 this.active=e.target.dataset.id;
                // 当点击的对象的自定义属性值为disc，对应的点击对象样式生效，右边子组件的内容也同时更改
                if(this.active=="disc"){
                    this.RightSong="更多新碟";
                    this.discClass={vali_success:true},
                    this.playlistClass={vali_success:false}
                }else{
                    this.RightSong="新歌推荐";
                     this.discClass={vali_success:false},
                    this.playlistClass={vali_success:true}
                }
            }
        },
        // 注册
        components:{
            "Song":Song,
            "DiscPanel":DiscPanel,
            "NewSongPanel":NewSongPanel
        }
    }
</script>
<style scoped>
    .TopHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }
    
    .NewProduct-app{
        padding: 10px 20px;
    }
    span{
        font-size:15px ;
        color:#666666;
        margin: 0 2px;   
    }
    span:nth-child(2){
        color:#eee;
    }
    .vali_success{
        font-size: 20px;
        font-weight:bold;
        color:#000;
     }
</style>
