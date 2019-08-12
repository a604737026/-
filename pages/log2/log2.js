// pages/shoppingCart/shoppingCart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        selection: false,
        shopcart: [{
                shopname: '爱名表腕表专营店',
                goods: [{
                        id: 0,
                        images: 'http://i1.fuimg.com/694067/3770d54add0fc55d.png',
                        title: '劳力士-蚝式恒动系列 116234-G -63600 黑石 男士机械表',
                        option: '表带',
                        optiontext: '真皮',
                        price: '78000',
                        oldprice: '80000'
                    },
                    {
                        id: 1,
                        images: 'http://i1.fuimg.com/694067/3770d54add0fc55d.png',
                        title: '劳力士-蚝式恒动系列 116234-G -63600',
                        option: '表带',
                        optiontext: '仿皮',
                        price: '78110',
                        oldprice: '80000'
                    }
                ]
            },

            // {
            //     shopname: '腕表专营店',
            //     goods: [{
            //         id: 0,
            //         images: 'http://i1.fuimg.com/694067/3770d54add0fc55d.png',
            //         title: '劳力士-蚝式恒动系列 116234-G -63600 黑石 男士机械表',
            //         option: '表带',
            //         optiontext: '真皮',
            //         price: '78000',
            //         oldprice: '80000'
            //     }]
            // }
        ],
        shopcart: [{
            shopname: '爱名表腕表专营店',
            goods: [{
                    id: 0,
                    images: 'http://i1.fuimg.com/694067/3770d54add0fc55d.png',
                    title: '劳力士-蚝式恒动系列 116234-G -63600 黑石 男士机械表',
                    option: '表带',
                    optiontext: '真皮',
                    price: '78000',
                    oldprice: '80000'
                },
                {
                    id: 1,
                    images: 'http://i1.fuimg.com/694067/3770d54add0fc55d.png',
                    title: '劳力士-蚝式恒动系列 116234-G -63600',
                    option: '表带',
                    optiontext: '仿皮',
                    price: '78110',
                    oldprice: '80000'
                }
            ]
        }, '', ''],
        brand: [],
    },
    allstores: function(e) {
        // console.log(e);
        var index = e.currentTarget.dataset.index;
        console.log(index)
        var selection = this.data.selection;
        if (index) {
            this.setData({
                selection: !selection
            });
            // console.log(index)
        }
        console.log(selection)

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        wx.request({
            url: 'http://api.imbiao.com/api',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
                'content-type': 'application/json' // 设置请求的 header
            },
            success: function(res) {
                console.log(res.data.result);
                var brands = res.data.result.brand;
                if (res.data.result) {
                    that.setData({
                        brands: res.data.result.brand,
                    })
                }
                console.log(brands)
            },
            fail: function(res) {
                // fail
            },
        })
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