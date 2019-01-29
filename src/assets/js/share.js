    var url = location.href.split('#')[0];
    console.log('测试*********');
    
    // $.ajax({
    //     url: 'http://202.135.136.149:3030/share?url=https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign',
    //     type: 'POST',
    //     dataType: 'json',
    //     //url需要编码传入而且要是完整的url除#之后的
    //     data: {"url":encodeURIComponent(window.location.href.split("#")[0])}
    // })
    // .done(function(res) {
    //     console.log('*****输出*****')
    //     console.log(res);

        wx.config({
            debug: true,
            appId: 'wxcd617566b91bad0e',
            timestamp: "${wx.timestamp}",
            nonceStr: "${wx.noncestr}",
            signature: "${wx.signature}",
            jsApiList: [
            // 所有要调用的 API 都要加到这个列表中
            'checkJsApi',
            'onMenuShareAppMessage',
            ]
        });
        // wx.config({
        //     debug: true, //调试阶段建议开启
        //     appId: res.appId,//APPID
        //     timestamp: res.timestamp,//上面main方法中拿到的时间戳timestamp
        //     nonceStr: res.nonceStr,//上面main方法中拿到的随机数nonceStr
        //     signature: res.signature,//上面main方法中拿到的签名signature
        //     //需要调用的方法接口
        //     jsApiList: [ 'checkJsApi','onMenuShareAppMessage']
        // });
        wx.ready(function (){
        // 在这里调用 API
        // wx.onMenuShareTimeline({
        //     title: 'xxxxxxxxxx', // 分享标题
        //     link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        //     imgUrl: 'xxxxxxxxxxxxxx', // 分享图标
        //     success: function () {
        //         // 用户确认分享后执行的回调函数
        //     },
        //     cancel: function () {
        //         // 用户取消分享后执行的回调函数
        //     }
        // });
            wx.onMenuShareAppMessage({
                title: 'Feekr', // 分享标题
                desc: 'feekr旅行，创造美好生活', // 分享描述
                link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'https://res01.b0.upaiyun.com/logo/feekr_logo.jpg', // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            })
        })

    
