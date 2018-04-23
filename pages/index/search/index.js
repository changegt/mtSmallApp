// pages/index/search/index.js
import {json} from './searchData.js'
console.log(json);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchLists: [],
    scoreArr: [1, 2, 3, 4, 5]
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.search();
  },

  search () {
    var self = this;
    this.http().then( data => {
      self.setData({
        searchLists: data.data.search_poi_list
      });
    });
  },

  http () {
    return new Promise((resolve, reject) => {
      resolve(json);
    })
  }
})