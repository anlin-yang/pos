function printReceipt(inputs) {
  var tempInputs = [];
  inputs.forEach(function(val) {
    groupingItem(val, tempInputs);
  });
  printBills(tempInputs);
}

function groupingItem(obj, result) {
  var existItems = result.filter(function(item) {
    return item.barcode === obj.barcode;
  });
  if (existItems.length === 0) {
    obj["count"] = 1;
    result.push(obj);
  } else {
    existItems[0]["count"] += 1;
  }
}

function printBills(inputs) {
  var result = '***<没钱赚商店>收据***\n';
  var sum = 0;
  inputs.forEach(function(val) {
    sum += val.price * val.count;
    result += '名称：' + val.name + '，数量：' + val.count + val.unit + '，单价：' +
      val.price.toFixed(2) + '(元)，小计：' + (val.count * val.price).toFixed(2) + '(元)\n';
  });
  result += '----------------------\n总计：' + sum.toFixed(2) + '(元)\n**********************';
  console.log(result);
}
