function http(url, payload, method) {
  return new Promise((resolve) => {
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: {...payload},
      method: method || 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        resolve(res.data)
      }
    })
  })
}

module.exports = http;