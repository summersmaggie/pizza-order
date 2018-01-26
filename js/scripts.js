//biz logic
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
};

Pizza.prototype.price = function() {
  if (this.size === "small" && this.topping === "salami") {
    return (7 + 4);
  } else if (this.size === "medium" && this.topping === "jalepeño") {
    return ("13")
  } else if (this.size === "large") {
    return ("16")
  } else {
    return ("7");
  }
};

//ui logic
$(document).ready(function() {
  $("button#order").click(function() {

    var inputtedSize = $("input:radio[name=size]:checked").val();
    var inputtedTopping = $("input:radio[name=topping1]:checked").val();
    alert(inputtedTopping);

    var pizzaOne = new Pizza(inputtedSize, inputtedTopping);

    $("#price").text(pizzaOne.price());

    // newPizza.price();
    // $("li#price").text(this.size);
    // var topping2 = $("input:radio[name=topping2]:checked").val();
    // var topping3 = $("input:radio[name=topping3]:checked").val();
    // var topping4 = $("input:radio[name=topping4]:checked").val()

  });
});
