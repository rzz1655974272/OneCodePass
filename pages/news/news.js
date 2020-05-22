// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx.request({
      // url: 'https://api.inews.qq.com/newsqa/v1/query/pubished/daily/list?country=%E4%BC%8A%E6%9C%97&', 
      
      url: 'http://api.tianapi.com/txapi/rumour/index?key=e03827e5463f8d720c696d81546e0b82',

      success (res) {
        console.log(res.data)
        // console.log(JSON.parse(res.data))
        // console.log(JSON.parse(res.data.data).lastUpdateTime)
        self.setData({
          newsList:res.data.newslist
        })
      }
      
    })
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

  }
})