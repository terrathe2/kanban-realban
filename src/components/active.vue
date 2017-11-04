<template>
  <div class="col-md-4 col-sm-12">
    <div class="card bg-active">
      <h2 class="card-header">Active</h2>
      <div class="card-body">
        <div class="isi-todo" v-for="(value, index) in activeList">
          <h4 class="todo-header">{{ value.title }}</h4>
          <div class="todo-body">
            Description : {{ value.description }} <br>
            Point : {{ value.point }}<br>
            Assign To : {{ value.assignTo }}<br><br>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-primary left" @click="changeTodo(index)">To Do</button>
            <button type="button" class="btn btn-primary center" @click="deleteActive(index)">Delete</button>
            <button type="button" class="btn btn-primary right" @click="changeFinished(index)">To Active</button>
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
  props: ['activeList'],
  methods: {
    deleteActive (index) {
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

        this.$db.ref('active').child(this.activeList[index]['.key']).remove()
      })
    },
    changeTodo (index) {
      // console.log(this.todoList[index]['.key'])
      let obj = {
        assignTo: this.activeList[index].assignTo,
        description: this.activeList[index].description,
        point: this.activeList[index].point,
        title: this.activeList[index].title
      }

      this.$swal({
        title: 'Are you sure?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'yellow',
        cancelButtonColor: '#eaeaea',
        confirmButtonText: 'Change it to To do'
      }).then(() => {
        this.$swal({
          title: 'Bye bye Honey',
          text: 'Hope you do this task as fast as you can',
          imageUrl: 'https://media.giphy.com/media/TzpnO1kZpEC0U/giphy.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })

        this.$db.ref('todo').push(obj)
        this.$db.ref('active').child(this.activeList[index]['.key']).remove()
      })
    },
    changeFinished (index) {
      // console.log(this.todoList[index]['.key'])
      let obj = {
        assignTo: this.activeList[index].assignTo,
        description: this.activeList[index].description,
        point: this.activeList[index].point,
        title: this.activeList[index].title
      }

      this.$swal({
        title: 'Are you sure?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'purple',
        cancelButtonColor: '#eaeaea',
        confirmButtonText: 'Change it to Finish'
      }).then(() => {
        this.$swal({
          title: 'Congratulations Honey',
          text: 'wowww cool',
          imageUrl: 'http://24.media.tumblr.com/8512b563dff5b2a076b2a41df972165e/tumblr_mpmtt0MbC81qzz5nyo1_500.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })

        this.$db.ref('finished').push(obj)
        this.$db.ref('active').child(this.activeList[index]['.key']).remove()
      })
    }
  }
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
    background-color: purple;
    color: white;
    opacity: 0.6;
  }

  .right:hover{
    opacity: 1;
  }
</style>
