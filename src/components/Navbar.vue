<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Donations Feed</a>

    <button class="navbar-toggler" @click="collapse=!collapse" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="{'collapse':collapse, 'navbar-collapse':true}">
      <ul class="navbar-nav">

        <navbar-link @linkClicked="changeComponentPage" to="/" label="Feed"/>

        <navbar-link @linkClicked="changeComponentPage" to="/" label="Request New Donor"/>

        <navbar-link @linkClicked="changeComponentPage" to="/" label="Profile"/>

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
  },
  methods: {
    changeComponentPage(label){
      this.$emit('goToNavLink', label);
    }
  }
}
</script>
