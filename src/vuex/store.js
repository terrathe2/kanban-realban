import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import vuefire from 'vuefire'
import swal from 'vue-sweetalert2'

Vue.use(Vuex)
Vue.use(firebase)
Vue.use(vuefire)
Vue.use(swal)

var config = {
  apiKey: 'AIzaSyAk0TMBmyUGs6Cfr3gNEnSZluRa_hlYvWQ',
  databaseURL: 'https://kanban-b4e17.firebaseio.com',
  projectId: 'kanban-b4e17'
}

firebase.initializeApp(config)

Vue.prototype.$db = firebase.database()

let db = firebase.database()

const store = new Vuex.Store({
  state: {
    // todos: [],
    inputObj: {
      title: '',
      description: '',
      point: 0,
      assignTo: ''
    }
  },
  mutations: {
    inputTitle (state, value) {
      state.inputObj.title = value
    },
    inputDescription (state, value) {
      state.inputObj.description = value
    },
    inputPoint (state, value) {
      state.inputObj.point = value
    },
    inputAssign (state, value) {
      state.inputObj.assignTo = value
    },
    updateTodo (state, value) {
      // console.log('haiiiii', value)
      state.todos = value
    }
  },
  actions: {
    newTask (context) {
      db.ref('todo').push(this.state.inputObj)
      Vue.swal(
        'Input Success!',
        'congratulations!',
        'success'
      )
    }
  }
})

export default store
