//biz logic
function Pizza(size) {
  this.size = size;
  this.topping = [];
};

Pizza.prototype.price = function () {
  if (this.size === small) {
    return (this.size + (2 * this.topping));
  }

};



//ui logic
$(document).ready(function() {
  $("button#order-now").submit(function() {
    var size = $("input:radio[name=size]:checked").val();
    var topping1 = $("input:radio[name=topping1]:checked").val();
    var topping2 = $("input:radio[name=topping2]:checked").val();
    var topping3 = $("input:radio[name=topping3]:checked").val();
    var topping4 = $("input:radio[name=topping4]:checked").val();


  });
});
