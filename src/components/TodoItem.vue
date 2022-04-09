<template>
  <div v-if="alive" class="todoitem--container">
    <span class="todoitem--title"> {{ item.title }} </span>
    <span
      class="todoitem--status"
      :class="item.status ? 'success' : 'warning'"
      @click="changeTodoStatus"
    >
      {{ item.status }}
    </span>
    <span class="todoitem--options">
      <button @click="deleteTodo">X</button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: Object,
  },
  data() {
    return {
      alive: true,
    };
  },
  methods: {
    deleteTodo() {
      this.$emit('deleteTodo', this.item.id);
      this.alive = false;
    },
    changeTodoStatus() {
      this.$emit('changeTodoStatus', this.item.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.todoitem {
  &--container {
    margin: 10px 0;
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    padding: 15px;
    background: white;
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
    border-radius: 15px;

    span {
      width: 33%;
    }
  }

  &--title {
    font-size: 16px;
  }

  &--status {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
  }
}

.success {
  color: green;
}

.warning {
  color: red;
}
</style>
