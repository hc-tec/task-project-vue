<template>
  <div>
    <neumorphic-label>{{ label }}</neumorphic-label>
    <input
      class="neumorphic-input"
      :type="type"
      v-model="tmp_value"
      :placeholder="placeholder">
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator'
import neumorphicLabel from './neumorphic-label.vue'
@Component({
  components: {
    "neumorphic-label": neumorphicLabel,
  }
})
export default class NeumorphicInput extends Vue {
  @Prop() private label?: String;
  @Prop() private value?: String;
  @Prop() private placeholder?: String;
  @Prop({type: String, default: 'text'}) private type?: String;
  private tmp_value ?: String = this.value;
  @Watch('tmp_value')
  valueChange(newValue: String, oldValue: String): void {
    this.$emit('dataChange', newValue);
  }

  @Emit('dataChange')
  dataChange(): void {}

}
</script>
<style scoped>
.neumorphic-input {
  border-radius: 10px;
  border: 3px solid rgb(228,235,245);
  margin-bottom: 10px;
  border-radius: 25px;
  box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;
  outline: none !important;
  line-height: 3;
  width: 90%;
  background-color: transparent;
  font-size: 18px;
  letter-spacing: 0.1em;
  color: #61677C;
  text-shadow: 1px 1px 0 #FFF;
  padding: 0 12px;
  transition: box-shadow .2s;
}
.neumorphic-input:focus {
  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
}
</style>
