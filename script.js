
function viewProduct(productId) {
  // Lấy phần tử tên và giá từ id
  const tagElement = document.getElementById(productId+'-tag');
  const nameElement = document.getElementById(productId+'-name');
  const priceElement = document.getElementById(productId+'-price');
  const imageElement = document.getElementById(productId+'-img');

  // Lấy dữ liệu thực tế
  const tag = tagElement.textContent;
  const name = nameElement.textContent;
  const price = priceElement.textContent;
  const image = imageElement.getAttribute('src');

  // Tạo object sản phẩm
  const product = { tag,name, price, image };

  // Lưu vào localStorage
  localStorage.setItem('selectedProduct', JSON.stringify(product));

  // Chuyển sang trang chi tiết
  window.location.href = 'product_detail.html';
  console.log(image)
  console.log(productId)
}
function addToCart() {
  const product = JSON.parse(localStorage.getItem('selectedProduct'));
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Đã thêm vào giỏ hàng!');
}
