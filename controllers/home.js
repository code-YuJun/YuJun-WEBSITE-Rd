const model = require("../models/home.js");
// 功能函数
module.exports = {
    async homeData(ctx) {
        // let { user_id, msg } = ctx.request.body;
        let result = await model.checkUser();
        ctx.response.body = [
            {
                articleName: "111",
                time: "11111",
                pic:"https://xiaoyou66.com/medias/featureimages/img98.jpg"
            },
            {
                articleName: "222",
                time: "22222",
                pic:"https://xiaoyou66.com/medias/featureimages/img72.jpg"
            }
        ]

    }
}