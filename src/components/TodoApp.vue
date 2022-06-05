<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.txt }}
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      />
    </div>
    <form data-test="form" @submit.prevent="createTodo">
      <input type="text" data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script setup lang="ts">
  import {Ref, ref} from 'vue'

  defineProps({
    msg: String,
  })
  const newTodo: Ref<string> = ref('')
  const todos = ref([{id: '1', txt: 'Learn jest testing', completed: false}])
  function makeId(leng = 5) {
    let id = ''
    for (let i = 0; i < leng; i++) {
      id += String.fromCharCode(Math.random() * (127 - 35) + 35)
    }
    return id
  }
  const createTodo = () => {
    todos.value.push({id: makeId(), txt: newTodo.value, completed: false})
    newTodo.value = ''
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .completed {
    text-decoration: line-through;
  }
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
