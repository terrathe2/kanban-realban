<template>
  <div id="app">
    <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#newTask">New Task</button>
    <div id="newTask" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <div class="modal-content">
          <div class="modal-header bgcolor">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">New Task</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="col-form-label" for="inputDefault">Titlle</label>
              <input class="form-control" id="inputDefault" type="text"><br>
              <label for="exampleTextarea">Description</label>
              <textarea class="form-control" id="exampleTextarea" rows="5"></textarea><br>
              <label class="col-form-label" for="inputDefault">Asign To</label>
              <input class="form-control" id="inputDefault" type="text">
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
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
  }
}
</script>

<style>
*{
  font-family: 'Cabin Sketch', cursive;
}

#app {
  text-align: center;
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
