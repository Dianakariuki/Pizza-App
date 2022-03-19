//bussiness logic
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
 function placeOrder() {
    // get form values
    var flavPizzas = document.getElementById("flavor").value;
    var sizePizza = document.getElementById("size").value;
    var sizePizza = document.getElementById("size").value;

    var deliveryCity = document.getElementById("deliveryCity").value;

    
  // get the pizza price
  var orderPrice = calculatePrice(numPizzas, typePizza);



 }
