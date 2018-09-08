<template>
<div style="width: 100%; background: #fff; padding: 8px;">
  <mu-flex class="flex-wrapper" justify-content="start">
    <mu-flex class="flex-demo" justify-content="center" >left</mu-flex>
  </mu-flex>
  <mu-flex class="flex-wrapper" justify-content="center">
    <mu-flex class="flex-demo" justify-content="center" >center</mu-flex>
  </mu-flex>
  <mu-flex class="flex-wrapper" justify-content="end">
    <mu-flex class="flex-demo" justify-content="center" >right</mu-flex>
  </mu-flex>
  <mu-flex class="flex-wrapper" align-items="center">
    <mu-flex class="flex-demo" justify-content="center" fill>fill</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" fill>fill</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" fill>fill</mu-flex>
  </mu-flex>
</div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<style>
  .flex-wrapper {
    width: 100%;
    height: 56px;
    margin-top: 8px;
  }
  .flex-demo {
    width: 200px;
    height: 32px;
    background-color: #e0e0e0;
    text-align: center;
    line-height: 32px;
    margin-left: 8px;
  }
  .flex-wrapper:first-child {
    margin-top: 0;
  }
  .flex-demo:first-child {
    margin-left: 0;
  }
</style>
