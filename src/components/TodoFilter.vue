<template>
  <div class="todo-filter">
    <span>Filter by</span>
    <label for="">
      Todo goal
      <input
        class="todo-form--input"
        type="text"
        v-model="todoTitle"
        @change="callFilter"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'TodoFilter',
  data() {
    return {
      todoTitle: '',
      todoStatus: false,
    };
  },
  mounted() {
    if (localStorage.todoFilter) {
      this.todoTitle = localStorage.todoFilter;
      this.callFilter();
    } else this.todoTitle = '';
  },
  methods: {
    callFilter() {
      this.$emit('callFilter', {
        title: this.todoTitle,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  margin: 15px auto;
  background: rgb(249, 249, 249);
  padding: 15px;
  border-radius: 15px;
}

label {
  font-size: 14px;
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
</style>
