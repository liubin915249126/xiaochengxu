const { mysql } = require('../qcloud')


async function add (ctx, next){
    const { body } = ctx.request
    const {open_id, uuid, skey, create_time, last_visit_time, session_key, user_info} = body
    await mysql('cTest').insert({open_id, uuid, skey, create_time, last_visit_time, session_key, user_info}).then(res => {
        ctx.state.data = res
    })
    ctx.state.data = body
}

async function query(ctx,next){
    const { body } = ctx.request;
    await mysql('cTest').select("*").then(res=>{
        // ctx.state.data = res
        ctx.body = res
    })
}
async function deleteItem(ctx, next){
    const { body } = ctx.request;
    const {open_id} = body;
    await mysql('cTest').where({open_id}).del().then((res)=>{
        ctx.body = res
    })
} 
async function modifyItem(ctx,next){
    const { body } = ctx.request;
    const {open_id, user_info } = body;
    await mysql('cTest').where({open_id}).modify({user_info}).then((res)=>{
        ctx.body = res
    })
}
async function detail(ctx,next){
    const {open_id } = ctx.query;
    await mysql('cTest').select("*").where({open_id}).then((res)=>{
        ctx.body = res
    })
}
module.exports = {
    add,
    query,
    deleteItem,
    modifyItem,
    detail
}
