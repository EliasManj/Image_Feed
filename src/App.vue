<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import ProfilePage from './components/profile/ProfilePage.vue'
import DonationsPage from './components/donations/DonationsPage.vue'
import RequestDonorPage from './components/request-donor/RequestDonorPage.vue'
import TodoPage from './components/todo/TodoPage.vue'
import MoviePage from './components/movies/MoviePage.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ProfilePage,
    DonationsPage,
    RequestDonorPage,
    TodoPage,
    MoviePage
  }
}
</script>
