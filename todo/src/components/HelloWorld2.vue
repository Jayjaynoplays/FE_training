<template>
  <div class="container">
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
            v-model="contentN"
            v-on:keyup.13="addNew(contentN)"
          />
          <button class="input--button" @click="addNew(content)">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <div
          class="list-wrapper"
          v-for="(task, index) in tasks"
          v-bind:key="index"
        >
          <div
            v-bind:class="task.odd ? oddbg : evenbg"
            class="list--compo text-center"
          >
            <div class="list--compo--content text-center">
              <input type="checkbox" v-bind:value="task.id" v-model="picked" />
              <div v-if="editingAt.includes(index)" class="list__edit--wrapper">

                <input
                  type="text"
                  class="list__edit-input"
                  v-model="newContent"
                  v-bind:class="task.odd ? oddbg : evenbg"
                  @keyup.13="updateTask(newContent,index)"
                />
                <div v-bind:value="task.id"></div>
                <button
                  class="list__edit-button"
                  @click="updateTask(newContent,index)"
                >
                  Submit
                </button>
              </div>
              <div
                v-else-if="picked.length != 0 && picked.indexOf(task.id) != -1"
                style="text-decoration: line-through; padding-left: 10px"
              >
                {{ task.id }} {{ task.content }}
              </div>
              <div v-else style="padding-left: 10px">
                {{ task.id }} {{ task.content }}
              </div>
            </div>
            <div class="list--compo--button text-center">
              <button class="list--btn" id="edit" @click="editTask(index)">
                <i class="far fa-edit fa-lg"></i>
              </button>
              <button class="list--btn" id="delete" @click="deleteTask(index)">
                <i class="fas fa-trash-alt fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
export default {
  name: "HelloWorldABC",
  props: {
    msg: String,
  },
  data() {
    return {
      isEditing: false,
      editingAt: [],
      picked: [],
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
      oddbg: "oddbg",
      evenbg: "evenbg",
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
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.tasks.slice(index).forEach((task) => (task.odd = !task.odd));
    },
    editTask(index) {
      // this.editingAt = Array.from(new Set(this.isEditing)); //syntax of ES6 to get element withouth appearing twice or more times

      // or like this: this.editingAt.filter((element,index) => {
      //   return this.editingAt.indexOf(element) === index
      // })
      
      if (this.editingAt.includes(index)) {
        this.editingAt.splice(this.editingAt.indexOf(index), 1);
      } else {
        this.editingAt.push(index);
      }
    },
    updateTask(newContent,index) {
      this.tasks[index].content = newContent;
      this.newContent ="";
      this.editingAt.splice(this.editingAt.indexOf(index), 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

::placeholder {
  font-size: 20px;
  font-weight: bold;
}
.oddbg {
  background-color: rgb(42, 187, 156);
  color: white;
}
.evenbg {
  background-color: white;
  color: rgb(134, 142, 149);
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

.list--compo {
  position: relative;
  width: 100%;
  height: 60px;
  justify-content: start !important;
  font-size: 20px;
  font-weight: bold;
  border-top: 1px solid rgb(217, 222, 226);
  border-left: 1px solid rgb(217, 222, 226);
}
.list--compo--content {
  position: absolute;
  left: 40px;
}
.list__edit-input {
  width: 100% !important;
  height: 50px !important;
  font-size: 20px;
  font-weight: bold;
}
.list__edit-button {
  height: 50px;
  width: 70px;
  background-color: darkblue;
}
.list--compo--content p {
  padding-left: 10px;
}
.list--compo--content input {
  outline: none;
  border: none;
  cursor: pointer;
  height: 17px;
  width: 17px;
  margin-left: 5px;
  background-color: transparent;
}
.list__edit--wrapper {
  width: 100%;
  display: flex;
  position: relative;
}
.list--compo--button {
  position: absolute;
  right: 30px;
}

.list--btn {
  width: 40px;
  height: 40px;
}

#edit {
  background-color: rgb(48, 166, 74);
}
#delete {
  background-color: rgb(218, 56, 73);
}
</style>
