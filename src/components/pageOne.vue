<template>
  <section :style="{transform:'scaleY('+scale+')'}" class="new-content flex-content" @click="topClickFn()" element-loading-text="加载中..." element-loading-background="rgba(0, 0, 0, 0.5)">
    <Lines/>
    <Titles titleName="pageOne" />
    <section class="all-region-content">
      <div class="top flex">
        <div class="top_line">
          <div id="echarts_line" style="height: 100%; width:100%; font-size: '20px'"></div>
        </div>
        <div class="top_bar">
          <div id="echarts_bar" style="height: 100%; width:100%; font-size: '20px'"></div>
        </div>

      </div>
      <div class="bottom flex">
        <div class="bottom_bar">
          <div id="echarts_bar_two" style="height: 100%; width:100%; font-size: '20px'"></div>
        </div>
        <div class="bottom_pie">
          <div id="echarts_pie" style="height: 100%; width:100%; font-size: '20px'"></div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Lines from "./common/lines";
import Titles from "./common/titles";
import echarts from "echarts";
import { LineOptions } from "./options/Line";
import { BarOptions } from "./options/Bar";
import { Bar_two_options } from "./options/Bar_two";
import { PieOptions } from "./options/Pie";

export default {
  name: "pageOne",
  components: {
    Lines,
    Titles
  },
  data() {
    return {
      scale: 1
    };
  },
  methods: {
    topClickFn(){
      // alert("topClickFn");
    },
    getOpts() {
      let lineOptions = Object.assign({}, LineOptions);
      let barOptions = Object.assign({}, BarOptions);
      let bar_two_options = Object.assign({}, Bar_two_options);
      try {
          this.chart_line.clear();
          this.chart_line.setOption(lineOptions);
          this.chart_bar.clear();
          this.chart_bar.setOption(barOptions);
           this.chart_bar_two.clear();
          this.chart_bar_two.setOption(bar_two_options);
           this.chart_pie.clear();
          this.chart_pie.setOption(PieOptions);
        } catch (e) {
          this.chart_line.clear();
          this.chart_bar.clear();
          this.chart_bar_two.clear();
          this.chart_pie.clear();
          this.$message.error(e);
          console.error(e);
        }
    }
  },
  mounted() {
    this.chart_line = echarts.init(
      document.getElementById("echarts_line")
    );
    this.chart_bar = echarts.init(
      document.getElementById("echarts_bar")
    );
    this.chart_bar_two = echarts.init(
      document.getElementById("echarts_bar_two")
    );
    this.chart_pie = echarts.init(
      document.getElementById("echarts_pie")
    );
    this.getOpts();
  }
};
</script>

<style lang="less" scoped>
.new-content {
  transform-origin: 0 0;
  position: relative;
  /* padding: 20px 0; */
  box-sizing: border-box;
  width: 100%;
  font-size: 20px;
  height: 800px;
  background: url("../assets/content_background.jpg") top center #041438;
  color: white;
  .all-region-content {
     box-sizing: border-box;
    padding: 20px 40px;
    width: 100%;
    // height: 700px;
    > * {
      position: relative;
    }
    .island-icon {
      position: absolute;
      right: 278px;
      bottom: 85px;
      width: 16px;
    }
  }
}
.flex {
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
}
.top{
  width: 100%;
  &_line{
    height: 300px;
    // width: 400px;
    width: 50%;
  }
  &_bar {
    height: 300px;
    // width: 400px;
    width: 50%;
  }
}
.bottom {
  margin-top: 30px;
  width: 100%;
  &_bar {
    height: 300px;
    // width: 400px;
    width: 50%;
  }
  &_pie {
    height: 300px;
    // width: 400px;
    width: 50%;
  }
}
</style>

