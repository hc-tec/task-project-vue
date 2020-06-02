<template>
  <footer>
    <p>@copyright NCUTEAM Titto</p>
  </footer>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {

}
</script>
<style scoped>
footer {
  text-align: center;
}
</style>
