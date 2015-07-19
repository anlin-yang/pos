function printReceipt(inputs) {
    var result = '***<没钱赚商店>收据***\n';
    var sum = 0;

    for(var i = 0; i < inputs.length; i=i+count){   
	var count = 0;
	for(var j = 0; j < inputs.length; j++) {
	    if(inputs[i].name == inputs[j].name) {
	      count++;
	    }
	  }
	sum += inputs[i].price * count;
        result += '名称：' + inputs[i].name + '，数量：' + count + inputs[i].unit + '，单价：'+ 
        inputs[i].price.toFixed(2) + '(元)，小计：' +   (count*inputs[i].price).toFixed(2) +'(元)\n';

    }
    result += '----------------------\n总计：' + sum.toFixed(2) + '(元)\n**********************';
    console.log(result);
}

