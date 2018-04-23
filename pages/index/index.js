//index.js
//获取应用实例
const app = getApp()
const data = require('./nearbyData.js')

Page({
  data: {
    navLists1: [
        {
            title: '美食',
            src: 'https://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png',
            url: '1'
        },
        {
            title: '美团超市',
            src: 'https://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png',
            url: '2'
        },
        {
            title: '生鲜果蔬',
            src: 'https://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png',
            url: '3'
        },
        {
            title: '美团专送',
            src: 'https://p1.meituan.net/jungle/da9181f93dd2e11c5d74cf685470408f10016.png',
            url: '4'
        },
    ],
    navLists2: [
        {
            title: '快食简餐',
            src: 'https://p1.meituan.net/jungle/83bfbcf07221cb1ccbcd9114e81ec7ac9209.png',
            url: '1'
        },
        {
            title: '下午茶',
            src: 'https://p1.meituan.net/jungle/a2a306c5467aba7fac8d7410d161f8db9364.png',
            url: '2'
        },
        {
            title: '汉堡披萨',
            src: 'https://p0.meituan.net/jungle/58b60a312cf86f3a3afc4c96ff0e53438774.png',
            url: '3'
        },
        {
            title: '家常菜',
            src: 'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',
            url: '4'
        },
    ],
    nearbyLists: []
  },
  onLoad () {
    var self = this;
    self.http().then(lists => {
        self.setData({
            nearbyLists: lists
        })
    });

    // self.autoJump();
  },

  jump () {

  },

  //下载
  download () {
    console.log('download')
  },

  http () {
      return new Promise((resolve, reject) => {
          var returnData = data.data.data.poilist;
          resolve(returnData);
      });
  },

  http1 () {
      wx.request({
          url: '',
          success (json) {
            
          },
          complete () {
              
          }
      })
  },

  toSearchPage() {
    wx.navigateTo({
      url: './search/index',
    })

  },

  locationReset (e) {
    wx.navigateTo({
      url: './location/index',
    })

  },

  autoJump () {
    wx.navigateTo({
      url: './search/index',
    })
  }
})
