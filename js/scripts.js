function buildOrder() {
  var text1 = "";
  var pizzaCost = 0;
  var sizePrice = 0;
  var size = $('input[name=size]:checked').val();
  var text1 = text1 + size + " Pizza:" + "<br>"
  if (size === "Small") {
    var sizePrice = 6;
    var text1 = text1 + "Base Price: $" + sizePrice + "<br><br>";
  } else if (size === "Medium") {
    var sizePrice = 10;
    var text1 = text1 + "Base Price: $" + sizePrice + "<br><br>";
  } else if (size === "Large") {
    var sizePrice = 14;
    var text1 = text1 + "Base Price: $" + sizePrice + "<br><br>";
  } else if (size === "Extra Large") {
    var sizePrice = 16;
    var text1 = text1 + "Base Price: $" + sizePrice + "<br><br>";
  }
  var pizzaCost = sizePrice;
  getMeat(pizzaCost, text1);

};

function getMeat(pizzaCost, text1) {
  var pizzaCost = pizzaCost;
  var meatPrice = 0;
  var meatToppings = [];
  var meatToppingsArray = document.getElementsByClassName("meat");
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
    var text1 = text1 + meatToppings[i] + "<br>";
    if (meatToppingsAmount <= 1) {
      var text1 = text1 + "-- Complimentary" + "<br><br>";
      break;
    } else if (meatToppingsAmount > 1) {
      var text1 = text1 + "-- Complimentary" + "<br><br>";
      var i = i + 1;
      for (var j=1; j<meatToppingsAmount; j++) {
        var text1 = text1 + meatToppings[j] + "<br>";
        var text1 = text1 + "+ $" + 1 + "<br><br>";
        var i = i + 1;
      }
    }
  }
  getVeggie(pizzaCost, text1);
};


function getVeggie(pizzaCost, text1) {
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
      var text1 = text1 + "-- Complimentary" + "<br><br>";
      break;
    } else if (veggieToppingsAmount > 1) {
      var text1 = text1 + "-- Complimentary" + "<br><br>";
      var i = i + 1;
      for (var j=1; j<veggieToppingsAmount; j++) {
        var text1 = text1 + veggieToppings[j] + "<br>";
        var text1 = text1 + "+ $" + 1 + "<br><br>";
        var i = i + 1;
      }
    }
  }
  getCheese(pizzaCost, text1);
  };

  function getCheese(pizzaCost, text1) {
    var cheese = $('input[name=cheeseAmount]:checked').val();
    var cheesePrice = 0;
    if (cheese === "Extra Cheese") {
      var cheesePrice = 3
    } else if (cheese === "No Cheese" || cheese === "Regular Cheese") {
      var text1 = text1 + cheese + "<br>" + "-- Complimentary" + "<br><br>";
    } else {
    var text1 = text1 + cheese + "<br>";
    var text1 = text1 + "+ $" + cheesePrice + "<br><br>";
    var pizzaCost = (pizzaCost + cheesePrice);
    }
    getSauce(pizzaCost, text1);

  };

  function getSauce(pizzaCost, text1) {
    var sauce = $('input[name=sauce]:checked').val();
    if (sauce === "No Sauce") {
    var text1 = text1 + sauce + "<br><br>";
    } else {
    var text1 = text1 + sauce + "<br>";
    var text1 = text1 + "-- Complimentary" + "<br><br>";
    }
    getCrust(pizzaCost, text1)
  };

  function getCrust(pizzaCost, text1) {
    var crust = $('input[name=typeOfCrust]:checked').val();
    var crustPrice = 0;
    if (crust != "Cheese Stuffed Crust") {
      var text1 = text1 + crust + "<br>";
      var text1 = text1 + "-- Complimentary" + "<br><br>";
    } else if (crust === "Cheese Stuffed Crust") {
      var crustPrice = 3;
      var text1 = text1 + crust + "<br>";
      var text1 = text1 + "+ $" + crustPrice + "<br><br>";
    }
    var pizzaCost = (pizzaCost + crustPrice);
    document.getElementById("receipt").style.display="block";
    document.getElementById("showText1").innerHTML=text1;
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
