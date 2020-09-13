//index.js
const app = getApp();
const api = require('./../../services/api');

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  onLoad: function() {
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        const latitude = res.latitude;
        const longitude = res.longitude;
        const params = `${longitude},${latitude}`;
          api.getUserLocation(params).then((res) => {
          if(res.status === '1'){
            console.log('asdasd123')
            console.log(res.regeocode.addressComponent)
            const {adcode,province,city,district} =  res.regeocode.addressComponent;
            const cityCode = adcode;
            api.getWeather(cityCode).then((res) => {
              console.log(res)
            })
          }
        });
      }
     })
  },
})
