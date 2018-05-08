<template>
  <div class="len-carousel">
    <div class="carousel-wrap">
      <div v-for="(item,index) in children" :key="index">
        {{parse(item)}}
      </div>
    </div>
    <ul class="carousel-indicators">
      
    </ul>
  </div>
</template>
<script>
// import {deepClone} from '../utils'
import CircularJSON from 'circular-json'
// import Vue from 'vue'
export default {
  data () {
    return {
      children: [],
      cache: []
    }
  },
  methods: {
    json (o) {
      // const that = this
      let cache = []
      JSON.stringify(o, (key, value) => {
        if (typeof value === 'object' && value !== null) {
          // if (Array.isArray(value.children) && value.children.length) {
          //   value.children.forEach((child) => {
          //     if (typeof (child.constructor) === 'function') {
          //       // that.json(child)
          //     }
          //   })
          // }
          if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
            return
          }
          // Store value in our collection
          cache.push(value)
        }
        return value
      })
      cache = null // Enable garbage collection
    },
    parse (item) {
      return item
    }
  },
  created () {
    const $slots = this.$slots.default
    // this.children = $slots.map((slot) => {
    //   return this.json(slot)
    // })
    // this.children = this.json($slots)
    this.children = CircularJSON.stringify($slots)
  }
}
</script>
<style lang="less">
  .len-carousel{
    .carousel-wrap{
      
    }
  }
</style>
