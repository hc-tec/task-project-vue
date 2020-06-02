<template>
  <div id="task">
    <p>Task-List</p>
    <task class="task"></task>
    <neumorphic-btn
      @clickEvent="routeToTaskAdder">
      + 添加任务
    </neumorphic-btn>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import task from '../components/task.vue'
import neumorphicBtn from '../components/neumorphic-btn.vue'
@Component({
  components: {
    task,
    "neumorphic-btn": neumorphicBtn,
  }
})
export default class TaskPage extends Vue {
  routeToTaskAdder(): void {
    this.$router.push('/taskAdder');
  }
}
</script>
<style scoped>
#task {
  width: 500px;
  margin: 0 auto;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
}
#task p {
  font-size: 2em;
  color: #6D7587;
}
.task {
  margin-top: 10px;
}
</style>
