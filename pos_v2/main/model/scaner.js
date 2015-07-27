function Scaner() {} // 此处也为空属性的类，但为其扩展性考虑，还是不要写成静态对象的方法，不像DateTime可以改为静态对象的方式。

Scaner.prototype.scan = function(inputs) {
  var barcode = inputs.split('-')[0];
  var count = inputs.split('-')[1] || 1;
  return {
    barcode, count
  };
};
