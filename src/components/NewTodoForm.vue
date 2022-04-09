<template>
  <div>
    <form class="todo-form" @submit.prevent="submitForm">
      <label for="">
        Todo goal
        <input class="todo-form--input" v-model="todoTitle" type="text" />
      </label>
      <label for="">
        Todo status
        <input class="todo-form--input" v-model="todoStatus" type="checkbox" />
      </label>
      <button type="submit">Create TODO</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      todoTitle: '',
      todoStatus: false,
    };
  },
  methods: {
    submitForm() {
      this.$emit('createTodo', {
        id: new Date().valueOf(),
        title: this.todoTitle,
        status: this.todoStatus,
      });
      this.todoTitle = '';
      this.todoStatus = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  margin: 15px auto;
  background: rgb(249, 249, 249);
  padding: 15px;
  border-radius: 15px;

  label {
    font-size: 14px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    margin: 15px auto;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(66, 105, 86);

    input {
      margin-left: 10px;
    }
  }
}
</style>
