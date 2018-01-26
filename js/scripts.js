//biz logic
function Pizza(size, topping1, topping2) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
};

Pizza.prototype.price = function() {
  if (this.size === "small" && this.topping1 === "none" && this.topping2 === "none") {
    return (7);
  } else if (this.size === "small" && this.topping1 !== "none" && this.topping2 === "none") {
    return (7 + 2 + 0);
  } else if (this.size === "small" && this.topping1 !== "none" && this.topping2 !== "none") {
    return (7 + 2 + 2);
  } else if (this.size === "small" && this.topping1 === "none" && this.topping2 !== "none") {
    return (7 + 2 + 0);
  } else if (this.size === "medium" && this.topping1 === "none" && this.topping2 === "none") {
    return (9);
  } else if (this.size === "medium" && this.topping1 !== "none" && this.topping2 === "none") {
    return (9 + 2 + 0);
  } else if (this.size === "medium" && this.topping1 !== "none" && this.topping2 !== "none") {
    return (9 + 2 + 2);
  } else if (this.size === "medium" && this.topping1 === "none" && this.topping2 !== "none") {
    return (9 + 2 + 0);
  } else if (this.size === "large" && this.topping1 !== "none" && this.topping2 === "none") {
    return (11)
  } else if (this.size === "large" && this.topping1 !== "none" && this.topping2 === "none") {
    return (11 + 2 + 0)
  } else if (this.size === "large" && this.topping1 !== "none" && this.topping2 !== "none") {
    return (11 + 2 + 2)
  } else if (this.size === "large" && this.topping1 === "none" && this.topping2 !== "none") {
    return (11 + 2 + 0)
  } else {
    return ("Please try again.");
  }
};

//ui logic
$(document).ready(function() {
  $("button#order").click(function() {

    var inputtedSize = $("input:radio[name=size]:checked").val();
    var inputtedTopping1 = $("input:radio[name=topping1]:checked").val();
    var inputtedTopping2 = $("input:radio[name=topping2]:checked").val();

    var pizzaOne = new Pizza(inputtedSize, inputtedTopping1, inputtedTopping2);

    $("#price").text(pizzaOne.price());

    // newPizza.price();
    // $("li#price").text(this.size);
    // var topping2 = $("input:radio[name=topping2]:checked").val();
    // var topping3 = $("input:radio[name=topping3]:checked").val();
    // var topping4 = $("input:radio[name=topping4]:checked").val()

  });
});
