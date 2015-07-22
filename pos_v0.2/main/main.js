function printReceipt(inputs) {
  var resultInputs = [];
  resultInputs = getFilterInputs(inputs, resultInputs);
  resultInputs = mergeInputs(resultInputs);
  printBills(resultInputs);
}

function getFilterInputs(inputs, result) {
  var tempInputs = {};
  inputs.forEach(function(val) {
    tempInputs[val] = tempInputs[val] + 1 || 1;
  });
  for (var item in tempInputs) {
    result.push( {barcode: item, count: tempInputs[item]} );
  }
  return result;
}

function mergeInputs(result) {
  var allItems = loadAllItems();
  result.forEach(function(val) {
    var existItems = allItems.filter(function(item) {
      return item.barcode === val.barcode;
    });
    if (existItems.length !== 0) {
      val["name"] = existItems[0].name;
      val["unit"] = existItems[0].unit;
      val["price"] = existItems[0].price;
    }
  });
  return result;
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
