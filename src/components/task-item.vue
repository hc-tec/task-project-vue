<template>
  <li class="task-item neumorphic-task-item">
    {{ item.task_title }}

    <neumorphic-btn
      class="task-details-btn"
      @clickEvent="taskDetails(index)">
      View Details
    </neumorphic-btn>

  </li>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import neumorphicBtn from './neumorphic-btn.vue'
@Component({
  components: {
    "neumorphic-btn": neumorphicBtn,
  }
})
export default class TaskItem extends Vue {
  @Prop() private item?: string;

  @Prop() private index?: Number;

  taskDetails(task_id: Number): void {
    this.$router.push(`/taskDetails/${task_id}`);
  }
}
</script>
<style scoped>
:root {
  --value: 40%;
  --back-color: #EBECF0;
}

.task-item {
  overflow: hidden;
}

.task-details-btn {
  float: right;
  font-size: .8em;
  padding: 7px 20px;
}

.neumorphic-task-item {
  font-size: 20px;
  border: none;
  padding: 10px 40px;
  border-radius: 40px;
  color: #6D7587;
  background-color: var(--back-color);
  box-shadow: 7px 7px 15px rgba(55, 84, 170, .15),
              -7px -7px 20px rgba(255, 255, 255, 1),
              0px 0px 4px rgba(255, 255, 255, .2) !important;
  transition: box-shadow .25s ease !important;
}

</style>
