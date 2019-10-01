<template>
  <div class="question-box">
    <div class="type">{{type==='single'?'单选':'多选'}}</div>
    <div class="title" v-html='title'>
    </div>
    <ul class="result-list">
      <li class="list"
      :class="{isActive:answer.indexOf(chooseMap[index])>-1}"
      @click="choose(chooseMap[index])"
      v-for="(item,index) in list"
      :key='index'>
        <icon
        v-if="answer.indexOf(chooseMap[index])>-1"
        class="icon"
        :name='type==="single"?"single_choosed":"multiple_choosed"'>
        </icon>
        <icon v-else class="icon" :name='type==="single"?"single_choose":"multiple_choose"'></icon>
        <p>{{chooseMap[index]}} . {{item}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Model, Emit,
} from 'vue-property-decorator';

import {
  Getter,
} from 'vuex-class';

@Component
export default class QuestionBox extends Vue {
  @Prop() type:'multiple'|'single' // 问题类型

  @Prop() title:string // 题目

  @Prop() list:string[] // 选项

  @Prop() lock:boolean | null // 不可编辑，用于结果展示

  @Model('change', { // initAnswer双向绑定，change为双向绑定事件名
    type: Array,
  })

  activeAnswer:string[]

  answer:string[] = []

  chooseMap:string[] = ['A', 'B', 'C', 'D'] // 选项序号

  @Emit('change') // change 冒泡事件名 函数返回值为携带参数
  choose(answer:string) {
    if (this.lock) {
      return this.answer;
    }
    if (this.type === 'single') {
      this.answer = [answer];
    } else if (this.type === 'multiple') {
      if (this.answer.includes(answer)) {
        this.answer = this.answer.filter((item:string) => item !== answer);
        return this.answer;
      }
      this.answer.push(answer);
    }
    return this.answer;
  }

  mounted() {
    this.answer = this.activeAnswer;
  }
}
</script>

<style lang="stylus" scoped>
.question-box
  position absolute
  top 0
  bottom 0
  box-sizing border-box
  overflow-x auto
  margin 30px
  padding 20px
  background background linear-gradient(to bottom ,#fefefe 0%,#f7f7f7 100%) repeat
  box-shadow 1px 1px 18px #999
  border-radius 10px
  .title
    text-indent 90px
    font-size 30px
    line-height 50px
    color #333
  .type
    position absolute
    left 15px
    top 25px
    width 80px
    height 40px
    border-radius 20px 20px 0 20px
    background #ff663c
    color white
    text-align center
    line-height 40px
    font-size 24px
  .result-list
    margin-top 30px
    .list
      display flex
      font-size 32px
      margin 20px 0
      line-height 50px
      .icon
        margin-right 10px
        margin-top 7px
        min-width 40px;
    .isActive
      color #ff663c

</style>
