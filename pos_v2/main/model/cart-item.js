var allItems = loadAllItems();

function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
}

CartItem.prototype.getItem = function() {
  if (this._item) { // 缓存技术，第一次没有_item的时候创建一个，如果有了直接返回不用每次创建。
    return this._item;
  } else {
    var that = this;
    var item;
    allItems.forEach(function(val) {
      if (val.barcode === that.barcode) {
        item = val;
      }
    });
    this._item = item;
    return item;
  }
}

CartItem.prototype.getName = function() {
  var item = this.getItem();
  return item.name;
};

CartItem.prototype.getUnit = function() {
  var item = this.getItem();
  return item.unit;
};

CartItem.prototype.getPrice = function() {
  var item = this.getItem();
  return item.price;
};

CartItem.prototype.getSubtotal = function() {
  return this.getPrice() * (this.count - this.getPromotionCount());
};

CartItem.prototype.getTotalPrice = function() {
  return this.getPrice() * this.count;
};

CartItem.prototype.getPromotionCount = function() {
  var promotions = loadPromotions();
  var promotionCount = 0;
  var that = this;

  promotions[0].barcodes.forEach(function(val) {
    if (val === that.barcode) {
      promotionCount = Math.floor(that.count / 3);
    }
  });
  return promotionCount;
};
