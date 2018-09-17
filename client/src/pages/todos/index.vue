<template>
  <div></div>
</template>
<script>
export default {
  data () {
    return {
      todos: []
    }
  },
  onShow () {
    this.loadData()
  },
  methods: {
    loadData () {
      const db = wx.cloud.database()
      db.collection('todos').where({
        // name: 'liubin'
      }).get({
        success: res => {
          this.todos = res.data
          console.log(res)
        }
      })
    }
  }
}
</script>
<style>

</style>
