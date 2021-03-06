/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function convertToUSD(price) {
  var usdPrice = price * 1.4;
  var fee = usdPrice * 0.01;
  var total = usdPrice + fee;
  var usdCurrency = '$'+ total.toFixed(2)
  return usdCurrency;
}

function convertToBRL(price) {
  var brlPrice = price * 1.8;
  var fee = brlPrice * 0.01;
  var total = brlPrice + fee;
  var brlCurrency = '$'+ total.toFixed(2)
  return brlCurrency;
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);
