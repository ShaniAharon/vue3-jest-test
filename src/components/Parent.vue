<template>
  <div class="hello">
    Parent
    <Child />
  </div>
</template>

<script setup lang="ts">
  //When using SFC with <script setup>,
  //imported components can be locally used without registration.
  import Child from './Child.vue'
  defineProps({
    msg: String,
  })
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
