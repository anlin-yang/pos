function printReceipt(inputs) {
  var cartInputs = [];
  cartInputs = getSumInputs(inputs, cartInputs);
  cartInputs = mergeInputs(cartInputs);
  cartInputs = promoteProcess(cartInputs);
  printBills(cartInputs);
}

function promoteProcess(result) {
  var promotions = loadPromotions();

  result.forEach(function(val) {
    if (promotions[0].barcodes.indexOf(val.barcode) !== -1) {
      val.promotionCount = parseInt(val.count / 3);
      val.realSubtotal = val.subtotal - (val.price * val.promotionCount);
    }
  });

  return result;
}

function objectify(str) {
  var count = 1;

  if (/[\-]/.test(str)) {
    count = parseInt(str.slice(str.indexOf("-") + 1));
  }
  return {
    barcode: str.slice(0, 10),
    count: count
  }
}

function groupingItem(obj, result) {
  var existItems = result.filter(function(item) {
    return item.barcode === obj.barcode;
  });
  if (existItems.length === 0) {
    result.push(obj);
  } else {
    existItems[0]["count"] += obj.count;
  }
}

function getSumInputs(inputs, result) {
  var tempInputs = inputs.map(function(val) {
    return objectify(val);
  }).forEach(function(item) {
    groupingItem(item, result);
  });

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
      val["subtotal"] = val.count * existItems[0].price;
      val["realSubtotal"] = val.count * existItems[0].price;
      val["promotionCount"] = 0;
    }
  });
  
  return result;
}

function printBills(inputs) {
  var result = '***<没钱赚商店>收据***\n';
  var realSumPrice = 0;
  var SumPrice = 0;
  inputs.forEach(function(val) {
    SumPrice += val.subtotal;
    realSumPrice += val.realSubtotal;
    result += '名称：' + val.name + '，数量：' + val.count + val.unit + '，单价：' +
      val.price.toFixed(2) + '(元)，小计：' + val.realSubtotal.toFixed(2) + '(元)\n';
  });
  result += '----------------------\n挥泪赠送商品：\n';
  inputs.forEach(function(item) {
    if (item.promotionCount > 0) {
      result += '名称：' + item.name + '，数量：' + item.promotionCount + item.unit + '\n';
    }
  });
  result += '----------------------\n' +
    '总计：' + realSumPrice.toFixed(2) + '(元)\n' +
    '节省：' + (SumPrice - realSumPrice).toFixed(2) + '(元)\n' +
    '**********************';
  console.log(result);
}
