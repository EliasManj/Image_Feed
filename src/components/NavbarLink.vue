<template>
    <a @click="linkClick" class="nav-link" href="#">
      {{label}}
    </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    linkClick(){
      this.$emit('linkClicked', this.label);
    }
  }
}
</script>
