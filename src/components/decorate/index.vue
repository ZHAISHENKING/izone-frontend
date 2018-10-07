<template>
  <div class="decorate">
    <div class="topBorder">
      <span class="l mr" style="width:40px;" />
      <span class="l mr" />
      <span class="l mr" />
      <span class="l mr" />
      <span class="l mr" />
      <span class="r ml" style="width:40px;" />
      <span class="r ml" />
      <span class="r ml" />
      <span class="r ml" />
      <span class="r ml" />
    </div>
    <h1>俄罗斯方块</h1>
    <div class="view">
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <b class="c" />
      <div class="clear" />
      <em/>
      <b class="c" />
      <p/>
      <em/>
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <b class="c" />
      <div class="clear" />
      <em/>
      <b class="c" />
      <p/>
      <b class="c" />
      <b class="c" />
      <b class="c" />
      <b class="c" />
      <p/>
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <p/>
      <b class="c" />
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <p/>
      <em/>
      <b class="c" />
      <div class="clear" />
      <em/>
      <b class="c" />
      <div class="clear" />
      <em/>
      <b class="c" />
      <div class="clear" />
      <em/>
      <b class="c" />
    </div>
    <div class="view l">
      <em/>
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <p/>
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <p/>
      <b class="c" />
      <b class="c" />
      <b class="c" />
      <b class="c" />
      <p/>
      <em/>
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <b class="c" />
      <div class="clear" />
      <em/>
      <b class="c" />
      <p/>
      <b class="c" />
      <b class="c" />
      <div class="clear" />
      <em/>
      <b class="c" />
      <div class="clear" />
      <em/>
      <b class="c" />
      <p/>
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <div class="clear" />
      <b class="c" />
      <div class="clear" />
      <b class="c" />
    </div>
  </div>
</template>

<script>
    import { i18n, lan } from '../../unit/const'
    export default {
        name: 'Decorate',
        computed: {
            // title: () => i18n.title[lan],
            github: () => i18n.github[lan],
            QRTitle: () => i18n.QRNotice[lan],
            QRCode: () => i18n.QRCode[lan]
        }
    }
</script>

<style lang="less">
@import 'index.less';
</style>