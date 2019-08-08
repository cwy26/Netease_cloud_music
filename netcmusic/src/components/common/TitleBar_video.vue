<template>
  <div>
    <div class="page-head" v-if="isShowNormal">
      <span class="picture"></span>
      <xds-search placeholder="心如止水 最近很火哦" class="searchVideo"></xds-search>
      <xds-player></xds-player>
    </div>
    <div class="page-head" v-else>
      <xds-search placeholder="心如止水 最近很火哦"></xds-search>
      <span @click="cancelSearch">取消</span>
      <span class="singerIcon"></span>
    </div>
  </div>
</template>
<script>
import Player from "./Player.vue";
import Search from "./Search.vue";
export default {
  data() {
    return {
      isShowNormal: true
    };
  },
  mounted(e) {
    var searchFind = document.getElementsByClassName("searchVideo")[0];
    document.addEventListener("click", e => {
      if (searchFind.contains(e.target)) {
        this.isShowNormal = false;
      }
    });
  },
  methods: {
    cancelSearch() {
      this.isShowNormal = true;
    }
  },
  components: {
    "xds-player": Player,
    "xds-search": Search
  }
};
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
.picture {
  width: 50px;
  height: 50px;
  background: url("../../assets/icon/normal_32px/video1.png") center center
    no-repeat;
}
.singerIcon {
  width: 50px;
  height: 50px;
  background: url("../../assets/icon/normal_32px/singer.png") center center
    no-repeat;
}
</style>

