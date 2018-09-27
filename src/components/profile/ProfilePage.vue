<template>
  <div>
    <h1>Hellooooo {{ name ? name : 'Stranger' }}</h1>
    <input v-model="name" type="text">

    <hr>

    <div class="container">
      <profile-form
        @add-task="addTask"/>

      <br>

      <h4>To Do</h4>
      <profile-list
        :list-tasks="pendingTasks"
        @toggle="toggle"/>

      <br/>

      <h4>Completed</h4>
      <profile-list
        :list-tasks="doneTasks"
        @toggle="toggle"/>
    </div>
  </div>
</template>

<script>
import ProfileList from './ProfileList'
import ProfileForm from './ProfileForm'

export default {
  components: {
    ProfileList,
    ProfileForm
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