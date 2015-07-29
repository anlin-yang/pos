var DateTime = (function() { // 无属性的类，只有方法，就可以直接写成对象类，key为方法名，value为方法的实现。
  function DateTime() {};

  var dateDigitToString = function(num) { // 此处用自执行函数来实现类私有方法的封装，否则的话此处是全局函数，不安全。
    return num < 10 ? '0' + num : num;
  };

  DateTime.prototype.getFormattedDate = function() { // DateTime[getFormattedDate] = function(){} 等价
    var currentDate = new Date(),
      year = dateDigitToString(currentDate.getFullYear()),
      month = dateDigitToString(currentDate.getMonth() + 1),
      date = dateDigitToString(currentDate.getDate()),
      hour = dateDigitToString(currentDate.getHours()),
      minute = dateDigitToString(currentDate.getMinutes()),
      second = dateDigitToString(currentDate.getSeconds()),
      formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
    return formattedDateString;
  };

  return DateTime;
})();
