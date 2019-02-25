
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

//状态
const state = {
  userInfo: JSON.parse(localStorage.getItem('userInfo'))
}
console.log(state.userInfo)
const mutations = {
  SAVE_USERINFO (state, userInfo) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    state.userInfo = userInfo
    console.log(state.userInfo)
  }
}
export default new vuex.Store({
  state,
  mutations
})
