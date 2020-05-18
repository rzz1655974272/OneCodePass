// pages/getHealthCode/getHealthCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    changeCode:"健康码转换",
    getCodeList:[
      {
        id:0,
        imgSrc:"/icons/A.png",
        title:"申领个人码",
        detail:"面向所有在境，入境个人申请"
      },
      {
        id:1,
        imgSrc:"/icons/gongsi.png",
        title:"申领单位码",
        detail:"仅由各单位，经营场所申请"
      },
      {
        id:2,
        imgSrc:"/icons/cheliang.png",
        title:"申领运营车辆码",
        detail:"仅由各运营车辆经营方申请"
      },
      {
        id:3,
        imgSrc:"/icons/xiaoquxinxi.png",
        title:"申领小区，自然村码",
        detail:"仅由各小区管理，村委会申请"
      }
  ]
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

  }
})