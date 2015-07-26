function Scaner() {}

Scaner.prototype.scan = function(inputs, cart) {
  var result = {};

  inputs.forEach(function(val) {
    var count = 1;
    var barcode = val;
    if (/[\-]/.test(val)) {
      count = parseInt(val.slice(val.indexOf('-') + 1));
      barcode = val.slice(0, val.indexOf('-'));
    }
    result[barcode] = (result[barcode] + count) || count;
  });

  for (var item in result) {
    cart.addItem(item, result[item]);
  }
};
