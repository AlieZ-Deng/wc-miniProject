const http = require('./http');


// 获取用户位置信息
function getUserLocation(a) {
  const res =  http(
    'https://restapi.amap.com/v3/geocode/regeo?parameters',
    {
      location: a,
      key: 'df317e32c6e66f6f26ea7ab236042d3a'
    },
    );
    return res;
};

// 获取当前城市天气情况
function getWeather(a) {
  const res =  http(
    'https://restapi.amap.com/v3/weather/weatherInfo',
    {
      city: a,
      key: 'df317e32c6e66f6f26ea7ab236042d3a',
      extensions: 'all'
    },
    );
    return res;
}

module.exports = {
  getUserLocation,
  getWeather
}