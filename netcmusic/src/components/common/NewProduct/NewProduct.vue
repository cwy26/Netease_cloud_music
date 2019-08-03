<template>
    <div>
        <div class="TopHeader">
            <div>
            <mt-button @click="song" data-id="disc">新碟</mt-button>
            <mt-button @click="song" data-id="playlist">新歌</mt-button>
            </div>
            <song :MoreSong="RightSong"></song>
        </div>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="disc">
                新碟
            </mt-tab-container-item>
            <mt-tab-container-item id="playlist">
                新歌
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
// 引入子组件
import song from "./song"
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
                // this.active= e.target.dataset.id;
                // if(this.active="disc"){
                //     RightSong:"更多新碟"
                // }else{
                //     RightSong:"新歌推荐"
                // }
            }
        },
        // 注册
        components:{
            "song":song
        }
    }
</script>
<style scoped>
    .TopHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
