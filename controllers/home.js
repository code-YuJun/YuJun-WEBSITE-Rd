// const model = require("../models/home.js");
// 功能函数
module.exports = {
    async homeData(ctx) {
        // let { user_id, msg } = ctx.request.body;
        // let result = await model.checkUser(user_id, msg);
        ctx.response.body = {
            name: "zhangsan"
        };
    }
}