<template>
  <div>
    <neumorphic-label
      class="day-label">
      {{ date_title }}
    </neumorphic-label>

    <p class="neumorphic-text">{{ date_data }}</p>
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
export default class TaskDayInfo extends Vue {
  @Prop() private date_title?: String;
  @Prop() private date_data?: String;

}
</script>
<style scoped>

.neumorphic-label {
  color: #868b98;
  display: block;
  text-align: start;
  margin: 25px 10px 5px;
}
.neumorphic-text {
  padding: 0 0 10px;
  text-align: center;
  color: #8D96A8;
}
.day-label {
  font-size: 1.4em;
  margin-left: 0;
  margin-right: 0;
}
</style>
