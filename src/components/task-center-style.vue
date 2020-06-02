<template>
  <div class="task-finish-day" v-if="date_descrption">
    <div>
      <neumorphic-label class="day-label">
        {{ date_title }}
      </neumorphic-label>

      <p class="neumorphic-text">{{ date_descrption }}</p>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import neumorphicLabel from './neumorphic-label.vue'
@Component({
  components: {
    "neumorphic-label": neumorphicLabel,
  }
})
export default class TaskCenterStyle extends Vue {
  @Prop() private date_title?: String;
  @Prop() private date_descrption?: String;
}
</script>
<style scoped>
.task-finish-day  {
  display: flex;
  align-items: center;
  justify-content: center;

}
.task-finish-day .neumorphic-label,
.task-finish-day .neumorphic-text {
  color: #000;
}
.neumorphic-label {
  color: #868b98;
  display: block;
  text-align: center;
  margin: 25px 10px 5px;
}
.neumorphic-text {
  padding: 10px 20px;
  text-align: center;
  color: #8D96A8;
}
.day-label {
  font-size: 1.4em;
  margin-left: 0;
  margin-right: 0;
}
</style>
