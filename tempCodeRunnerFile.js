const orders = [{"price":15,"tax":0.09},{"price":42,"tax":0.07},{"price":56,"tax":0.11},
{"price":80,"tax":0.11},{"price":69,"tax":0.06},{"price":68,"tax":0.14},
{"price":72,"tax":0.14},{"price":51,"tax":0.09},{"price":89,"tax":0.15},
{"price":48,"tax":0.13}];
// Do not edit code above.

/*
  Use a higher order method to get all the order totals after adding in the sales tax. Your answer should be an array of numbers, one total for each order.
*/

let orderTotals = orders.map(function(num){
  return num.price + (num.price * num.tax)
})

console.log(orderTotals)