<template>
  <div class="col-md-4 col-sm-12">
    <div class="card bg-finished">
      <h2 class="card-header">Finished</h2>
      <div class="card-body">
        <div class="isi-todo" v-for="(value, index) in finishedList">
          <h4 class="todo-header">{{ value.title }}</h4>
          <div class="todo-body">
            Description : {{ value.description }} <br>
            Point : {{ value.point }}<br>
            Assign To : {{ value.assignTo }}<br><br>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-primary left" @click="changeActive(index)">To Active</button>
            <button type="button" class="btn btn-primary center" @click="deleteFinished(index)">Delete</button>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted">
        These all the thing you already did
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['finishedList'],
  methods: {
    deleteFinished (index) {
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

        this.$db.ref('finished').child(this.finishedList[index]['.key']).remove()
      })
    },
    changeActive (index) {
      // console.log(this.todoList[index]['.key'])
      let obj = {
        assignTo: this.finishedList[index].assignTo,
        description: this.finishedList[index].description,
        point: this.finishedList[index].point,
        title: this.finishedList[index].title
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
          title: 'Bye bye Honey',
          text: 'Hope you Finish it on time',
          imageUrl: 'https://media.giphy.com/media/TzpnO1kZpEC0U/giphy.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })

        this.$db.ref('active').push(obj)
        this.$db.ref('finished').child(this.finishedList[index]['.key']).remove()
      })
    }
  }
}
</script>

<style scoped>
  .bg-finished{
    background-color: purple;
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
    background-color: #22ff00;
    opacity: 0.6;
    color: black;
  }

  .left:hover{
    opacity: 1;
  }

  .center{
    float: center;
  }
</style>
