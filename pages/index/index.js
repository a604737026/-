Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://imgsrc.baidu.com/forum/w%3D580/sign=17fa18079c2397ddd679980c6980b216/f692ccc4b74543a9f0e4db2c13178a82bb0114d9.jpg',
      'http://imgsrc.baidu.com/forum/w=580/sign=da16fc1c962f07085f052a08d925b865/2f556a10b912c8fc9e0e189ef4039245d48821c6.jpg',
      'http://imgsrc.baidu.com/forum/w%3D580/sign=cb75c47201f431adbcd243317b34ac0f/cf099e014a90f6030a4fbda73412b31bb251edda.jpg'
    ],

    contentItems: [{
        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3317844560,99590845&fm=27&gp=0.jpg',
        text: '斋藤飞鸟==JK'
      },
      {
        img: 'http://imgsrc.baidu.com/forum/w%3D580/sign=066bb94cbfb7d0a27bc90495fbee760d/8a7739178a82b901e1cf16cd7e8da9773812ef7e.jpg',
        text: '斋藤飞鸟==舒适'
      },
      {
        img: 'http://imgsrc.baidu.com/forum/w%3D580/sign=993be38175f0f736d8fe4c093a54b382/c0bec2dde71190ef44994721c31b9d16fcfa607d.jpg',
        text: '斋藤飞鸟==野外'
      },
      {
        img: 'http://imgsrc.baidu.com/forum/w%3D580/sign=20ca06df9def76c6d0d2fb23ad17fdf6/acaf9f99a9014c08ab11fc5b077b02087af4f4b6.jpg',
        text: '斋藤飞鸟==宜家'
      },

    ],

    listItem: [{
        text: '基本信息',
        image: 'https://hbimg.huabanimg.com/276852d388a8c9927c096c7b341116aaea94c01f45d71-wdbeJu_fw658',
        content: '斋藤飞鸟（さいとう あすか），1998年8月10日出生于东京都，日本女歌手、模特。',
      },
      {
        text: '早年经历',
        image: '../../images/IMG_0870_01.jpg',
        content: '斋藤飞鸟是日缅混血儿，1998年8月10日出生于日本东京都，她在私立学校上小学时看到舞蹈社以AKB48的曲目为伴奏表演，此后产生了对成为偶像（歌手）的向往。',
      },
      {
        text: '演艺经历',
        image: '../../images/IMG_0870_02.jpg',
        content: '2006年4月，八岁的斋藤飞鸟作为儿童演员参演历史剧情电影《樱花乱》，饰演江户时代吉原的一个小侍女；2010年12月，参加东京电视台综艺节目《ピラメキーノ》第22季的《童星恋爱物语》。',
      },
      {
        text: '主要作品',
        image: '../../images/IMG_0871_01.jpg',
        content: '主要作品有《那些年，我们一起追的女孩》,《樱花乱》,《丧尸》,《欺诈偶像》等'
      },
      {
        text: '综艺节目',
        image: '../../images/IMG_0871_02.gif',
        content: '主要有R的法则（第4期）,乃木坂46の「の」,7RULES,乃木坂工事中,	NOGIBINGO!4,のぎ天,乃木坂浪漫等'
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
  onReady: function () {
    wx.playBackgroundAudio({
      dataUrl: 'http://www.170mv.com/kw/sd.sycdn.kuwo.cn/resource/n1/3/66/917631447.mp3',
    })
  }
})