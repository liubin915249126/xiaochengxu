<template>
  <div>
    <div v-for="(item, index) in todos" :key="index">
     {{index+1}}.{{item.name}}
    </div>
    <input type="button" value="add" @click="addItem"/>
  </div>
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
    },
    addItem () {
      const db = wx.cloud.database()
      db.collection('todos').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          descption: '11',
          name: 'len',
          fields: {

          }
        },
        success: function (res) {
          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          console.log(res)
        }
      })
    }
  }
}
</script>
<style>

</style>
