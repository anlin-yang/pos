function Cart() {
  this.cartItems = [];
}

Cart.prototype.addItem = function(barcode, count) {
  var cartItem = new CartItem(barcode, count);
  this.cartItems.push(cartItem);
};

Cart.prototype.getSubtotalPrice = function() {
  var allSubtotalPrice = 0;
  this.cartItems.forEach(function(val) {
    allSubtotalPrice += val.getSubtotal();
  });
  return allSubtotalPrice;
};

Cart.prototype.getSaving = function() {
  var allTotalPrice = 0;
  this.cartItems.forEach(function(val) {
    allTotalPrice += val.getTotalPrice();
  });
  return allTotalPrice - this.getSubtotalPrice();
};
