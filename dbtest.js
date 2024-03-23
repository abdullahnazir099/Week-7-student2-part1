document.addEventListener('DOMContentLoaded', function () {
    fetch('/.netlify/functions/getUsers')
        .then(response => response.json())
        .then(users => {
            const usersContainer = document.getElementById('users');
            const userList = users.map(user =>
               ` 
               <li>Name :${user.username} - Email :${user.email}, 
               Signed up on: ${user.signup_date}</li>`)
            .join('');
            usersContainer.innerHTML = `<ul>${userList}</ul>`;
        })
        .catch(error => console.error('Error fetching users:', error));





    fetch('/.netlify/functions/getProducts')
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.getElementById('products');
            const productList = products.map(product => `
          
             
                  <li >
                    Product name :${product.product_name}-
                    Product price :${product.product_price}-
                    Product category : ${product.category}-
                  </li>
                `).join('');
            productsContainer.innerHTML = `<ul>${productList}</ul>`;
        })
        .catch(error => console.error('Error fetching products:', error));


    fetch('/.netlify/functions/getOrders')
        .then(response => response.json())
        .then(orders => {
            const ordersContainer = document.getElementById('orders');
            const orderList = orders.map(order=> `
          
            <li >
             ID:${order.order_id}
             Name:${order.username}
            Product name: ${order.product_name}
            Quantity: ${order.quantity}
          Order date: ${order.order_date}  
            </li>
          `).join('');
      ordersContainer.innerHTML = `<ul >${orderList}</ul>`;
           
        })
        .catch(error => console.error('Error fetching orders:', error));


        
});