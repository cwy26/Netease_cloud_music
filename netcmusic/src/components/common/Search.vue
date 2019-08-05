<template>
  <div class="searchArea">
    <div class="searchIB">
      <span class="searchIcon"></span>
      <input type="text" :placeholder="placeholder" class="searchBg">
    </div>
  </div>
</template>
<script>
export default {
    props: {
        placeholder: {}
    }
};
</script>
<style scoped>
.searchArea {
  width: 314px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchIB {
  width: 294px;
  height: 35px;
  background-color: rgba(235,235,235,0.4);
  border-radius: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.searchIcon {
  width: 50px;
  height: 50px;
  margin-left: 15px;
  background: url("../../assets/icon/normal_32px/fangdajing24.png") center center
    no-repeat;
}
.searchBg {
    border: 0;
    outline: 0;
    background-color: rgba(235,235,235,0.4);
}
input::-webkit-input-placeholder {
    color: #aaa;
}
</style>
