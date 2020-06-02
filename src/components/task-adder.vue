<template>
  <div class="task-adder">
    <h1>任务添加组件</h1>
    <div>
      <neumorphic-input
        v-for="field in task_fields"
        :key="field.task_title"
        :label="field.label"
        :value="field.value"
        @dataChange="(field.valueChangeMethod)($event)">
      </neumorphic-input>
    </div>
    <neumorphic-btn
      @clickEvent="addTask">
      添加任务
    </neumorphic-btn>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { Task } from '../task'
import neumorphicInput from './neumorphic-input.vue'
import neumorphicBtn from './neumorphic-btn.vue'
@Component({
  components: {
    "neumorphic-input": neumorphicInput,
    "neumorphic-btn": neumorphicBtn,
  }
})
export default class TaskAdder extends Vue {

  private task: Task = {
    task_title: '',
    task_start_day: '',
    task_end_day: '',
    task_description: '',
    task_finish_day: '',
  }

  private task_fields: Array<Object> = [
    {
      label: '任务名称',
      value: this.task.task_title,
      valueChangeMethod: this.taskTitleChange,
    },
    {
      label: '开始时间',
      value: this.task.task_start_day,
      valueChangeMethod: this.taskStartDayChange,
    },
    {
      label: '结束时间',
      value: this.task.task_end_day,
      valueChangeMethod: this.taskEndDayChange,
    },
    {
      label: '任务描述',
      value: this.task.task_description,
      valueChangeMethod: this.taskDescriptionChange,
    }
  ]

  private taskTitleChange(newValue: String): void {
    this.task.task_title = newValue;
  }

  private taskStartDayChange(newValue: String): void {
    this.task.task_start_day = newValue;
  }

  private taskEndDayChange(newValue: String): void {
    this.task.task_end_day = newValue;
  }

  private taskDescriptionChange(newValue: String): void {
    this.task.task_description = newValue;
  }

  public addTask(): void {
    this.$taskList.push(this.task);
    alert('任务添加成功!')
  }
}
</script>
<style scoped>
.task-adder {
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
	background-color: rgb(228,235,245);
	border-radius: 13px;
  box-shadow:  3px 3px 5px #BABECC,  -5px -5px 10px #FFF;
}
.task-adder > * {
  margin-bottom: 10px;
}
.task-adder > h1 {
  text-align: center;
  color: #535D74;
}
</style>
