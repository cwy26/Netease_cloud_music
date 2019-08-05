<template>
  <div class="publicArea">
      <div data-id="public" :class="public_act" @click="togglePT">广场</div>
      <div data-id="trends" :class="trends_act" @click="togglePT">动态</div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            active: "广场",
            public_act: {public_active:true},
            trends_act: {trends_active:false}
        }
    },
    methods: {
        togglePT(e) {
            if(e.target.dataset.id == "public") {
                this.public_act = {public_active:true};
                this.trends_act= {trends_active:false}
            } else if(e.target.dataset.id == "trends") {
                this.public_act = {public_active:false};
                this.trends_act= {trends_active:true}
            }
        }
    }
};
</script>

<style scoped>
.publicArea {
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--red);
  width: 120px;
  height: 30px;
  border-radius: 150px;
}
.publicArea div {
    font-size: 18px;
     line-height: 30px;
     width: 60px;
     text-align: center;
}
.public_active, .trends_active {
  background-color: var(--red);
  color: #fff;
  width: 60px;
  margin-top: -1px;
  border-radius: 150px;
  text-align: center;
  font-size: 18px;
  line-height: 30px;
}
</style>
