<template>
  <div id="back-forword-btn">
    <neumorphic-btn @clickEvent="back" circle>＜</neumorphic-btn>
    <neumorphic-btn @clickEvent="forword" circle>＞</neumorphic-btn>
  </div>
</template>
<script lang='ts'>
import neumorphicBtn from './neumorphic-btn.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    "neumorphic-btn": neumorphicBtn,
  }
})
export default class ForwordBackBtn extends Vue {
  back(): void {
    this.$router.back()
  }
  forword(): void {
    this.$router.forward()
  }
}
</script>
<style scoped>
#back-forword-btn > * {
  margin-right: 10px;
}
</style>
