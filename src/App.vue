<template>
  <div id="app">
    <el-container>
      <el-header>
        <div style="height: 230px;width: 1100px;margin: 0 auto;zoom: 1">
          <div>
            <div style="float: left">
              <img src="./assets/logo_1.png"   lazy='true' alt="图片暂时找不到了">
            </div>
          </div>
          <div style="float: right;margin-top: 27px;padding-right: 250px">
            <b>政治建会&nbsp;&nbsp;团结立会</b>
            <b style="margin-left: 56px;display: block;line-height: 54px;color: darkslateblue;font-width: bold;">
              服务兴会&nbsp;&nbsp;改革强会
            </b>
          </div>
        </div>
        <div>
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#0c80c7"
            text-color="#fff"
            style="width: 1200px;height: 50px"
            active-text-color="#ffd04b">
            <el-menu-item index="1" style="width: 150px;font-size: 18px"><router-link to="">首页</router-link></el-menu-item>
            <el-menu-item index="2" style="width: 150px;font-size: 18px"><router-link to="">本会简绍</router-link></el-menu-item>
            <el-menu-item index="3" style="width: 150px;font-size: 18px"><router-link to="">党的关怀</router-link></el-menu-item>
            <el-menu-item index="4" style="width: 150px;font-size: 18px"><router-link to="">非公动态</router-link></el-menu-item>
            <el-menu-item index="5" style="width: 150px;font-size: 18px"><router-link to="">商会建设</router-link></el-menu-item>
            <el-menu-item index="6" style="width: 150px;font-size: 18px"><router-link to="">各地工商联</router-link></el-menu-item>
            <el-menu-item index="7" style="width: 150px;font-size: 18px"><router-link to="">文件信息</router-link></el-menu-item>
            <el-menu-item index="8" style="width: 150px;font-size: 18px"><router-link to="">一带一路</router-link></el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-main>
        <div style="width: 100px;height: 1000px">
        </div>
        <div class="carousel-wrap" id="carousel">
          <transition-group tag="ul" class="slide-ul" name="list">
            <li v-for="(list,index) in slideList"  :key="list.index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
              <a :href="list.clickUrl">
                <img :src="list.image" :alt="list.desc">
              </a>
            </li>
          </transition-group>
          <div class="carousel-items">
            <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
          </div>
        </div>
             <router-view></router-view>
      </el-main>
      <el-footer>
          <div>
            <a href="./gdgsl_362/beijing/">北京</a>
            <a href="./gdgsl_362/tj/">天津</a>
            <a href="./gdgsl_362/hb/">河北</a>
            <a href="./gdgsl_362/sx/">山西</a>
            <a href="./gdgsl_362/nm/">内蒙古</a>
            <a href="./gdgsl_362/ln/">辽宁</a>
            <a href="./gdgsl_362/jl/">吉林</a>
            <a href="./gdgsl_362/hlj/">黑龙江</a>
            <a href="./gdgsl_362/sh/">上海</a>
            <a href="./gdgsl_362/js/">江苏</a>
            <a href="./gdgsl_362/zj/">浙江</a>
            <a href="./gdgsl_362/ah/">安徽</a>
            <a href="./gdgsl_362/fj/">福建</a>
            <a href="./gdgsl_362/jx/">江西</a>
            <a href="./gdgsl_362/sd/">山东</a>
            <a href="./gdgsl_362/hn/">河南</a>
          </div>
          <div >
            <a href="./gdgsl_362/hub/">湖北</a>
            <a href="./gdgsl_362/hunan/">湖南</a>
            <a href="./gdgsl_362/guangdong/">广东</a>
            <a href="./gdgsl_362/guangxi/">广西</a>
            <a href="./gdgsl_362/hainan/">海南</a>
            <a href="./gdgsl_362/chongqing/">重庆</a>
            <a href="./gdgsl_362/sicuan/">四川</a>
            <a href="./gdgsl_362/guizhou/">贵州</a>
            <a href="./gdgsl_362/yunnan/">云南</a>
            <a href="./gdgsl_362/xizang/">西藏</a>
            <a href="./gdgsl_362/shanxi/">陕西</a>
            <a href="./gdgsl_362/gansu/">甘肃</a>
            <a href="./gdgsl_362/qinghai/">青海</a>
            <a href="./gdgsl_362/ningxia/">宁夏</a>
            <a href="./gdgsl_362/xinjiang/">新疆</a>
            <a href="./gdgsl_362/xjbt/">新疆兵团</a>
          </div>

        <div class="content footer">
          <div class="foot">
            <div class="foota">
              <a href="./wzdt/" target="_blank" >网站地图</a><span>|</span><a href="./mfsm/" target="_blank" >免责申明</a><span>|</span><a href="./lxwm/" target="_blank" >联系我们</a><span>|</span><a href="./wyly2020/" target="_blank">我要留言</a><span>|</span><a href="./yqfkjdxx/" target="_blank">疫情防控监督信箱</a>
            </div>
            <div class="footb">
              <p>地址：中国·北京市西城区德胜门西大街70号 邮编100035</p>
              <p>ICP备案编号：京ICP备18056091号</p>
            </div>
          </div>
        </div>
      </el-footer>
    </el-container>
   <!-- <el-container>
      <el-header>
        <div style="height: 230px;width: 1100px;margin: 0 auto;zoom: 1">
        <div>
          <div style="float: left">
        <img src="./assets/logo_1.png" lazy='true'>
        </div>
        </div>
          <div style="float: right;margin-top: 27px;padding-right: 250px">
             <b>政治建会&nbsp;&nbsp;团结立会</b>
             <b style="margin-left: 56px;display: block;line-height: 54px;color: darkslateblue;font-width: bold;">
             服务兴会&nbsp;&nbsp;改革强会
             </b>
          </div>
      </div>
        <div style="height: 50px;line-height: 50px;background: #0c80c7;margin-top: -64px;width: 100%;">
          <div style="width: 100%;margin: 0 auto;background: #0c80c7;height: 50px">
          <el-tabs  style="width:100%;margin: 0 auto;background: #0c80c7;height: 50px" >
            <el-tab-pane>
              <span slot="label">首页</span>
               我的行程
            </el-tab-pane>
            <el-tab-pane >
              <span slot="label" style="width: 50px">本会简绍</span>
              本会简绍
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="width: 50px">党的关怀</span>
              党的关怀</el-tab-pane>
            <el-tab-pane >
              <span slot="label" style="width: 50px">非公动态</span>
              非公动态</el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="width: 50px">商会建设</span>
              商会建设</el-tab-pane>
            <el-tab-pane>
              <span slot="label" style="width: 50px">各地工商联</span>
              各地工商联</el-tab-pane>
              <el-tab-pane >
              <span slot="label" style="width: 50px">文件信息</span>
              文件信息</el-tab-pane>
              <el-tab-pane >
              <span slot="label" style="width: 50px">一带一路</span>
              一带一路</el-tab-pane>
          </el-tabs>
        </div>
        </div>
      </el-header>
      <el-main></el-main>
    </el-container>-->
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      slideList: [
        {
          "clickUrl": "#",
          "desc": "nhwc",
          "image": "http://dummyimage.com/1745x492/f1d65b"
        },
        {
          "clickUrl": "#",
          "desc": "hxrj",
          "image": "http://dummyimage.com/1745x492/40b7ea"
        },
        {
          "clickUrl": "#",
          "desc": "rsdh",
          "image": "http://dummyimage.com/1745x492/e3c933"
        }
      ],
      currentIndex: 0,
      timer: ''
    }
  },

  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    },
    stop() {
      clearInterval(this.timer)
      this.timer = null
    },
    change(index) {
      this.currentIndex = index
    },
    autoPlay() {
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
.carousel-wrap {
  position: relative;
  height: 453px;
  width: 100%;
  overflow: hidden;
// 删除
background-color: #fff;
}
.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
.slide-ul {
  width: 100%;
  height: 100%;
li {
  position: absolute;
  width: 100%;
  height: 100%;
img {
  width: 100%;
  height: 100%;
}
}
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 380px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}

.active {
  background-color: $ btn-color;
}

}
}

</style>
