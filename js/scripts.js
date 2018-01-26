//biz logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.price = function() {
  if (this.size === "small") {
    return ("it worked");
  // } else if (this.size === "small" && this.topping1 === "none" && this.topping2 === "none") {
  //   return (7 + 2 + 2);

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
      alert(toppingsArray);
    });

    var newPizza = new Pizza(inputtedSize, toppingsArray);
    $("#price").text(newPizza.price());
  });
});
