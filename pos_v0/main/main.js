function printReceipt(inputs) {
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
