<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Business Image Feed</a>

    <button class="navbar-toggler" @click="collapse=!collapse" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="{'collapse':collapse, 'navbar-collapse':true}">
      <ul class="navbar-nav">

        <navbar-link to="/" label="Home"/>

        <navbar-link to="/request" label="Request Donation"/>

        <navbar-link to="/profile" label="Profile"/>

        <navbar-link to="/movies" label="Test"/>

      </ul>
    </div>

  </nav>
</template>

<script>
import NavbarLink from './NavbarLink'
export default {
  components: {
    NavbarLink
  },
  data () {
    return {
      collapse: true
    }
  }
}
</script>
