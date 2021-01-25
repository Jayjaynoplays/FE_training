<template>
  <div v-bind:class="task.odd ? oddbg : evenbg" class="list--compo text-center">
    <div class="list--compo--content text-center">
      <input type="checkbox" v-bind:value="index" v-model="picked" />
      <div v-if="editingAt.includes(index)" class="list__edit--wrapper">
        <input
          type="text"
          class="list__edit-input"
          v-model="newContent"
          v-bind:class="task.odd ? oddbg : evenbg"
          @keyup.13="updateTask"
        />
        <button class="list__edit-button" @click="updateTask">Submit</button>
      </div>
      <div
        v-else-if="picked.length != 0 && picked.indexOf(index) != -1"
        style="text-decoration: line-through; padding-left: 10px"
      >{{ task.id }} {{ task.content }}</div>
      <div v-else style="padding-left: 10px">{{ task.id }} {{ task.content }}</div>
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
</template>

<script>
export default {
  name: "task",
  props: {
    task: Object,
    index: Number,
  },
  data() {
    return {
      newContent : this.task.content,
      isEditing: false,
      editingAt: [],
      picked: [],
      oddbg: "oddbg",
      evenbg: "evenbg",
    };
  },
  methods: {
    checkNull(taskContent) {
      return taskContent.trim().length != 0;
    },
    deleteTask(index) {
      this.$emit("deleteTask", index);
    },
    editTask(index) {
      if (this.editingAt.includes(index)) {
        this.editingAt.splice(this.editingAt.indexOf(index), 1);
      } else {
        this.editingAt.push(index);
      }
    },
    updateTask() {
      this.$emit("updateTask", {
        newContents: this.newContent,
        indexs: this.index,
      });
      this.editTask(this.index);
    },
  },
};
</script>

<style scoped>
.oddbg {
  background-color: rgb(42, 187, 156);
  color: white;
}
.evenbg {
  background-color: white;
  color: rgb(134, 142, 149);
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
