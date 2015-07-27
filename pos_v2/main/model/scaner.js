function Scaner() {} // 此处也为空属性的类，但为其扩展性考虑，还是不要写成静态对象的方法，不像DateTime可以改为静态对象的方式。

Scaner.prototype.scan = function(inputs, cart) {
  inputs.forEach(function(val) {
    var barcode = val.split('-')[0];
    var count = val.split('-')[1] || 1;
    cart.addItem(barcode, count);
  });
};
