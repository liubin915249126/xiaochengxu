const { mysql } = require('../qcloud')

module.exports = async (ctx, next) => {
    const { body } = ctx.request
    const {open_id, uuid, skey, create_time, last_visit_time, session_key, user_info} = body
    await mysql('cTest').insert({open_id, uuid, skey, create_time, last_visit_time, session_key, user_info}).then(res => {
        ctx.state.data = res
    })
    ctx.state.data = body
}
