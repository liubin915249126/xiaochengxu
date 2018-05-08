<template>
  <div>
    <input type="button" value="request" @click="request"/> 
  </div>
</template>
<script>
import request from '../../../utils/request'
import config from '../../../config/config'
export default {
  data () {
    return {

    }
  },
  methods: {
    async request () {
      try {
        const res = await request.get(config.login)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style>

</style>
