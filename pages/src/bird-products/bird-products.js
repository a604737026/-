// pages/src/bird-products/bird-products.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [
            'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=ca46a4604b4a20a425133495f13bf347/2934349b033b5bb540badc8c32d3d539b600bc57.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565616558887&di=73b29b047d36ac748a8a60d12e2d432c&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F7riaCu17ib1ib861fiagVicqMjyGLVLDk0tQ35jVON1GZia8rABLBsbOibBsoY5C87ASvtnSBiamicCJPwVBqTV1F1DsZXg%2F640%3Fwx_fmt%3Djpeg',

        ],
        aggregate: [{
                img: 'http://img2.madouer.com/aazzmpic/1411/seventeen-14-11/001.jpg',
                book: 'Seventeen',
                time: '2014年10月号',
                introduce: '增刊《女子高生スクールライフSUPER BOOK》中间插页23',
            },
            {
                img: 'http://www.snh0048.com/uploads/allimg/150109/1-15010Z02T4316.jpg',
                book: 'CUTiE',
                time: '2015年2月号',
                introduce: '单独作为封面（宝岛社，1月10日起发售）18',
            },
            {
                img: 'https://bkssl.bdimg.com/static/wiki-lemma/widget/lemma_content/commonModule/magazine/img/magazine-default_11fa36f.png',
                book: 'CUTiE',
                time: '2015年3月号',
                introduce: '（2月10日发售）',
            },
            {
                img: 'https://bkssl.bdimg.com/static/wiki-lemma/widget/lemma_content/commonModule/magazine/img/magazine-default_11fa36f.png',
                book: 'UTB',
                time: '2015年2月23日',
                introduce: '（斋藤飞鸟）',
            },
            {
                img: 'https://bkssl.bdimg.com/static/wiki-lemma/widget/lemma_content/commonModule/magazine/img/magazine-default_11fa36f.png',
                book: 'CUTiE',
                time: '2015年4月号',
                introduce: '（3月12日发售）',
            },
            {
                img: 'https://bkssl.bdimg.com/static/wiki-lemma/widget/lemma_content/commonModule/magazine/img/magazine-default_11fa36f.png',
                book: 'CUTiE',
                time: '2015年5月号',
                introduce: '（4月12日发售）',
            },
            {
                img: 'https://bkssl.bdimg.com/static/wiki-lemma/widget/lemma_content/commonModule/magazine/img/magazine-default_11fa36f.png',
                book: 'CUTiE',
                time: '2015年6月号',
                introduce: '（5月12日发售）',
            },
            {
                img: 'https://bkssl.bdimg.com/static/wiki-lemma/widget/lemma_content/commonModule/magazine/img/magazine-default_11fa36f.png',
                book: 'Audition',
                time: '2015年6月1日',
                introduce: '（斋藤飞鸟、星野）',
            },
        ],
        //所有图片的高度  （必须）
        imgheights: [],
        //图片宽度 
        imgwidth: 750,
        //默认  （必须）
        current: 0
    },
    imageLoad: function(e) { //获取图片真实宽度  
        var imgwidth = e.detail.width,
            imgheight = e.detail.height,
            //宽高比  
            ratio = imgwidth / imgheight;
        console.log(imgwidth, imgheight)
        //计算的高度值  
        var viewHeight = 750 / ratio;
        var imgheight = viewHeight;
        var imgheights = this.data.imgheights;
        //把每一张图片的对应的高度记录到数组里  
        imgheights[e.target.dataset.id] = imgheight;
        this.setData({
            imgheights: imgheights
        })
    },
    bindchange: function(e) {
        // console.log(e.detail.current)
        this.setData({
            current: e.detail.current
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})