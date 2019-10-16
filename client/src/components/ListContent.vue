<template>
  <div id='ListContent'>
    <div class="box">
      <ul>
        <li v-for="i in testNum"
            :key='i'>
          <div class="item">
            <div></div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ListContent extends Vue {
  public testNum = 16;
}
</script>
<style lang='scss' scoped>
#ListContent {
  width: 80%;
  height: 100vh;
  padding: 4 * $fontsize 0 0 20%;
  .box {
    padding-left: 4 * $fontsize;
    height: 100vh;
  }
  ul {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    width: 100%;
    height: 100%;

    li {
      width: 16%;
      display: flex;
      justify-content: center;
      align-items: center;
      .item {
        width: 48%;
        min-width: 6 * $fontsize;
        margin: 2 * $fontsize;
        div {
          height: 100%;
          padding-bottom: 100%;
          background-color: #428bca;
          border-radius: $fontsize;
        }
      }
    }
  }
}
</style>