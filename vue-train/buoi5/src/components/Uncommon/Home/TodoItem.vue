<template>
  <div
    id="todoItem"
    class="text-left bg-blue text-white rounded"
    style="width: 300px; height:50px; margin-top:20px"
  >
    <div class="space">
      <div style="padding-left:30px" >{{item.content}}</div>
      <DeleteButton @deleteItemFromBtn ="deleteItem" />
    </div>
  </div>
</template>

<script>
import { DeleteButton } from "@/components/Common/Template/Buttons";
export default {
  name: "todoItem",
  components: {
    DeleteButton,
  },
  props: {
    item: Object,
  },
  methods: {
    deleteItem() {
        this.$emit('onDeleteItem',this.item)
    },
  },
};
</script>

<style>
.bg-blue {
  background-color: rgb(160, 160, 240);
}
.text-white {
  color: white;
}
.rounded {
  border-radius: 10px;
}
.text-left {
  display: flex;
  align-items: center;
}
.space {
  display: flex;
  justify-content: space-around;
}
</style>