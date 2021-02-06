<template>
  <div id="button">
    <button class="allIn1Class" @click="deleteItem">delete </button>
  </div>
</template>

<script>
export default {
  name: "DeleteButton",
  methods:{
    deleteItem(){
      this.$emit('deleteItemFromBtn')
    }
  }
};
</script>

<style>
#button{
  display: flex;
  align-items: center;
}
.allIn1Class {
  background-color: rgb(224, 152, 152);
  /* border: black; */
  cursor: pointer;
  border-radius: 10px;
  width: 50px;
  height: 30px;
  margin-left: 100px;

}
</style>