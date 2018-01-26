//biz logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.price = function() {
  if (this.size === "small" && this.toppings === 3) {
    return (7 + 6);
  // } else if (this.size === "small" && this.topping1 === "none" && this.topping2 === "none") {
  //   return (7 + 2 + 2);

  } else {
    return ("Please try again.");
  }
};

//ui logic
$(document).ready(function() {
  var pizzaOne = new Pizza(this.size, this.toppings);
  var toppings = [];

  $("button#order").click(function() {
    var inputtedSize = $("input:radio[name=size]:checked").val();
    alert(inputtedSize);

    $("input:checkbox[name=toppings]:checked").each(function() {
      var inputtedToppings = $(this).val();
      toppings.push(inputtedToppings);
      alert(toppings);
    });

    $("#price").text(pizzaOne.price());
  });
});
