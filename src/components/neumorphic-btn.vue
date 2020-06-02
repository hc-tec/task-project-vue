<template>
  <button
    :class="btn_class"
    :circle="circle"
    @click="clickEvent">
    <slot></slot>
  </button>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class NeumorphicBtn extends Vue {
  @Prop({type: Boolean, default: false}) private circle!: Boolean;
  private btn_class: Object = [
    'neumorphic-btn',
    this.circle ? 'neumorphic-btn-circle' : '',
  ]
  @Emit('clickEvent')
  clickEvent() {}
}
</script>
<style scoped>
.neumorphic-btn {
  font-size: 20px;
  border: none;
  padding: 10px 40px;
  border-radius: 40px;
  color: #6D7587;
  background-color: transparent;
  cursor: pointer;
  box-shadow: 7px 7px 15px rgba(55, 84, 170, .15),
              -7px -7px 20px rgba(255, 255, 255, 1),
              inset 0px 0px 4px rgba(255, 255, 255, .2),
              inset 7px 7px 15px rgba(55, 84, 170, 0),
              inset -7px -7px 20px rgba(255, 255, 255, 0),
              0px 0px 4px rgba(255, 255, 255, 0) !important;
  transition: box-shadow .1s ease !important;
}

.neumorphic-btn:active {
  box-shadow: 0 0 0        rgba(163,177,198,0.6),
   -0 -0 0    rgba(236, 240, 241, 0.6), 3px 3px 5px        rgba(163,177,198,0.6) inset,
    -3px -3px 3px rgba(255,255,255, 0.3) inset !important;
}

.neumorphic-btn-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0;
}

</style>
