<template>
  <div class="test">
      <div class="box">
        <transition :enter-class='enterClass' :leave-to-class='leaveClass' name="slide">
          <QuestionBox
            :key='index'
            v-if="currentQuestin"
            v-model="currentAnswer"
            :type='currentQuestin.type'
            :list='currentQuestin.list'
            :title='currentQuestin.title'
          >
          </QuestionBox>
      </transition>
      </div>
      <div class="control-bar">
        <button @click="last" class="button" :disabled='index===0'>上一题</button>
        <button v-if='index<questions.length-1' @click="next" class="button">下一题</button>
        <button v-else @click="submit" class="button">交 卷</button>
      </div>
      <div class="footer-bar" @click="checking=true">
        <div class="clock">
          <icon name="clock"></icon>
          {{"00:00:30"}}
        </div>
        <icon name="upArrow" className="upArrow"></icon>
        <div class="count">
          {{"05/30"}}
        </div>
      </div>
      <div class="mengc" @click.self="checking=false" v-if="checking">
        <div class="check-box">
          <div class="header" @click="checking=false">
              <div class="clock">
                <icon name="clock"></icon>
                {{"00:00:30"}}
              </div>
              <icon name="upArrow" className="upArrow"></icon>
              <div class="count">
                {{"05/30"}}
              </div>
          </div>
          <div class="body">
              <span v-for="(item,index) in questions"
              :class="{red:!item.currentAnswer.length}"
              :key="index">
                {{index+1}}.{{item.currentAnswer.length?item.currentAnswer.toString():"未答题"}}
              </span>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  Getter,
} from 'vuex-class';
import QuestionBox from '@/components/QuestionBox.vue';

@Component({
  components: {
    QuestionBox,
  },
})
export default class Test extends Vue {
  @Getter questions: Test.Question[]

  index:number = 0

  currentAnswer:string[] = []

  checking:boolean = false

  enterClass:string = 'slide-enter';

  leaveClass:string = 'slide-leave-to'

  get currentQuestin() {
    const currentQuestin = this.questions[this.index];
    this.currentAnswer = currentQuestin.currentAnswer;
    return currentQuestin;
  }

  last() {
    this.leaveClass = 'slide-enter';
    this.enterClass = 'slide-leave-to';
    this.index -= 1;
  }

  next() {
    this.enterClass = 'slide-enter';
    this.leaveClass = 'slide-leave-to';
    this.index += 1;
  }

  submit() {

  }
}
</script>

<style scoped lang="stylus">
.test
  height 100%
  display flex
  flex-direction column
  align-items center
.box
  width 100%
  height calc(100% - 150px)
  overflow hidden
  position relative;
.control-bar
  margin-top 30px
  width 100%
  display flex
  justify-content space-around
  .button
    outline none
    border none
    width 200px
    height 60px
    border-radius 10px
    background background linear-gradient(to bottom ,#f69e86 0%,#ff663c 50%,#f69e86 100%) repeat
    box-shadow 1px 1px 10px #999
    color white
  .button:disabled
    background #ddd
    box-shadow none
.slide-enter
  transform: translateX(105%);
.slide-leave-to
  transform: translateX(-105%);
.slide-enter-active,.slide-leave-active
  transition: all .3s ease;
.footer-bar,.check-box .header
  color #666
  margin-top 45px
  display flex
  font-size 28px
  justify-content space-around
  background #eee
  line-height 55px
  height 55px
  width 100%
  background linear-gradient(to bottom ,#fefefe 0%,#f7f7f7 100%) repeat
  box-shadow 1px 1px 5px #999
  .upArrow
    margin-top 14px
  .clock,.count
    width 30%
  .count
    text-align right
.mengc
  top 0
  bottom 0
  right 0
  left 0
  position fixed
  background rgba(0,0,0,.1)
  .check-box
    position absolute
    width 100%
    bottom 0
    background white
    .header
      margin-top 0
      .upArrow
        transform rotate(180deg)
    .body
      display flex
      flex-wrap wrap
      padding 20px
      height 100px
      overflow hidden
      span
        height 30px
        font-size 28px
        line-height 30px
        margin 10px
        color #666
      .red
        color red
</style>
