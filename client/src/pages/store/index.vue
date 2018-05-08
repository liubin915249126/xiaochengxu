<template>
  <div>
       <span style="color:#ff0000;"><web-view :src="url"></web-view></span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      url: ''
    }
  },
  onShow () {
    const {$mp: {query: { url }}} = this
    this.url = url
  }
}
</script>
<style>

</style>