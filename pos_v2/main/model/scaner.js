function Scaner() {} // 此处也为空属性的类，但为其扩展性考虑，还是不要写成静态对象的方法，不像DateTime可以改为静态对象的方式。

Scaner.prototype.scan = function(inputs, cart) {
  inputs.forEach(function(val) {
    var count = 1;
    var barcode = val;
    if (/[\-]/.test(val)) {
      count = parseInt(val.slice(val.indexOf('-') + 1));
      barcode = val.slice(0, val.indexOf('-'));
    }
    cart.addItem(barcode, count);
  });
};
