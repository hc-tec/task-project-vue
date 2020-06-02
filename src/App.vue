<template>
  <div id="app">
    <back-forword-btn-group class="back-forword-btn-group" />
    <router-view/>
    <page-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import backForwordBtnGroup from './components/forword-back-btn.vue'
import footer from './components/footer.vue'
@Component({
  components: {
    "back-forword-btn-group": backForwordBtnGroup,
    "page-footer": footer,
  }
})
export default class TaskItem extends Vue {}

</script>

<style scoped>
.back-forword-btn-group {
  position: fixed;
  top: 10%;
  left: 20%;
}
</style>

