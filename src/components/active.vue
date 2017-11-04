<template>
  <div class="col-md-4 col-sm-12">
    <div class="card bg-active">
      <h2 class="card-header">Active</h2>
      <div class="card-body">
        <div class="isi-todo" v-for="value in activeList">
          <h4 class="todo-header">{{ value.title }}</h4>
          <div class="todo-body">
            Description : {{ value.description }} <br>
            Point : {{ value.point }}<br>
            Assign To : {{ value.assignTo }}<br><br>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-primary left">To Do</button>
            <button type="button" class="btn btn-primary center">Delete</button>
            <button type="button" class="btn btn-primary right">To Active</button>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted">
        These all the thing you are doing
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['activeList']
}
</script>

<style scoped>
  .bg-active{
    background-color: #22ff00;
  }

  .isi-todo{
    margin-bottom: 10px;
  }

  .todo-header{
    padding: 5px;
    background-color: #eaeaea;
    box-sizing: content-box;
    margin-bottom: 0px;
  }

  .todo-body{
    padding: 5px 5px 5px 20px;
    text-align: left;
    color: black;
    font-size: 16px;
    background-color: white;
  }

  .left{
    float: left;
    background-color: yellow;
    opacity: 0.6;
    color: black;
  }

  .left:hover{
    opacity: 1;
  }

  .center{
    float: center;
  }

  .right{
    float: right;
    background-color: cyan;
    color: black;
    opacity: 0.6;
  }

  .right:hover{
    opacity: 1;
  }
</style>
