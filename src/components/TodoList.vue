<template>
  <div class="todolist--container">
    <transition-group name="slide-fade">
      <TodoItem
        v-for="item in todoList"
        :key="item.id"
        :item="item"
        @deleteTodo="deleteTodo"
        @changeTodoStatus="changeTodoStatus"
      />
    </transition-group>
    <span>Note* If you want change status click on it</span>
    <span>Note* Use "X" button to delete TODO</span>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    todoList: Array,
  },
  methods: {
    deleteTodo(todoId) {
      this.$emit('deleteTodo', todoId);
    },
    changeTodoStatus(todoId) {
      this.$emit('changeTodoStatus', todoId);
    },
  },
};
</script>

<style>
.todolist--container {
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 15px;
  max-width: 500px;
  margin: 0 auto;
  background: rgb(249, 249, 249);
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
