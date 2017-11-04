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
            <button type="button" class="btn btn-primary center" @click="deleteTodo(index)">Delete</button>
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
    deleteTodo (index) {
      this.$swal({
        title: 'Are you sure?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'red',
        cancelButtonColor: '#eaeaea',
        confirmButtonText: 'Are you sure?'
      }).then(() => {
        this.$swal({
          title: 'Bye bye Honey :(',
          text: 'Hope ill be in your task again',
          imageUrl: 'https://media.giphy.com/media/12Y2QggFypRf7G/giphy.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })

        this.$db.ref('todo').child(this.todoList[index]['.key']).remove()
      })
    },
    changeActive (index) {
      // console.log(this.todoList[index]['.key'])
      let obj = {
        assignTo: this.todoList[index].assignTo,
        description: this.todoList[index].description,
        point: this.todoList[index].point,
        title: this.todoList[index].title
      }

      this.$swal({
        title: 'Are you sure?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#22ff00',
        cancelButtonColor: '#eaeaea',
        confirmButtonText: 'Change it to Active'
      }).then(() => {
        this.$swal({
          title: 'Ganbatte Honey!!',
          text: 'You got this!!',
          imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/c6/5a/6c/c65a6c3cb6119ff17caed8325d269f80.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })

        this.$db.ref('active').push(obj)
        this.$db.ref('todo').child(this.todoList[index]['.key']).remove()
      })
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
    background-color: #22ff00;
    color: black;
    opacity: 0.6;
  }

  .right:hover{
    opacity: 1;
  }
</style>
