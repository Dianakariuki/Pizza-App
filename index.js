//constructors and propotypes

class getPizza {
    constructor(size, crust, toppings, numPizza, deliveryCity) {

        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.numPizza = numPizza;
        this.deliveryCity = deliveryCity;
    }
};

getPizza.prototype.getSizePrice = function() {


    if (this.size == "large") {

        return 1200;
    } else if (this.size == "medium") {

        return 800;
    } else
    if (this.size == "small") {

        return 500;
    } else {

        console.log("choose an option");
    }
};

getPizza.prototype.getToppingsPrice = function() {
    if (this.toppings == "Mushroom" || this.toppings == "Extra-olive" || this.toppings == "Sausage" || this.toppings == "Bacon") {

        return 50;
    } else {

        console.log("Choose an option")
    }
};
getPizza.prototype.getCrustPrice = function() {
    if (this.crust == "Crispy") {

        return 100;
    } else if (this.crust == "Stuffed") {

        return 150;
    } else
    if (this.crust == "Gluten-free") {
        return 200;

    } else {

        console.log("Choose an option");
    }
};
getPizza.prototype.getDeliveryCity = function() {
    if (this.deliveryCity == "Waiyaki-way") {
        return 100;
    } else if (this.deliveryCity == "Thika-road") {

        return 150;
    } else
    if (this.deliveryCity == "Eastern-Bypass") {

        return 200;

    } else if (this.deliveryCity == "Western-Bypass"); {

        return 300;
    }
};
$(document).ready(function() {
    $("#form2").submit(function(event) {
        event.preventDefault();
        var size = $("select#size option:selected").val();
        var crust = $("select#crusts option:selected").val();
        var toppings = $("select#toppings option:selected").val();
        var numPizza = $("#number").val();
        var deliveryCity = $("select#delivery option:selected").val();
        console.log(numPizza)

        var newGetPizza = new getPizza(size, crust, toppings, numPizza, deliveryCity);
        var totalPrice = (newGetPizza.getSizePrice() + newGetPizza.getCrustPrice() + newGetPizza.getToppingsPrice() + newGetPizza.getDeliveryCity()) * numPizza;

        alert("Thank you for your order, Your total is" + " " +
            "ksh" +
            " " + totalPrice);
            prompt("Please input your contact details");

    });

});