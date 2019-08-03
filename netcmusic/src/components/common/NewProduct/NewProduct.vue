<template>
    <div class="NewProduct-app">
        <div class="TopHeader">
            <div>
            <span @click="song" data-id="disc"  plain>新碟</span> |
            <span @click="song" data-id="playlist" plain>新歌</span>
            </div>
            <song :MoreSong="RightSong"></song>
        </div>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="disc">
               <DiscPanel></DiscPanel>
            </mt-tab-container-item>
            <mt-tab-container-item id="playlist">
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
                active:"disc",
                RightSong:"更多新碟"
            }
        },
        // 定义事件函数
        methods:{
            song(e){
                 this.active=e.target.dataset.id;
                 
                if(this.active=="disc"){
                    this.RightSong="更多新碟"
                }else{
                    this.RightSong="新歌推荐"
                }
            }
        },
        // 注册
        components:{
            "song":Song,
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
    }
    
    .NewProduct-app{
        padding: 10px 20px;
    }
</style>
