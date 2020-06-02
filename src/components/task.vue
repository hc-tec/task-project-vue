<template>
  <div>
    <task-item
      class="task-item"
      v-for="(task,index) in this.$taskList"
      :key="task.task_title"
      :item="task"
      :index="index">
    </task-item>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import TaskItem from './task-item.vue'
@Component({
  components: {
    "task-item": TaskItem,
  }
})
export default class Task extends Vue {

}
</script>

<style scoped>
.task-item {
  margin-bottom: 20px;
}
</style>
