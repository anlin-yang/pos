function Pos() {}

Pos.prototype.printBills = function(cart) {
  var billInputs = cart.cartItems;
  var date = new DateTime();
  var result = '***<没钱赚商店>收据***\n';
     result += '打印时间：' + date.getFormattedDate();
     result += '\n----------------------\n';
  billInputs.forEach(function(val) {
    result += '名称：' + val.getName() + '，' +
              '数量：' + val.count + val.getUnit() + '，' +
              '单价：' + val.getPrice().toFixed(2) + '(元)，' +
              '小计：' + val.getSubtotal().toFixed(2) + '(元)\n';
  });
     result += '----------------------\n';
     result += '挥泪赠送商品：\n';
  billInputs.forEach(function(item) {
    if (item.getSubtotal() !== item.getTotalPrice()) {
      result += '名称：' + item.getName() + '，' +
                '数量：' + item.getPromotionCount() + item.getUnit() + '\n';
    }
  });
  result += '----------------------\n' +
    '总计：' + cart.getSubtotalPrice().toFixed(2) + '(元)\n' +
    '节省：' + cart.getSaving().toFixed(2) + '(元)\n' +
    '**********************';
  console.log(result);
}
