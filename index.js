


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

Getpizza.prototype.getSizePrice = function () {
    if (this.size == "small") {
        return 500;
    } else if (this.size == "medium") {
        return 800;
    } else if (this.size =="large") {
        return 1200;
    }else { return "Nothing selected,choose an option"
}};
  
Getpizza.prototype.gettoppingsPrice = function () {
    if (this.toppings =="Mushroom"||"Extra-olive"||"Sausage"||"Bacon") {
        return 50;
     }else{ return "Nothing selected, Chose an option"
}};
Getpizza.prototype.getCrustPrice = function () {
    if (this.crust == "Crispy") {
        return 100;
    } else if (this.crust == "Stuffed") {
        return 150;
    } else if (this.crust =="Gluten-free") {
        return 200;
  
    }else{ return "Nothing selected,Choose an option"
}};
Getpizza.prototype.getdeliveryCity = function () {
    if (this.deliveryCity == "Waiyaki-way") {
        return 100;
    } else if (this.deliveryCity == "Thika-road") {
        return 150;
    } else if (this.deliveryCity =="Eastern-Bypass") {
        return 200;
  
    }else if(this.deliveryCity== "Western-Bypass"){
        return 300
    }};
    
    
    

//user interface

$(document).ready(function () {
    $("#form2").submit(function (event) {
        event.preventDefault();
        var size = $("input#sizes option:selected").val();
        var crust = $("input#crusts option:selected").val();
        var toppings = $("input#toppings option:selected").val();
        var numPizza = parseInt($("#numPizzas").val());
        var deliveryCity = $("input#delivery option:selected").val();

        var newGetPizza = new Getpizza(size, crust, toppings, numPizza,deliveryCity);
        var totalPrice = (newGetPizza.getSizePrice()+newGetPizza.getCrustPrice()+newGetPizza.gettoppingsPrice()+getdeliveryCity)*numPizza;

        alert("Your order is "+numPizza+ " " +size+ " pizzas, with a " + crust +" crust , "+toppings + " toppings!" +deliveryCity+ "delivery");
        alert("The total cost is  " + totalPrice );
    });

});