function addPriceToArray(string,prices){
  var price = Number(string);
  prices.push(price);
}

function calcSubtotal(prices){
  var sub = prices.reduce(function(a,b){
    return a+b;
  })
  return sub.toFixed(2);
}

function calcTax(subtotal){
  subtotal = Number(subtotal);
  return (subtotal*0.029).toFixed(2);
}

function calcTotal(subtotal,tax){
  var subNum = Number(subtotal);
  var taxNum = Number(tax);
  var total = subNum + taxNum;
  return total.toFixed(2);
}
