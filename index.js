//bussiness logic
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
 function placeOrder() {
    // get form values
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;