<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>this page is for the homepage</p>
    <div class="center">
      <div>
        <input type="text" v-model="newTodo" />
        <button @click="addNewTodo">ADD NEW</button>
      </div>
      <TodoItem
        v-for="(item, index) in todos"
        :key="'item' + index"
        :item="item"
        @onDeleteItem="deleteItem"
      />
    </div>
  </div>
</template>

<script>
// create ok
// read ok
// update
// delete ok
// @ is an alias to /src
import { TodoItem } from "@/components/Uncommon/Home";
export default {
  name: "Home",
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [
        {
          content: "do 1",
        },
        {
          content: "do 2",
        },
        {
          content: "do 3",
        },
        {
          content: "do 4",
        },
      ],
      newTodo: "",
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        content: this.newTodo
      });
      this.newTodo=""
    },
    deleteItem(item) {
      this.todos = this.todos.filter((ele) => {
        return ele !== item;
      });
    },
  },
};
</script>
<style scoped>
.center {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
