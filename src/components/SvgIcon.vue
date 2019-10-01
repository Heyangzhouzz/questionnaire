<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SvgIcon extends Vue {
  @Prop({ type: String, required: true }) name:string

  @Prop({ type: String, default: '' }) className:string

  get iconName() {
    return `#icon-${this.name}`;
  }

  get svgClass() {
    if (this.className) {
      return `svg-icon ${this.className}`;
    }
    return 'svg-icon';
  }
}
</script>

<style scoped lang="stylus">
.svg-icon
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
</style>
