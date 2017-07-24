function Pizza(size, toppings, cheese, crust) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaCheese = cheese;
  this.pizzaCrust = crust;
}

Pizza.prototype.pizzaFinalCost = function(size, toppings, cheese, crust) {
  var pizzaFinalCost = 0;
  var toppings = [];
  var cheese = 0;
  var crust = 0;
  if (this.pizzaSize === "Personal Pie-zano!") {
    var pizzaFinalCost = pizzaFinalCost + 6;
  } else if (this.pizzaSize === "Medium!") {
    var pizzaFinalCost = pizzaFinalCost + 10;
  } else if (this.pizzaSize === "Large!") {
    var pizzaFinalCost = pizzaFinalCost + 14;
  } else if (this.pizzaSize === "Super Mama Large!") {
    var pizzaFinalCost = pizzaFinalCost + 16;
  } else {alert:("Uh oh, something went wrong")}

  if (this.cheeseAmount = "Lotsa Cheese!") {
    var cheese = 3;
  } else {
    var cheese = 0;
  }

  if (this.typeOfCrust = "Cheesey Crust") {
    var crust = 3;
  } else {
    var crust = 0;
  }

  var toppings = (document.querySelectorAll('input[type="checkbox"]:checked').length);
  if (toppings > 6) {
    alert("Mama Mia you little garbanzo bean! You've got too many toppings! Pick 6 or less or the entire pie will be compromised, piazano!");
    location.reload();
  }
  var toppingsCost = toppings - 1
  var pizzaFinalCost = pizzaFinalCost + toppings + cheese + crust;
  }

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").valu();
    var pizza = new Pizza(size);
    var totalCost = pizza.pizzaFinalCost();
    $("#totalCost").text("$" + totalCost + "!");
  });
});
