var allItems = loadAllItems();

function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
}

CartItem.prototype.getName = function() {
  var tempBarcode = this.barcode;
  var itemName = "";
  allItems.forEach(function(val) {
    if (val.barcode === tempBarcode) {
      itemName = val.name;
    }
  });
  return itemName;
};

CartItem.prototype.getUnit = function() {
  var tempBarcode = this.barcode;
  var itemUnit = "";
  allItems.forEach(function(val) {
    if (val.barcode === tempBarcode) {
      itemUnit = val.unit;
    }
  });
  return itemUnit;
};

CartItem.prototype.getPrice = function() {
  var tempBarcode = this.barcode;
  var itemPrice = 0;
  allItems.forEach(function(val) {
    if (val.barcode === tempBarcode) {
      itemPrice = val.price;
    }
  });
  return itemPrice;
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
  var tempBarcode = this.barcode;
  var tempCount = this.count;
  promotions[0].barcodes.forEach(function(val) {
    if (val === tempBarcode) {
      promotionCount = Math.floor(tempCount / 3);
    }
  });
  return promotionCount;
};
