import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      name: localStorage.getItem('name') || '',},
    mutations: {
      login(state, name) {
        state.name = name
        localStorage.setItem('name', name)
      },
      logout(){
        localStorage.removeItem('name')
        this.state.name = ''
      },
    },
    getters: {
      isLoggedIn: state => !!state.name
    }

})
