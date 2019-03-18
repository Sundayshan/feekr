
{/* <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.4.0.js"></script> */}
// import wechatJDK from "http://res.wx.qq.com/open/js/jweixin-1.4.0.js";
// var wx = require('weixin-js-sdk');
import request from '../service/request'

 export  async function getWechatDatas(params) {
        const weChatData = () => request.post("WeChatShare","GetWXShareInfo",{
        "currentPageUrl":params
    });
    // console.log(window.gob.wechatSharePicUrl);
    //test
        const result = await weChatData();
        if(result.isSuccess){
            let { appID, timestamp, nonceStr, signature } = result.value
            // console.log(appID, timestamp, nonceStr, signature);
            let sign = signature.toLowerCase()
            var wx = require('weixin-js-sdk');
            // console.log(wx);
            
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: appID,
                timestamp: timestamp,
                nonceStr: nonceStr,
                signature: sign,
                jsApiList: [
                // 'checkJsApi',
                // "updateAppMessageShareData",
                // "updateTimelineShareData",
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                "onMenuShareQQ",
                "onMenuShareWeibo",
                "onMenuShareQZone",
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
    
    
            wx.ready(function () {
    
                // wx.checkJsApi({
                //     jsApiList: ['onMenuShareTimeline ', 'onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        
                //     success: function (res) {
                //         console.log(res+"checkJsapi");
                        
                //     }
                //     //     if (data.indexOf('false') > 0) {
                //     //     ErroCode=1;
                //     //     // <%if(ViewData["JS_SDK_Tips"]!=null){ %>
                //     //     //     alert("由于您的微信版本太低,不能自定义分享内容，请升级到最新版本");
                //     //     //     <%} %>
                //     //     // }
                //     //     console.log(123);
                        
                //     // }
                //     // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                // });
                // wx.updateAppMessageShareData({
                //     title: '九江银行多一天惊喜活动', // 分享标题
                //     desc: '多一天惊喜”积分活动是九江银行推出的回馈个人客户的营销活动。凡九江银行自贸区支行个人客户，均可根据相应规则累积乐驼商城的九银积分，累积的九银积分可在乐驼网九银商城中兑换礼品。', // 分享描述
                //     link: `${window.gob.wechatSharePicUrl}/#/ActIntroduction`, // 分享链接
                //     imgUrl:  `${window.gob.wechatSharePicUrl}/static/jiujiang.jpg`, // 分享图标
                //     success: function () {
                //         // 用户确认分享后执行的回调函数
                //         console.log("调用成功133");
                //     },
                //     cancel: function () {
                //         // 用户取消分享后执行的回调函数
                //     }
                // });
                // wx.updateTimelineShareData({
                //     title: '九江银行多一天惊喜活动', // 分享标题
                //     desc: '多一天惊喜”积分活动是九江银行推出的回馈个人客户的营销活动。凡九江银行自贸区支行个人客户，均可根据相应规则累积乐驼商城的九银积分，累积的九银积分可在乐驼网九银商城中兑换礼品。', // 分享描述
                //     link: `${window.gob.wechatSharePicUrl}/#/ActIntroduction`, // 分享链接
                //     imgUrl:  `${window.gob.wechatSharePicUrl}/static/jiujiang.jpg`, // 分享图标
                //     success: function () {
                //         // 用户确认分享后执行的回调函数
                //         console.log("调用成功133");
                //     },
                //     cancel: function () {
                //         // 用户取消分享后执行的回调函数
                //     }
                // });
                wx.onMenuShareTimeline({
                    title: '九江银行多一天惊喜活动', // 分享标题
                    desc: '“多一天惊喜”积分活动是九江银行推出的回馈个人客户的营销活动。凡九江银行自贸区支行个人客户，均可根据相应规则累积乐驼商城的九银积分，累积的九银积分可在乐驼网九银商城中兑换礼品。', // 分享描述
                    link: `${window.gob.wechatSharePicUrl}/#/ActIntroduction`, // 分享链接
                    imgUrl:  `${window.gob.wechatSharePicUrl}/static/jiujiang.jpg`, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        console.log("调用成功1");
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        console.log("该浏览器不支持");
                        
                    }
                });
                wx.onMenuShareAppMessage({
                    title: '九江银行多一天惊喜活动', // 分享标题
                    desc: '“多一天惊喜”积分活动是九江银行推出的回馈个人客户的营销活动。凡九江银行自贸区支行个人客户，均可根据相应规则累积乐驼商城的九银积分，累积的九银积分可在乐驼网九银商城中兑换礼品。', // 分享描述
                    link: `${window.gob.wechatSharePicUrl}/#/ActIntroduction`, // 分享链接
                    imgUrl:  `${window.gob.wechatSharePicUrl}/static/jiujiang.jpg`, // 分享图标
                    type: 'link', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        console.log("调用成功2");
                        
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        console.log("fail");
                        
                    }
                });
                wx.onMenuShareQQ({
                    title: '九江银行多一天惊喜活动', // 分享标题
                    desc: '多一天惊喜”积分活动是九江银行推出的回馈个人客户的营销活动。凡九江银行自贸区支行个人客户，均可根据相应规则累积乐驼商城的九银积分，累积的九银积分可在乐驼网九银商城中兑换礼品。', // 分享描述
                    link: `${window.gob.wechatSharePicUrl}/#/ActIntroduction`, // 分享链接
                    imgUrl:  `${window.gob.wechatSharePicUrl}/static/jiujiang.jpg`, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        console.log("调用成功133");
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareWeibo({
                    title: '九江银行多一天惊喜活动', // 分享标题
                    desc: '多一天惊喜”积分活动是九江银行推出的回馈个人客户的营销活动。凡九江银行自贸区支行个人客户，均可根据相应规则累积乐驼商城的九银积分，累积的九银积分可在乐驼网九银商城中兑换礼品。', // 分享描述
                    link: `${window.gob.wechatSharePicUrl}/#/ActIntroduction`, // 分享链接
                    imgUrl:  `${window.gob.wechatSharePicUrl}/static/jiujiang.jpg`, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        console.log("调用成功133");
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareQZone({
                    title: '九江银行多一天惊喜活动', // 分享标题
                    desc: '多一天惊喜”积分活动是九江银行推出的回馈个人客户的营销活动。凡九江银行自贸区支行个人客户，均可根据相应规则累积乐驼商城的九银积分，累积的九银积分可在乐驼网九银商城中兑换礼品。', // 分享描述
                    link: `${window.gob.wechatSharePicUrl}/#/ActIntroduction`, // 分享链接
                    imgUrl:  `${window.gob.wechatSharePicUrl}/static/jiujiang.jpg`, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        console.log("调用成功133");
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
        
            });
            wx.error(function (res) {
                alert(res.errMsg);
            });

        }else{
            alert("请求微信接口失败")
        }
        
        
    }

export function wechatShare() {

}

    // export default wechatShare;
    