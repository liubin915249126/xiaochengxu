const { mysql } = require('../qcloud')

module.exports = ctx => {
    mysql('cAppinfo').select('*').where({appid: 'wxa4009c486c34679e'}).then(res => {
        ctx.state.data = res
    })
    // mysql('cSessionInfo').select('*').where({uuid: '11'}).then(res => {
    //     ctx.state.data = res
    // })
}
