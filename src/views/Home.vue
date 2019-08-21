<template>
  <div class="home">
    <h2 class="title">甜橙金融测试工程师<br/>基础技能评测</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
<style lang="stylus" scoped>
.home
  height 100%
  background url('~assets/header-bg.png') no-repeat
  background-size 100%
  .title
    color white
    text-align center
    padding-top 100px
</style>
