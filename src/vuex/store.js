import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)
Vue.use(firebase)

var config = {
  apiKey: "AIzaSyAk0TMBmyUGs6Cfr3gNEnSZluRa_hlYvWQ",
  databaseURL: "https://kanban-b4e17.firebaseio.com",
  projectId: "kanban-b4e17"
};

firebase.initializeApp(config);

Vue.prototype.$db = firebase.database()

let db = firebase.database()

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  }
})

export default store
