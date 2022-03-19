//bussiness logic
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
 function placeOrder() {
    // get form values
    var typePizza = document.getElementById("flavor").value;
    var sizePizza = document.getElementById("size").value;
    var crustPizza= document.getElementById("crust").value;
    var ptoppings= document.getElementById("toppings").value;

    var deliveryCity = document.getElementById("deliveryCity").value;


  // get the pizza price
  var orderPrice = calculatePrice(typePizza,sizePizza,crustPizza,ptoppings);

 // get the delivery price
 var deliveryPrice = calculateDelivery(orderPrice, deliveryCity);

 }
