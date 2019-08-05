<template>
    <div class="page-head">
        <span class="focus"></span>
        <xds-public></xds-public>
        <xds-player></xds-player>
    </div>
</template>
<script>
import Player from './Player.vue';
import XdsPublic from './xds_public.vue';
export default {
    components: {
        'xds-player': Player,
        'xds-public': XdsPublic
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
    .focus {
        width: 50px;
        height: 50px;
        background: url('../../assets/icon/normal_32px/focus.png') center center no-repeat;
    }
</style>

