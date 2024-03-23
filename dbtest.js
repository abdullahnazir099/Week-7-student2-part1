document.addEventListener('DOMContentLoaded', function () {
    fetch('/.netlify/functions/getUsers')
        .then(response => response.json())
        .then(users => {
            const usersContainer = document.getElementById('users');
            usersContainer.innerHTML = '';

            users.forEach(user => {
                const row =
                    ` <tr>
               <td>${user.username}</td>
               <td>${user.email}</td>
               <td>${user.signup_date}</td>
               </tr>
 
            `;
                usersContainer.innerHTML += row;
            });

        })
        .catch(error => console.error('Error fetching users:', error));






    fetch('/.netlify/functions/getProducts')
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.getElementById('products');
            productsContainer.innerHTML = '';

            products.forEach(product => {
                const row =
                    `
                    <tr>
                    <td>${product.product_name}</td>
                    <td>${product.prodrct_price}</td>
                    <td>${product.category}</td>
                    </tr>
             
                
                `;
                productsContainer.innerHTML += row;
            });
        })
        .catch(error => console.error('Error fetching products:', error));


    fetch('/.netlify/functions/getOrders')
        .then(response => response.json())
        .then(orders => {
            const ordersContainer = document.getElementById('orders');
            const orderList = orders.map(order => `
          
            <li class="order-item">
              <span class="order-id">ID:${order.order_id}</span>
              <span class="username">Name:${order.username}</span>
              <span class="product-name">Product name: ${order.product_name}</span>
              <span class="quantity">Quantity: ${order.quantity}</span>
              <span class="order_date">:Order date ${order.order_date}</span>  
            </li>
          `).join('');
            ordersContainer.innerHTML = `<ul class="order-list">${orderList}</ul>`;

        })
        .catch(error => console.error('Error fetching orders:', error));



});