<template>
  <div class="bg music" :class="data?'':'c'">
  </div>
</template>

<script>
    export default {
        props: ['data']
    }

</script>


<style lang="less">
@import 'index.less';
</style>