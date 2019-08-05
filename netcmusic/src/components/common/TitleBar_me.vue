<template>
    <div class="page-head">
        <span class="cloud"></span>
        <div class="meMusic">我的音乐</div>
        <xds-player></xds-player>
    </div>
</template>
<script>
import Player from './Player.vue';
export default {
    components: {
        'xds-player': Player
    }
}
</script>
<style scoped>
    .page-head {
        display: flex;
        position: fixed;
        z-index: 999;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        background-color: aliceblue;
        padding-right: 10px;
        height: 50px;
        font-size: 18px;
    }
    .cloud {
        width: 50px;
        height: 50px;
        background: url('../../assets/icon/normal_32px/cloud.png') center center no-repeat;
    }
    .meMusic {
        font-family: 'Courier New', Courier, monospace;
        font-size: 21px;
        font-weight: bold;
    }
</style>

