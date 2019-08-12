// pages/src/bird-my/bird-my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    // 小鸟资料
    fnDataBtn:function(e){
        wx.navigateTo({
            url: '/pages/src/bird-data/bird-data',
        })
    },
    // 早年经历
    earlyBtn:function(e){
        wx.navigateTo({
            url: '/pages/src/bird-early-experience/bird-early-experience',
        })
    },
    // 演艺经历
    performingBtn:function(e){
        wx.navigateTo({
            url: '/pages/src/bird-performing-experience/bird-performing-experience',
        })
    },
    // 主要作品
    majorBtn:function(e){
        wx.navigateTo({
            url: '/pages/src/bird-major-works/bird-major-works',
        })
    },
    // 综艺节目
    varietyBtn:function(e){
        wx.navigateTo({
            url: '/pages/src/bird-variety-show/bird-variety-show',
        })
    },



})