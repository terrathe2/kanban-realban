<template>
  <div id="app">
    <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#newTask">New Task</button>
    <div id="newTask" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <div class="modal-content">
          <div class="modal-header bgcolor">
            <h4 class="modal-title">New Task</h4>
          </div>
          <form id="newTaskForm" method="post" @submit.prevent="newTask">
            <div class="modal-body">
              <div class="form-group">
                <label class="col-form-label" for="inputDefault">Titlle</label>
                <input class="form-control" id="inputDefault" type="text" @input="inputTitle" required><br>
                <label for="exampleTextarea">Description</label>
                <textarea class="form-control" id="exampleTextarea" rows="5" @input="inputDescription" required></textarea><br>
                <label class="col-form-label" for="inputDefault">Point</label>
                <input class="form-control" id="inputDefault" type="number" min="0" @input="inputPoint"><br>
                <label class="col-form-label" for="inputDefault">Asign To</label>
                <input class="form-control" id="inputDefault" type="text" @input="inputAssign">
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Submit</button>
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </form>
        </div>

      </div>
    </div>
    <!-- <router-view/> -->
    <container />
  </div>
</template>

<script>
import container from '@/components/container'
export default {
  name: 'app',
  components: {
    container
  },
  methods: {
    inputTitle (e) {
      this.$store.commit('inputTitle', e.target.value)
    },
    inputDescription (e) {
      this.$store.commit('inputDescription', e.target.value)
    },
    inputPoint (e) {
      this.$store.commit('inputPoint', e.target.value)
    },
    inputAssign (e) {
      this.$store.commit('inputAssign', e.target.value)
    },
    newTask () {
      this.$store.dispatch('newTask')
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  font-family: 'Cabin Sketch', cursive;
}

body{
  background: url('assets/background.gif') no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

#inputDefault, #exampleTextarea{
  border: 2px solid pink;
}

.bgcolor{
  background-color: #ff5f5f;
}
</style>
