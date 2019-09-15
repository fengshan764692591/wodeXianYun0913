
// nuxt 已经把store(vuex) 关联到了各个模块
// 每个模块有3个属性
// state:存数据
export const state = () => ({
  userInfo: {
    token: "",
    user: {
      nickname: "我的De-lovely"
    }
  }

})

// mutations: 同步的设置修改

export const mutations = {
  // 设置用户数据
  setUserInfo(state, data) {
    state.userInfo = data;
  },
  // 清除用户数据的方法
  clearUserInfo(state) {
    state.userInfo = {
      token: "",
      user: {
        nickname: "我的De-lovely"
      }
    }
  }
}

// actions: 异步的修改
export const actions = {
  login({ commit }, data) {
    this.$axios({
      url: "/accounts/login",
      method: 'POST',
      data,
    }).then(res => {
      // console.log(res.data);
      // 把数据设置给vuex
      commit('setUserInfo', res.data)
    });
  }
}