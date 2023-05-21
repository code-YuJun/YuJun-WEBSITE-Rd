const model = require("../models/home.js");
// 功能函数
module.exports = {
    async homeData(ctx) {
        // let { user_id, msg } = ctx.request.body;
        let result = await model.checkUser();
        ctx.response.body = [
            {
                id:"001",
                title: "111",
                publishTime: "11111",
                summary:"文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介",
                pic:"https://xiaoyou66.com/medias/featureimages/img98.jpg"
            },
            {
                id:"002",
                title: "222",
                publishTime: "22222",
                summary:"文章简介2文章简介2文章简介2文章简介2文章简介2文章简介2文章简介2文章简介2文章简介2文章简介2",
                pic:"https://xiaoyou66.com/medias/featureimages/img72.jpg"
            }
        ]

    }
}