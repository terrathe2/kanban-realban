<template>
  <div class="col-md-4 col-sm-12">
    <div class="card bg-finished">
      <h2 class="card-header">Finished</h2>
      <div class="card-body">
        <div class="isi-todo" v-for="value in finishedList">
          <h4 class="todo-header">{{ value.title }}</h4>
          <div class="todo-body">
            Description : {{ value.description }} <br>
            Point : {{ value.point }}<br>
            Assign To : {{ value.assignTo }}<br><br>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-primary left">To Active</button>
            <button type="button" class="btn btn-primary center">Delete</button>
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
  props: ['finishedList']
}
</script>

<style scoped>
  .bg-finished{
    background-color: purple;
  }
</style>
