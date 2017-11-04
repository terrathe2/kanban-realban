<template>
  <div class="hello">
    <h1>Kanban Realban Board</h1>
    <todo :todoList="todoList" />
    <active :activeList="activeList" />
    <finished :finishedList="finishedList" />
  </div>
</template>

<script>
import todo from '@/components/todo'
import active from '@/components/active'
import finished from '@/components/finished'

export default {
  components: {
    todo,
    active,
    finished
  },
  firebase () {
    return {
      todoList: this.$db.ref('todo'),
      activeList: this.$db.ref('active'),
      finishedList: this.$db.ref('finished')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /*.hello{
    opacity: 0.8;
  }*/

  h1{
    font-family: 'Cabin Sketch', cursive;
    background-color: black;
    padding: 10px;
    color: white;
    margin-top: 0px;
  }

  .card{
    opacity: 0.8;
  }

  .card:hover{
    box-shadow: 1px 1px 5px 10px pink;
    /*box-sizing: content-box;*/
    /*background-color: red;*/
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    opacity: 1;
  }

  .card-header{
    margin-top: 0px;
  }

  .card-header{
    font-family: 'Cabin Sketch', cursive;
    background-color: #eaeaea;
    padding: 5px;
  }

  .card-footer{
    background-color: #eaeaea;
    padding: 5px;
    color: black;
  }

  .card-body{
    padding: 5px;
  }
</style>
