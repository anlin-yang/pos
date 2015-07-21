function final_console(inputs) {
    var result = '***<没钱赚商店>收据***\n';
    var sum = 0;
    for(var i = 0; i < inputs.length; i++){
        sum += inputs[i].price * inputs[i].count;
        result += '名称：' + inputs[i].name + '，数量：' + inputs[i].count + inputs[i].unit + '，单价：'+
        inputs[i].price.toFixed(2) + '(元)，小计：' +   (inputs[i].count*inputs[i].price).toFixed(2) +'(元)\n';

    }
    result += '----------------------\n总计：' + sum.toFixed(2) + '(元)\n**********************';
    console.log(result);
}

function same_inputs(inputs) {
  var inputs_count = {};
  var result = [];
  for ( var i = 0; i < inputs.length; i++) {
    inputs_count[inputs[i]] = inputs_count[inputs[i]] + 1 || 1;
  }

  for (var val in inputs_count) {
    result.push({barcode: val, count: inputs_count[val]});
  }
  return result;
}

function printReceipt(inputs) {
  var inputs_count = same_inputs(inputs);
  var all_item = loadAllItems();
  var car_item = all_item.filter(function(val){
    for (var i = 0; i < inputs_count.length; i++) {
      if (inputs_count[i].barcode === val.barcode) {
        return true;
      }
    }
  });

  for (var i = 0; i < car_item.length; i++) {
    car_item[i].count = inputs_count[i].count;
  }
  final_console(car_item);
}
