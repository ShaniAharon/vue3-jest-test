<template>
  <nav>
    <a class="home">Home</a>
    <a v-if="isLoggedIn" class="profile">My Profile</a>
  </nav>
</template>

<script setup lang="ts">
  import {Ref, ref} from 'vue'

  defineProps({
    msg: String,
  })

  const isLoggedIn: Ref<boolean> = ref(false)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
