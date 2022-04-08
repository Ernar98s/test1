<template>
  <div id="app">
    <div v-if="showEditor" class="title-container">
      <input
        class="title-input"
        v-model="pageTitle"
        type="text"
        @blur="showEditor = !showEditor"
      />
      <p>unfocus to commit change</p>
    </div>
    <div v-else class="title-container">
      <h4 @click="editTitle">
        {{ title }}
      </h4>
      <p>Click above to change The Title tag of page</p>
    </div>
    <NewTodoForm @createTodo="createTodo" />
    <TodoFilter v-if="todoList.length !== 0" @callFilter="filterTodo" />
    <todo-list
      :todoList="searcheadGoal ? filteredList : todoList"
      @deleteTodo="deleteTodo"
      @changeTodoStatus="changeTodoStatus"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import NewTodoForm from '@/components/NewTodoForm.vue';
import TodoFilter from '@/components/TodoFilter.vue';

export default {
  name: 'App',
  title() {
    return `${this.pageTitle}`;
  },
  components: {
    TodoList,
    NewTodoForm,
    TodoFilter,
  },
  data() {
    return {
      pageTitle: 'Default title tag',
      showEditor: false,
      todoList: [],
      searcheadGoal: '',
    };
  },
  created() {
    localStorage.title
      ? (this.pageTitle = localStorage.title)
      : (this.pageTitle = 'Default title tag');
    localStorage.todoList
      ? (this.todoList = JSON.parse(localStorage.todoList))
      : (this.todoList = []);
  },
  methods: {
    editTitle() {
      this.showEditor = true;
    },
    createTodo(todo) {
      this.todoList.push(todo);
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    },
    deleteTodo(todoId) {
      this.todoList = this.todoList.filter((item) => item.id !== todoId);
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    },
    changeTodoStatus(todoId) {
      const index = this.todoList.findIndex((item) => item.id === todoId);
      const item = this.todoList[index];
      item.status = !item.status;
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    },
    filterTodo(obj) {
      this.searcheadGoal = obj.title;
      localStorage.setItem('todoFilter', this.searcheadGoal);
    },
  },
  computed: {
    filteredList() {
      return this.todoList.filter((item) => {
        return (
          item.title.toLowerCase().indexOf(this.searcheadGoal.toLowerCase()) >
          -1
        );
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 25px auto;
}

.title-container h4,
.title-container p {
  margin: 0;
  padding: 0;
}

.title-container h4 {
  cursor: pointer;
}

.title-container p {
  font-size: 12px;
}
</style>
