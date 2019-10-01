<template>
  <div class="home">
    <h2 class="title">甜橙金融测试工程师<br/>基础技能评测</h2>
    <div class="dec">
      <h3 class="tips">说明:</h3>
      <p v-for="(item,index) in testDes" :key="item">{{`${index+1}丶${item}`}}</p>
    </div>
    <button class="start" @mouseup="start">开始答题</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  Getter,
} from 'vuex-class';

@Component
export default class Home extends Vue {
  @Getter testDes:string[]

  start() {
    this.$router.push({
      name: 'test',
    });
  }
}
</script>
<style lang="stylus" scoped>
@keyframes move {
  from{
    background-position-x : 0
  }
  to{
    background-position-x 450px
  }
}
.home
  height 100%
  background url('~assets/header-bg.png') no-repeat
  background-size 100%
  display flex
  flex-direction column
  align-items center
  .title
    color transparent
    font-size 50px
    line-height 88px
    height 380px
    display flex
    text-align center
    justify-content center
    align-items center
    background linear-gradient(to left,#fff 0%,#e6ac9d 50%,#fff 100%) repeat
    background-clip text
    animation move linear 5s infinite
  .dec
    margin-top 120px
    width 80%
    .tips
      font-size 28px
      font-weight normal
      line-height 70px
      color #333
    p
      font-size 26px
      color #666
      line-height 50px
  .start
    margin-top 100px
    display block
    width 180px
    height 180px
    border none
    outline none
    border-radius 50%
    background #ff663c
    color white
    font-size 32px
    box-shadow 0 0 10px rgba(0,0,0,.5)
    &:active
      box-shadow 0 0 20px rgba(0,0,0,.5)
</style>
