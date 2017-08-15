<<<<<<< HEAD
//Business logic
function Pizza(size, cheese, sauce, meat, veggies, crust) {
  this.pizzaSize = size;
  this.pizzaCheese = cheese;
  this.pizzaSauce = sauce;
  this.pizzaMeat = meat;
  this.pizzaVeggies = veggies;
  this.pizzaCrust = crust;
}

Pizza.prototype.pizzaFinalCost = function(size, cheese, sauce, meat, veggies, crust) {
  var meat = [];
  var veggies = [];
  if (this.size === "small") {
    var sizePrice = 6;
  }
  else if (this.size === "medium") {
    var sizePrice = 10;
  }
  else if (this.size === "large") {
    var sizePrice = 14;
  }
  else if (this.size === "xlarge") {
    var sizePrice = 16;
  }

  if (this.cheese === "extraCheese") {
    var cheesePrice = 3;
  } else {var cheesePrice = 0}

  var meatPrice = $("#meatToppings:input[checked='checked']").length;
  var veggiePrice = $("#veggieToppings:input[checked='checked']").length;
  if (meatPrice + veggiePrice > 7) {
    alert("Mama Mia, that's one loaded pizza! Here at Mama Mia's Pizzeria, we kindly request that you order your pizza with 7 or fewer toppings!")
    location.reload();
  }
  var toppingsPrice = (meatPrice - 1) + (veggiePrice - 1);
  if (toppingsPrice < 0) {
    var toppingsPrice = 0;
  }

  if (this.crust === "cheeseCrust") {
    var crustPrice = 3;
  } else {var crustPrice = 0}

  var pizzaFinalCost = sizePrice + cheesePrice + meatPrice + veggiePrice + crustPrice;
  console.log(sizePrice);
  console.log(cheesePrice);
  console.log(meatPrice);
  console.log(veggiePrice);
  console.log(crustPrice);
  return pizzaFinalCost;
}

//User interface logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var cheese = $("input:radio[name=cheeseAmount]:checked").val();
    var pizza = new Pizza(size);
    var totalCost = pizza.pizzaFinalCost();
    $("#totalCost").text("$" + totalCost + "!");
  });
});
