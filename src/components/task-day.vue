<template>
  <div>
    <div class="task-day">

      <day-info
        date_title="Start-Day"
        :date_data="task_day_component.task_start_day">
      </day-info>

      <span class="seperate-symbol">~</span>

      <day-info
        date_title="End-Day"
        :date_data="task_day_component.task_end_day">
      </day-info>

    </div>

    <day-center-style
      date_title="Finish-Day"
      :date_descrption="task_day_component.task_finish_day">

    </day-center-style>

  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import dayInfo from './task-day-info.vue'
import dayCenterStyle from './task-center-style.vue'
@Component({
  components: {
    "day-info": dayInfo,
    "day-center-style": dayCenterStyle,
  }
})
export default class TaskDay extends Vue {
  @Prop() private task_day_component?: Object;
}
</script>
<style scoped>
.task-day {
  display: flex;
  justify-content: space-evenly;
}

.seperate-symbol {
  display: flex;
  align-items: center;
  font-size: 3em;
}
</style>
