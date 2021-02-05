<template>
  <div id="app">
    <div class="container">
      <img alt="Vue logo" src="./assets/logo.png" />
      <div class="todo--wrapper">
        <div class="todo--title text-center text-white">
          <h1>Daily Todo Lists</h1>
        </div>
        <div class="todo--bot--wrapper">
          <div class="input--wrapper text-center">
            <input
              type="text"
              class="input--box text-center"
              placeholder="Add ur todo"
              v-model="content"
              v-on:keyup.13="addNew(content)"
            />
            <button class="input--button" @click="addNew(content)">
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <task
            v-for="(task, index) in tasks"
            :key="index"
            :task="task"
            :index="index"
            v-on:updateTask="updateTask"
            v-on:deleteTask="deleteTask"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import task from "./components/task.vue";

export default {
  name: "App",
  components: {
    task,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          content: "fuck me??!!",
          odd: true,
        },
        {
          id: 2,
          content: "why too slow??!!",
          odd: false,
        },
        {
          id: 3,
          content: "fuck life!!",
          odd: true,
        },
        {
          id: 4,
          content: "being rich-pressure",
          odd: false,
        },
      ],
    };
  },
  methods: {
    checkNull(taskContent) {
      return taskContent.trim().length != 0;
    },
    addNew(taskContent) {
      if (this.checkNull(taskContent)) {
        if (this.tasks.length != 0) {
          this.tasks.push({
            id: this.tasks.length + 1,
            content: taskContent,
            odd: !this.tasks[this.tasks.length - 1].odd,
          });
          this.content = "";
        }
      } else alert("Enter the fucking thing u need to be done!");
    },
    updateTask({ newContents, indexs }) {
      this.tasks[indexs].content = newContents;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.tasks.slice(index).forEach((task) => {
        return [(task.odd = !task.odd), (task.id -= 1)];
      });
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body {
  width: 100vw;
  height: 100vh;
  font-family: "Roboto", sans-serif;
}
button {
  border: none;
  outline: none;
  color: white;
}
button:hover {
  cursor: pointer;
}

.text-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-white {
  color: rgb(235, 239, 240);
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.todo--wrapper {
  padding-left: 1px;
  width: 50%;
  height: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgb(201, 195, 195);
}
.todo--wrapper {
  padding-left: 1px;
  width: 50%;
  height: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid rgb(201, 195, 195);
}

.todo--title {
  width: 100%;
  height: 100px;
  background-color: rgb(53, 73, 93);
  font-size: 20px;
}

.input--wrapper {
  border-left: 1px solid rgb(217, 222, 226);
}

.input--box {
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  padding-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(117, 117, 117);
}

.input--box:focus {
  outline: none;
}

.input--button {
  height: 50px;
  width: 50px;
  background-color: rgb(48, 166, 74);
}
</style>
