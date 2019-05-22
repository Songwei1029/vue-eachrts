<template>
  <div>
    <el-container>
      <el-aside width="150px"  >
        <el-menu default-active="/info/pageOne" router >
          <el-menu-item index="/info/pageOne">
            <span slot="title">折线，柱状，扇形</span>
          </el-menu-item>
          <el-menu-item index="/info/pageTwo">
            <span slot="title">地图</span>
          </el-menu-item>
          <el-menu-item index="/info/pageThree">
            <span slot="title">部分特效</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main >
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body, html {
  padding: 0;
  margin: 0;
}
* {
  padding: 0;
  margin: 0;
}
.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

</style>
