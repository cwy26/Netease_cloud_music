<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="发现">
          <titlebar-find></titlebar-find>  
        </mt-tab-container-item>
        <mt-tab-container-item id="视频">
          <titlebar-video></titlebar-video>  
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <titlebar-me></titlebar-me>  
        </mt-tab-container-item>
        <mt-tab-container-item id="云村">
          <titlebar-village></titlebar-village>  
        </mt-tab-container-item>
        <mt-tab-container-item id="账号">
          <titlebar-account></titlebar-account>  
        </mt-tab-container-item>
      </mt-tab-container>
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="发现" @click.native="changeState(0)">
          <tabbaricon
            :selectedImage="require('./../assets/icon/chosen_32px/wangyiyunyinlezizhi-copy.png') "
            :normalImage="require('./../assets/icon/normal_32px/wangyiyunyinlezizhi-copy.png')"
            :focused="currentIndex[0].isSelect"
          ></tabbaricon>发现
        </mt-tab-item>
        <mt-tab-item id="视频" @click.native="changeState(1)">
          <tabbaricon
            :selectedImage="require('./../assets/icon/chosen_32px/bofang.png') "
            :normalImage="require('./../assets/icon/normal_32px/bofang1.png')"
            :focused="currentIndex[1].isSelect"
          ></tabbaricon>视频
        </mt-tab-item>
        <mt-tab-item id="我的" @click.native="changeState(2)">
          <tabbaricon
            :selectedImage="require('./../assets/icon/chosen_32px/gedanshouluON.png') "
            :normalImage="require('./../assets/icon/normal_32px/gedanshouluON.png')"
            :focused="currentIndex[2].isSelect"
          ></tabbaricon>我的
        </mt-tab-item>
        <mt-tab-item id="云村" @click.native="changeState(3)">
          <tabbaricon
            :selectedImage="require('./../assets/icon/chosen_32px/pengyou.png') "
            :normalImage="require('./../assets/icon/normal_32px/pengyou.png')"
            :focused="currentIndex[3].isSelect"
          ></tabbaricon>云村
        </mt-tab-item>
        <mt-tab-item id="账号" @click.native="changeState(4)">
          <tabbaricon
            :selectedImage="require('./../assets/icon/chosen_32px/zhanghao.png') "
            :normalImage="require('./../assets/icon/normal_32px/zhanghao.png')"
            :focused="currentIndex[4].isSelect"
          ></tabbaricon>账号
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
import TabBarIcon from "../components/common/TabBarIcon.vue";
import TitleBarFind from "../components/common/TitleBar_find.vue";
import TitleBarVideo from "../components/common/TitleBar_video.vue";
import TitleBarMe from "../components/common/TitleBar_me.vue";
import TitleBarAccount from "../components/common/TitleBar_account.vue";
import TitleBarVillage from "../components/common/TitleBar_village.vue";
export default {
  data() {
    return {
      active: "发现",
      currentIndex: [
        { isSelect: true },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false }
      ]
    };
  },
  methods: {
    changeState(n) {
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for (var i of this.currentIndex) {
        i.isSelect = false;
      }
      this.currentIndex[n].isSelect = true;
    }
  },
  components: {
    tabbaricon: TabBarIcon,
    'titlebar-find': TitleBarFind,
    'titlebar-video': TitleBarVideo,
    'titlebar-me': TitleBarMe,
    'titlebar-village': TitleBarVillage,
    'titlebar-account': TitleBarAccount
  }
};
</script>
<style scoped>
/*最外层父元素index.vue*/
.page-tabbar {
  overflow: hidden; /*溢出隐藏*/
}
.page-wrap {
  width: 100%;
  height: 736px;
  background-color: var(--red); /* #d33a33 */
  overflow: auto; /*溢出显示轮动条*/
  box-sizing: border-box;
  padding-bottom: 60px;
}
/*修改 tabbar 默认文字颜色*/
.mint-tabbar > .mint-tab-item {
  color: #999999;
}
/*修改默认tab选中文字样式*/
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
  color: var(--red);
}
</style>
