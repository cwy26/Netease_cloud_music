<template>
    <div class="page-head">
        <span class="find-listen"></span>
        <xds-search placeholder="心如止水 最近很火哦"></xds-search>
        <xds-player></xds-player>
    </div>
</template>
<script>
import Player from './Player.vue';
import Search from './Search.vue';
export default {
    components: {
        'xds-player': Player,
        'xds-search': Search
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
        color: #666;
        font-size: 18px;
    }
    .find-listen {
        width: 50px;
        height: 50px;
        background: url('../../assets/icon/normal_32px/listen.png') center center no-repeat;
    }
</style>

