//This function starts the order process. It sets up a blank string for each "piece" of the order, then establishes a base price from size. It passes this info to the next function, getMeat()
function buildOrder() {
  var orderPieces = "";
  var pizzaCost = 0;
  var sizePrice = 0;
  var size = $('input[name=size]:checked').val();
  var orderPieces = orderPieces + size + " Pizza:" + "<br>"
  if (size === "Small") {
    var sizePrice = 6;
    var orderPieces = orderPieces + "Base Price: $" + sizePrice + "<br><br>";
  } else if (size === "Medium") {
    var sizePrice = 10;
    var orderPieces = orderPieces + "Base Price: $" + sizePrice + "<br><br>";
  } else if (size === "Large") {
    var sizePrice = 14;
    var orderPieces = orderPieces + "Base Price: $" + sizePrice + "<br><br>";
  } else if (size === "Extra Large") {
    var sizePrice = 16;
    var orderPieces = orderPieces + "Base Price: $" + sizePrice + "<br><br>";
  }
  var pizzaCost = sizePrice;
  getMeat(pizzaCost, orderPieces);
};

//This function finds everything that is checked under meat ingredients, pushes it into the array meatToppings, then iterates through each topping to list the first one as complimentary and the rest as an extra dollar. The example always listed the LAST topping as complimentary, not the first. This bothered me, so I solved it with a nested for loop which admittedely gave me a bit of a headache. I hope it is still close to best practice.
function getMeat(pizzaCost, orderPieces) {
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
    var orderPieces = orderPieces + meatToppings[i] + "<br>";
    if (meatToppingsAmount <= 1) {
      var orderPieces = orderPieces + "-- Complimentary" + "<br><br>";
      break;
    } else if (meatToppingsAmount > 1) {
      var orderPieces = orderPieces + "-- Complimentary" + "<br><br>";
      var i = i + 1;
      for (var j=1; j<meatToppingsAmount; j++) {
        var orderPieces = orderPieces + meatToppings[j] + "<br>";
        var orderPieces = orderPieces + "+ $" + 1 + "<br><br>";
        var i = i + 1;
      }
    }
  }
  getVeggie(pizzaCost, orderPieces);
};

//Turns out, this is the same function as getMeat if you just ctrl + f and replace "Meat" with "Veggie"
function getVeggie(pizzaCost, orderPieces) {
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
    var orderPieces = orderPieces + veggieToppings[i] + "<br>";
    if (veggieToppingsAmount <= 1) {
      var orderPieces = orderPieces + "-- Complimentary" + "<br><br>";
      break;
    } else if (veggieToppingsAmount > 1) {
      var orderPieces = orderPieces + "-- Complimentary" + "<br><br>";
      var i = i + 1;
      for (var j=1; j<veggieToppingsAmount; j++) {
        var orderPieces = orderPieces + veggieToppings[j] + "<br>";
        var orderPieces = orderPieces + "+ $" + 1 + "<br><br>";
        var i = i + 1;
      }
    }
  }
  getCheese(pizzaCost, orderPieces);
  };

//This is the cheese function. Pretty simple. Takes the checked item's value and sets the var cheese equal to it. Then it checks if it is extra to print out + $3, or if it is No Cheese to print nothing. I thought it was awkaward to put $0 or "complimentary" next to no cheese, so if you pick no cheese it just says no cheese.
  function getCheese(pizzaCost, orderPieces) {
    var cheese = $('input[name=cheeseAmount]:checked').val();
    var cheesePrice = 0;
    if (cheese === "Extra Cheese") {
      var cheesePrice = 3
    } else if (cheese === "No Cheese" || cheese === "Regular Cheese") {
      var orderPieces = orderPieces + cheese + "<br>" + "-- Complimentary" + "<br><br>";
    } else {
    var orderPieces = orderPieces + cheese + "<br>";
    var orderPieces = orderPieces + "+ $" + cheesePrice + "<br><br>";
    var pizzaCost = (pizzaCost + cheesePrice);
    }
    getSauce(pizzaCost, orderPieces);

  };

//Very similar to getCheese()
  function getSauce(pizzaCost, orderPieces) {
    var sauce = $('input[name=sauce]:checked').val();
    if (sauce === "No Sauce") {
    var orderPieces = orderPieces + sauce + "<br><br>";
    } else {
    var orderPieces = orderPieces + sauce + "<br>";
    var orderPieces = orderPieces + "-- Complimentary" + "<br><br>";
    }
    getCrust(pizzaCost, orderPieces)
  };

//Very similar to getCheese and getSauce, but at the end it actually prints out the receipt.
  function getCrust(pizzaCost, orderPieces) {
    var crust = $('input[name=typeOfCrust]:checked').val();
    var crustPrice = 0;
    if (crust != "Cheese Stuffed Crust") {
      var orderPieces = orderPieces + crust + "<br>";
      var orderPieces = orderPieces + "-- Complimentary" + "<br><br>";
    } else if (crust === "Cheese Stuffed Crust") {
      var crustPrice = 3;
      var orderPieces = orderPieces + crust + "<br>";
      var orderPieces = orderPieces + "+ $" + crustPrice + "<br><br>";
    }
    var pizzaCost = (pizzaCost + crustPrice);
    document.getElementById("receipt").style.display="block";
    document.getElementById("showPrice").innerHTML=orderPieces;
    document.getElementById("totalPrice").innerHTML = "</h3>$" + pizzaCost + ".00" + "</h3>"
  }

//I didn't even think to add an order clearing function until I looked at the example. Thank you for that, it was very helpful.
  function clearOrder() {
    var clearBoolean = confirm("Mama Mia, are you sure you want to clear this order?");
    if (clearBoolean == true) {
    document.getElementById("pizzaForm").reset();
    document.getElementById("receipt").style.display="none";
    location.reload();
    }
  };

//This is where I differ a lot from the example (I assume). I knew that using jQuery would make this more efficient, and I was taught at some point to try to seperate all jQuery into a document.ready function. Of course, I didn't manage to do that, but this makes the submit button more of an actual submit button, if I ever wanted to flesh out this webpage.
  $(document).ready(function() {
    $("form#pizzaForm").submit(function(event) {
      event.preventDefault();
      buildOrder();
    });
  });
