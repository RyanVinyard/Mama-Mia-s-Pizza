// //Business logic
// function Pizza(size, cheese, sauce, meat, veggies, crust) {
//   this.size = size;
//   this.cheese = cheese;
//   this.sauce = sauce;
//   this.meat = meat;
//   this.veggies = veggies;
//   this.crust = crust;
// }
//
// Pizza.prototype.calculateTotal = function() {
//
//   if (this.size === "small") {
//     var sizePrice = 6;
//   }
//   else if (this.size === "medium") {
//     var sizePrice = 10;
//   }
//   else if (this.size === "large") {
//     var sizePrice = 14;
//   }
//   else if (this.size === "xlarge") {
//     var sizePrice = 16;
//   }
//
//   if (this.cheese === "extraCheese") {
//     var cheesePrice = 3;
//   }
//
//   console.log(this.meat);
//   var meatPrice = 0;
//   for (var i=0; i<this.meat.length; i++) {
//     var meatPrice = 1;
//   }
//
//   if (meatPrice === 1) {
//     var meatPrice = 0;
//   }
//
//   var veggiePrice = 0;
//   for (var i=0; i<this.veggies.length; i++) {
//     var veggiePrice = 1;
//   }
//
//   if (veggiePrice === 1) {
//     var veggiePrice = 0;
//   }
//
//   if (this.crust === "cheeseCrust") {
//     var cheesePrice = 3;
//   }
//
//   this.price = sizePrice + cheesePrice + meatPrice + veggiePrice;
// }
//
// var displayReceipt = function() {
//   $('#receipt').html(this.size + " pizza" + "<br>" + this.crust + "<br>" + "");
// }
//
//
// //Front end logic
// $(document).ready(function() {
//   $("form#pizzaForm").submit(function(event) {
//     event.preventDefault();
//
//     var size = $("input:radio[name=size]:checked").val();
//     var cheese = $("input:radio[name=cheeseAmount]:checked").val();
//     var crust = $("input:radio[name=typeOfCrust]:checked").val();
//     var meat = [];
//     meat.push(("input:checkbox[name=meat]:checked").val());
//     var veggies = [];
//     veggies.push(("input:checkbox[name=veggies]:checked").val());
//     var newPizza = new Pizza(size, cheese, meat, veggies, crust);
//     newPizza.calculateTotal();
//
//     $("#totalCost").text("$" + totalCost + "!");
//   });
// });

function buildOrder() {
  var text1 = "";
  var text2 = "";
  var pizzaCost = 0;
  var sizePrice = 0;
  var size = $('input[name=size]:checked').val();
  var text1 = text1 + size + "<br>"
  // for (var i=0; i<sizeArray.length; i++) {
  //   if (sizeArray[i].checked) {
  //     var selectedSize = sizeArray[i].value;
  //     var text1 = text1 + selectedSize + "<br>"
  //   }
  // }
  if (size === "small") {
    var sizePrice = 6;
    var text2 = text2 + sizePrice + "<br>";
  } else if (size === "medium") {
    var sizePrice = 10;
    var text2 = text2 + sizePrice + "<br>";
  } else if (size === "large") {
    var sizePrice = 14;
    var text2 = text2 + sizePrice + "<br>";
  } else if (size === "xlarge") {
    var sizePrice = 16;
    var text2 = text2 + sizePrice + "<br>";
  }
  var pizzaCost = sizePrice;
  getMeat(pizzaCost, text1, text2);

};

function getMeat(pizzaCost, text1, text2) {
  var pizzaCost = pizzaCost;
  var meatPrice = 0;
  var meatToppings = [];
  var meatToppingsArray = document.getElementsByClassName("meat");
  console.log(meatToppingsArray);
  for (var i=0; i<meatToppingsArray.length; i++) {
    if (meatToppingsArray[i].checked) {
      meatToppings.push(meatToppingsArray[i].value);
    }
  }
  var  meatToppingsAmount = meatToppings.length;
  if (meatToppingsAmount>1) {
    var meatPrice = meatToppingsAmount - 1;
  } else {
    meatPrice = 0;
  }
  var pizzaCost = pizzaCost + meatPrice;
  for (var i=0; i<meatToppings.length; i++) {
    console.log(meatToppings[i]);
    var text1 = text1 + meatToppings[i] + "<br>";
    if (meatToppingsAmount <= 1) {
      var text2 = text2 + 0 + "<br>";
      var meatToppingsAmount = meatToppingsAmount - 1;
    } else if (meatToppingsAmount == 2) {
      var text2 = text2 + 1 + "<br>";
      var meatToppingsAmount = meatToppingsAmount - 1;
    } else {
      var text2 = text2 + 1 + "<br>";
      var meatToppingsAmount = meatToppingsAmount - 1;
    }
  }
  getVeggie(pizzaCost, text1, text2);
};


function getVeggie(pizzaCost, text1, text2) {
  var pizzaCost = pizzaCost;
  var veggiePrice = 0;
  var veggieToppings = [];
  var veggieToppingsArray = document.getElementsByClassName("veggies");
  for (var i=0; i<veggieToppingsArray.length; i++) {
    if (veggieToppingsArray[i].checked) {
      veggieToppings.push(veggieToppingsArray[i].value);
    }
  }

  var  veggieToppingsAmount= veggieToppings.length;
  if (veggieToppingsAmount>1) {
    var veggiePrice = veggieToppingsAmount - 1;
  } else {
    veggiePrice = 0;
  }
  var pizzaCost = pizzaCost + veggiePrice;
  for (var i=0; i<veggieToppings.length; i++) {
    var text1 = text1 + veggieToppings[i] + "<br>";
    if (veggieToppingsAmount <= 1) {
      var text2 = text2 + 0 + "<br>";
      var veggieToppingsAmount = veggieToppingsAmount - 1;
    } else if (veggieToppingsAmount == 2) {
      var text2 = text2 + 1 + "<br>";
      var veggieToppingsAmount = veggieToppingsAmount - 1;
    } else {
      var text2 = text2 + 1 + "<br>";
      var veggieToppingsAmount = veggieToppingsAmount - 1;
    }
  }
  getCheese(pizzaCost, text1, text2);
  };

  function getCheese(pizzaCost, text1, text2) {
    var cheese = $('input[name=cheeseAmount]:checked').val();
    var cheesePrice = 0;
    if (cheese === "extraCheese") {
      var cheesePrice = 3
    }
    var text2 = text2 + cheesePrice + "<br>";
    var text1 = text1 + cheese + "<br>";
    var pizzaCost = (pizzaCost + cheesePrice);
    getSauce(pizzaCost, text1, text2);

  };

  function getSauce(pizzaCost, text1, text2) {
    var sauce = $('input[name=sauce]:checked').val();
    console.log(sauce);
    var text2 = text2 + 0 + "<br>";
    getCrust(pizzaCost, text1, text2)
  };

  function getCrust(pizzaCost, text1, text2) {
    var crust = $('input[name=typeOfCrust]:checked').val();
    console.log(crust);
    var crustPrice = 0;
    if (crust === "cheeseCrust") {
      var crustPrice = 3;
    }
    var pizzaCost = (pizzaCost + crustPrice);
    var text2 = text2 + crustPrice + "<br>";
    document.getElementById("receipt").style.display="block";
    document.getElementById("showText1").innerHTML=text1;
    document.getElementById("showText2").innerHTML=text2;
    document.getElementById("totalPrice2").innerHTML = "</h3>$" + pizzaCost + ".00" + "</h3>"
  }

  function clearOrder() {
    var clearBoolean = confirm("Mama Mia, are you sure you want to clear this order?");
    if (clearBoolean == true) {
    document.getElementById("pizzaForm").reset();
    document.getElementById("receipt").style.display="none";
    location.reload();
  }
  };

  $(document).ready(function() {
    $("form#pizzaForm").submit(function(event) {
      event.preventDefault();
      buildOrder();
    });
  });
