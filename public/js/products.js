function addToCart (product) {
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  showCartItems();
}

$(document).ready(function () {
  $('#addProduct').click(function () {
    var id = location.href.match(/\d{1,4}$/g);
    $.get('/api/product/' + id, function (product) {
      addToCart(res);
    })
  });
});
