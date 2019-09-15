<template>
  <div class="content">
    <el-row type="flex" justify="space-between" class="row-bg">
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </nuxt-link>
      </div>
      <div class="nav">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </div>
      <div class="info">
        <div class="userInfo" v-if="!$store.state.user.userInfo.token">
          <nuxt-link to="/user/login">登录/注册</nuxt-link>
        </div>
        <div class="massge" v-else>
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">
              <img
                class="UserImg"
                src="http://5b0988e595225.cdn.sohucs.com/images/20180202/19eba768ac544ccf8ad382e0107a5bdd.jpeg"
                alt
              />
              {{this.$store.state.user.userInfo.user.nickname}}
              <i
                class="el-icon-arrow-down el-icon--right"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="handleLoginOut">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {

  },
  methods: {
    handleLoginOut(){
    this.$store.commit('user/clearUserInfo');
    this.$message.success('退出成功');
    }
  }
};
</script>
<style scoped lang="less">
.content {
  height: 60px;
  box-shadow: 0 3px 3px #ccc;
  width: 1000px;
  margin: 0 auto;
  line-height: 60px;
  text-align: center;
  .logo {
    img {
      width: 165px;
      height: 42px;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .nav {
    flex: 1;
    text-align: left;
    margin-left: 10px;
    a {
      display: inline-block;
      padding: 0 20px;
      &:hover {
        color: #409eff;
        border-bottom: 5px solid #409eff;
      }
    }
    .nuxt-link-exact-active {
      background-color: #409eff;
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
  }
  .info {
    .massge {
      position: relative;
      .UserImg {
        position: absolute;
        top: 10px;
        left: -48px;
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
    }
  }
}
</style>