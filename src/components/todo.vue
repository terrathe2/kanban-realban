<template>
  <div class="col-md-4 col-sm-12">
    <div class="card bg-todo">
      <h2 class="card-header">To Do</h2>
      <div class="card-body">
        <div class="isi-todo" v-for="(value, index) in todoList">
          <h4 class="todo-header">{{ value.title }}</h4>
          <div class="todo-body">
            Description : {{ value.description }} <br>
            Point : {{ value.point }}<br>
            Assign To : {{ value.assignTo }}<br><br>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-primary center">Delete</button>
            <button type="button" class="btn btn-primary right" @click="changeActive(index)">To Active</button>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted">
        These all the thing you must do
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todoList'],
  methods: {
    changeActive (index) {
      // console.log(this.todoList[index]['.key'])
      let obj = {
        assignTo: this.todoList[index].assignTo,
        description: this.todoList[index].description,
        point: this.todoList[index].point,
        title: this.todoList[index].title
      }

      this.$db.ref('active').push(obj)
      this.$db.ref('todo').child(this.todoList[index]['.key']).remove()
    }
  }
}
</script>

<style scoped>
  .bg-todo{
    background-color: yellow;
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
