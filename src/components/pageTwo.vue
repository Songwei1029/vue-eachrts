<template>
  <section :style="{transform:'scaleY('+scale+')'}" class="new-content flex-content" @click="topClickFn()" element-loading-text="加载中..." element-loading-background="rgba(0, 0, 0, 0.5)">
     <Lines/>
    <Titles titleName="pageOne" />
    <section class="count-content">
      <!-- map -->
      <section class="count-content-map">
        <div id="provinceDistribute">
        </div>
      </section>
    </section>
  </section>
</template>

<script>
require("echarts/map/js/china");
import Lines from "./common/lines";
import Titles from "./common/titles";
import echarts from "echarts";
import $ from 'jquery'

require("echarts-wordcloud");

var baseUrl = "/static/guangdong.json";
// import hebei from './common/hebei.js';
 
 const hebei = '/static/hebei.json'
// import "../../node_modules/echarts/map/js/china.js"; // 引入中国地图数据

import { Map_options } from "./options/Map";

export default {
  name: "pageTwo",
  data() {
    return {
      scale: 1,
      data: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
      show: true,
      test1: 1,
    };
  },
  components: {
    Lines,
    Titles
  },
  methods: {
    topClickFn: () => {
      // alert("topClickFn");
    },
  
    loadData: async function() {
      console.log("loaddata");
      await this.getCityByProviceId();
    },
    getCityByProviceId: async function() {
      let opt = Object.assign({}, Map_options);
      let _that = this;  
      await $.get(baseUrl, function(geoJson){    
        console.log(geoJson);
        echarts.registerMap('maps', geoJson);
      });
      try {
        _that.provinceDistribute.setOption(opt);
      } catch (e) {
        this.$message.error(e);
      }
      // _that.provinceDistribute.setOption(opt);
    },
    resizeHandle: function() {
      try {
        // console.log("resizeHandle");
        this.getCityByProviceId.resize();
      } catch (e) {}
    },
    
  },
  created() {
    this.scale = this.$route.query.scale || 1;
  },
  mounted() {
  
    this.provinceDistribute = echarts.init(
      document.getElementById("provinceDistribute")
    );
    echarts.connect([this.provinceDistribute]);
    this.autoGetdata = setInterval(this.loadData, 60 * 1000 * 10); //10分钟刷新
    
    this.getCityByProviceId();
    window.addEventListener("resize", this.resizeHandle, false);
    
  },
  beforeDestroy() {
    clearInterval(this.autoGetdata);
    window.removeEventListener("resize", this.resizeChartFn, false);
  }
};
</script>

<style type="text/css" lang="less" >


.left {
  float: left;
}

.flex-content {
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  transform-origin: 0 0;
}
.new-content {
  /*min-width: 1500px;*/
 transform-origin: 0 0;
  position: relative;
  /* padding: 20px 0; */
  box-sizing: border-box;
  width: 100%;
  font-size: 20px;
  height: 800px;
  background: url("../assets/content_background.jpg") top center #041438;

  .content {
    padding: 0 40px;
  }
  .count-block {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 20px;
    margin: 40px 55px;
    .count-item {
      height: 120px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .count-title {
        font-size: 22px;
        padding: 10px 20px;
        // line-height: 4;
        margin-left: 30px;
        font-weight: 900;
      }
      .count-num {
        padding: 0 10px;
        font-size: 45px;
        // line-height: 2.2;
        margin-right: 20px;
        text-align: right;
        span {
          display: inline-block;
          width: 45px;
          text-align: center;
          // border: 1px solid white;
        }
        &:nth-child(1) {
          background: red;
        }
      }
      &:nth-child(1) {
        background: linear-gradient(
          rgba(44, 117, 243, 0.5),
          rgba(43, 116, 233, 0.5),
          rgba(44, 117, 235, 0.5)
        );
        span {
          background: linear-gradient(
            rgba(37, 102, 214, 0.5),
            rgba(52, 129, 255, 0.5),
            rgba(49, 127, 255, 0.5)
          );
        }
      }
      &:nth-child(2) {
        background: linear-gradient(
          rgba(31, 294, 219, 0.5),
          rgba(0, 222, 255, 0.5),
          rgba(0, 222, 255, 0.5)
        );
        span {
          background: linear-gradient(
            rgba(31, 294, 219, 0.5),
            rgba(2, 187, 216, 0.5),
            rgba(0, 222, 255, 0.5)
          );
        }
      }
      &:nth-child(3) {
        background: linear-gradient(
          rgba(30, 113, 239, 0.5),
          rgba(18, 95, 223, 0.5),
          rgba(18, 95, 223, 0.5)
        );
        span {
          background: linear-gradient(
            rgba(37, 102, 214, 0.5),
            rgba(52, 129, 255, 0.5),
            rgba(49, 127, 255, 0.5)
          );
        }
      }
      &:nth-child(4) {
        background: rgba(245, 114, 70, 0.5);
        span {
          background: rgba(221, 89, 46, 0.5);
        }
      }
    }
    .test{
      position:relative;
      animation:test 1s;
      -webkit-animation:test 1s; /* Safari and Chrome */
    }
    @keyframes test
    {
    0% {left:0px; top:0px;opacity: 1;}
    25% { left:0px; top:-40px;opacity: 0.6;}
    50% {left:0px; top:-60px;opacity: 0;}
    75% { left:0px; top:-40px;opacity: 0;}
    100% {left:0px; top:0px;opacity: 0;}
    }
  }
  .count-content {
    height: 700px;
    .count-count-tree {
      height: 700px;
      padding: 20px 10px 0 0;
      // background: url("@{baseImgURL}/441x667_background.png") no-repeat;
      .count-content-title {
        font-size: 24px;
        text-align: center;
      }
      .count-content-title {
        background: radial-gradient(rgba(12, 94, 237, 0.7), rgba(7, 8, 9, 0.1));
        height: 50px;
        line-height: 50px;
      }
      
    }
    .el-tree {
      color: white;
      background: none;
      width: 100%;
      height: 80%;
      overflow-y:scroll;
      padding: 20px 0 0 40px;
    }
   
    #provinceDistribute {
      // height: calc(100% - 28px);  
      height: 700px;
      width: 1000px;
    }
    .count-content-map{
      height: 710px;
      width: 1100px;
      margin: 30px auto;
      display: grid;
      grid-template-columns: 1fr 5fr;
      grid-column-gap: 0px;
      .trafficSeniority{
        padding: 20px 0 20px 30px;
        border: 1px solid #6e6ee5;
        font-size: 20px;
        height: 240px;
        p{
          color: #00AAFD;
        }
        li{
          font-size: 18px;
        }
      }
    }
  }
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-1500px);
}
.list-enter-active,
.list-leave-active {
  transition: all 2s ease;
}
</style>

