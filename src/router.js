import Vue from 'vue'
import Router from 'vue-router'
import ProfilePage from './components/profile/ProfilePage.vue'
import DonationsPage from './components/donations/DonationsPage.vue'
import RequestDonorPage from './components/request-donor/RequestDonorPage.vue'
import TodoPage from './components/todo/TodoPage.vue'
import MoviePage from './components/movies/MoviePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'donations-page',
      component: DonationsPage
    },
    {
      path: '/request',
      name: 'request-donor-page',
      component: RequestDonorPage
    },
    {
      path: '/profile',
      name: 'profile-page',
      component: ProfilePage
    },
    {
      path: '/movies',
      name: 'movies-page',
      component: MoviePage
    }
  ]
})
