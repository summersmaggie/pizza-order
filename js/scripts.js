//biz logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  if (this.size === "small") {
    return (7 + (this.toppings.length * 2));
  } else if (this.size === "medium") {
    return (9 + (this.toppings.length * 2));
  } else if (this.size === "large") {
      return (9 + (this.toppings.length * 2));
  } else {
    return ("Please try again.");
  }
};

//ui logic
$(document).ready(function() {
  var toppingsArray = [];

  $("button#order").click(function() {
    var inputtedSize = $("input:radio[name=size]:checked").val();

    $("input:checkbox[name=toppings]:checked").each(function() {
      var inputtedToppings = $(this).val();
      toppingsArray.push(inputtedToppings);
    });

    var newPizza = new Pizza(inputtedSize, toppingsArray);
    console.log(newPizza)
    $("#price").text(newPizza.price());
  });
});
