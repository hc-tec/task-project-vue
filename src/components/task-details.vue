<template>
  <div class="task-details">
    <p class="neumorphic-card">{{ this.$taskList[index].task_title }}</p>
    <div class="neumorphic-card__outer">
      <task-day
        :task_day_component="this.$taskList[index]">
      </task-day>

      <day-center-style
        date_title="Task-Description"
        :date_descrption="this.$taskList[index].task_description">
      </day-center-style>
    </div>
    <neumorphic-btn
      v-if="!this.$taskList[index].task_finish_day"
      class="task-finish-btn"
      @clickEvent="finishTask">
      完成任务
    </neumorphic-btn>
  </div>
</template>
<script lang='ts'>
import { Vue, Prop, Component } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Task } from '../task'
import newmorphicBtn from './neumorphic-btn.vue'
import taskDay from './task-day.vue'
import dayCenterStyle from './task-center-style.vue'
import { getTimeStr } from '../func'
@Component({
  components: {
    "task-day": taskDay,
    "day-center-style": dayCenterStyle,
    "neumorphic-btn": newmorphicBtn
  }
})
export default class TaskDetails extends Vue {

  public index?: Number;

  get indexFromRoute() : Number {
    return +this.$route.params.taskIndex;
  }
  finishTask(): void {
    const today = getTimeStr(new Date(), 'day');
    this.$set(this.$taskList[this.index], 'task_finish_day', today);
    alert('成功完成任务');
  }
  created(): void {
    this.index = this.indexFromRoute;
  }
}
</script>
<style scoped>
.task-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
}
.task-details > * {
  margin-bottom: 30px;
}
.task-description {
  display: flex;
  align-items: center;
  justify-content: center;
}
.explain-label {
  font-size: 1.4em;
  text-align: center;
}
.neumorphic-card {
  display: block;
  background-color: rgb(228,235,245);
  padding: 20px;
  text-align: center;
  box-shadow: 7px 7px 15px rgba(55, 84, 170, .15),
              -7px -7px 20px rgba(255, 255, 255, 1),
              0px 0px 4px rgba(255, 255, 255, .2) !important;
  border-radius: 30px;
  margin-bottom: 20px;
  font-size: 1.4em;
  color: #8D96A8;
}
.neumorphic-card__outer {
  background-color: rgb(228,235,245);
  border-radius: 10px;
  border: 5px solid rgb(228,235,245);
  box-shadow: 7px 7px 15px rgba(55, 84, 170, .15),
              -7px -7px 20px rgba(255, 255, 255, 1),
              0px 0px 4px rgba(255, 255, 255, .2) !important;
}
.neumorphic-label {
  color: #868b98;
  display: block;
  margin: 25px 10px 5px;
}
.neumorphic-text {
  padding: 10px;
  text-align: start;
  color: #8D96A8;
}
.task-finish-btn {
  width: 40%;
  margin-left: 30%;
}


</style>
