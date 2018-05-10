const { mysql } = require('../qcloud')

module.exports = async (ctx, next) => {
    await mysql('cAppinfo').select('*').where({appid: 'wxa4009c486c34679e'}).then(res => {
        ctx.state.data = res
    })
    // await next()
    // mysql('cSessionInfo').select('*').where({uuid: '11'}).then(res => {
    //     ctx.state.data = res
    // })
}
