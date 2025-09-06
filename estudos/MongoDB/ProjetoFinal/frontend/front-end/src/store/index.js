import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state() {
    return {
      authenticated: false,
      token: null, 
      userId: null // Corrigido de Userid para userId
    }
  },
  getters: {
    authenticated: state => state.authenticated,
    token: state => state.token,
    userId: state => state.userId // Corrigido para userId
  },
  mutations: {
    authenticate(state, data) { // Nome correto da mutation
      state.authenticated = true,
      state.token = data.token,
      state.userId = data.userId // Corrigido para userId
    }, 
    logout(state) {
      state.authenticated = false
      state.token = null
      state.userId = null // Corrigido para userId
    }
  },
  actions: {
  },
  plugins: [vuexLocal.plugin] // Corrigido: plugins em vez de modules
})