$(document).ready(function() {
    $("#form2").submit(function(event) {
        event.preventDefault();
        var size = $("input#sizes option:selected").val();
        var crust = $("input#crusts option:selected").val();
        var toppings = $("input#toppings option:selected").val();
        var numPizza = $("#numPizzas").val();
        var deliveryCity = $("input#delivery option:selected").val();

        var newGetPizza = new Getpizza(size, crust, toppings, numPizza, deliveryCity);
        var totalPrice = parseInt((newGetPizza.getSizePrice() + newGetPizza.getCrustPrice() + newGetPizza.gettoppingsPrice() + newGetPizza.getdeliveryCity())) * numPizza;
        alert("Your total is" + totalPrice)

    });

});
//constructors and propotypes

class Getpizza {
    constructor(name, size, crust, toppings, deliveryCity, total) {
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.deliveryCity = deliveryCity;
        this.total = total;
    }
};

Getpizza.prototype.getSizePrice = function() {
    if (this.size == "small") {

        console.log(500);
    } else if (this.size == "medium") {

        console.log(800);
    } else if (this.size == "large") {

        console.log(1200);
    } else {

        console.log("choose an option");
    }
};

Getpizza.prototype.gettoppingsPrice = function() {
    if (this.toppings == "Mushroom" || "Extra-olive" || "Sausage" || "Bacon") {

        console.log(50);
    } else {

        console.log("Chose an option")
    }
};
Getpizza.prototype.getCrustPrice = function() {
    if (this.crust == "Crispy") {

        console.log(100);
    } else if (this.crust == "Stuffed") {

        console.log(150);
    } else if (this.crust == "Gluten-free") {
        console.log(200);

    } else {

        console.log("Choose an option");
    }
};
Getpizza.prototype.getdeliveryCity = function() {
    if (this.deliveryCity == "Waiyaki-way") {
        console.log(100);
    } else if (this.deliveryCity == "Thika-road") {

        console.log(150);
    } else if (this.deliveryCity == "Eastern-Bypass") {

        console.log(200);

    } else(this.deliveryCity == "Western-Bypass"); {

        console.log(300);
    }
};