<template>
  <div>
    <h1>Hello My {{ name ? name : 'Stranger' }}</h1>
    <input v-model="name" type="text">

    <hr>

    <div class="container">
      <todo-form
        @add-task="addTask"/>

      <br>

      <h4>To Do</h4>
      <todo-list
        :list-tasks="pendingTasks"
        @toggle="toggle"/>

      <br/>

      <h4>Completed</h4>
      <todo-list
        :list-tasks="doneTasks"
        @toggle="toggle"/>
    </div>
  </div>
</template>

<script>
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default {
  components: {
    TodoList,
    TodoForm
  },
  data () {
    return {
      name: '',
      tasks: [
      ]
    }
  },
  methods: {
    toggle (task) {
      task.isDone = !task.isDone
    },
    addTask (newTask) {
      if (!newTask) {
        return
      }

      this.tasks.push({
        description: newTask,
        isDone: false
      })
    }
  },
  computed: {
    pendingTasks () {
      return this.tasks.filter(task => !task.isDone)
    },
    doneTasks () {
      return this.tasks.filter(task => task.isDone)
    }
  }
}
</script>

<style>

</style>