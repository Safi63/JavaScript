var unitprice=20;
var totalitems=5;
var tax=17;
totalprice =unitprice*totalitems;
totaltax =(totalprice*tax)/100;
payment =totalprice+totaltax;
console.log("payment is" + " " + payment)