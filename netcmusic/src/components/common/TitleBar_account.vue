<template>
    <div class="page-head">
        <span class="scan"></span>
        <xds-player></xds-player>
    </div>
</template>
<script>
import Player from './Player.vue';
export default {
    components: {
        'xds-player': Player,
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
    .scan {
        width: 50px;
        height: 50px;
        background: url('../../assets/icon/normal_32px/scan.png') center center no-repeat;
    }
</style>

