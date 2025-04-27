// Dữ liệu mẫu giỏ hàng
//cart = [
//{ name: "Mắm nêm", price: 45000, quantity: 1 },
//{ name: "Bánh tráng nước dừa", price: 35000, quantity: 2 }
//
  
  // Hàm hiển thị giỏ hàng
  function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
  
    cart.forEach((item, index) => {
      const div = document.createElement('div');
      div.style.marginBottom = "20px";
      div.style.padding = "15px";
      div.style.background = "#f9f9f9";
      div.style.borderRadius = "8px";
  
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Giá: ${item.price.toLocaleString()}₫</p>
        <div style="display: flex; align-items: center; gap: 10px;">
          <button onclick="decrease(${index})" class="btn">-</button>
          <span>${item.quantity}</span>
          <button onclick="increase(${index})" class="btn">+</button>
        </div>
        <p>Thành tiền: ${(item.price * item.quantity).toLocaleString()}₫</p>
      `;
  
      cartItems.appendChild(div);
    });
  
    updateTotal();
  }
  
  // Hàm tăng số lượng
  function increase(index) {
    cart[index].quantity++;
    renderCart();
  }
  
  // Hàm giảm số lượng
  function decrease(index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      renderCart();
    } else {
      if (confirm('Bạn muốn xóa sản phẩm này khỏi giỏ hàng?')) {
        cart.splice(index, 1);
        renderCart();
      }
    }
  }
  
  // Cập nhật tổng tiền
  function updateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('total').innerText = `Tổng tiền: ${total.toLocaleString()}₫`;
  }
  
  // Xử lý thanh toán
  function checkout() {
    const payment = document.getElementById('payment-method').value;
    if (payment === 'bank') {
      alert("Vui lòng chuyển khoản tới số tài khoản 123456789 tại ngân hàng ABC.");
    } else {
      alert("Bạn sẽ thanh toán khi nhận hàng. Cảm ơn bạn!");
    }
  }
  
  // Khởi tạo
  renderCart();
  