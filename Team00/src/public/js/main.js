const dishes = {
    1: "Lasagna",
    2: "Salmon Sushi",
    3: "Pizza",
    4: "Borscht",
    5: "Dumplings",
    6: "Spaghetti"
};

document.getElementById('checkOrdersButton').addEventListener('click', async () => {
    const employeeId = document.getElementById('employeeId').value;
    console.log('Button clicked with employeeId:', employeeId);
    const response = await fetch(`/employee/${employeeId}/orders`);
    console.log('Response from server:', response);
    if (response.ok) {
      const orders = await response.json();
      console.log('Orders received:', orders);
      displayOrders(orders);
    } else {
      const error = await response.json();
      console.error('Error:', error.error);
      alert(error.error);
    }
});

function displayOrders(orders) {
    const ordersList = document.getElementById('ordersList');
    ordersList.innerHTML = '';
    let meals = '';
    orders.forEach(order => {
      const orderDiv = document.createElement('div');
      orderDiv.classList.add('card');
      meals = order.items.map(item => dishes[item]);
      orderDiv.innerHTML = `
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title card-title-reg">
                    ID заказа: ${order.id}
                </h3>
            </div>
            <div class="card-info">
                <div class="ingredients">
                    Блюда: ${meals.join(', ')}
                </div>
            </div>
            <div class="card-buttons">
                <strong>
                    Статус заказа: ${(order.isActive) ? 'Активен' : 'Завершён'}
                </strong>
            </div>
        </div>
      `;
      ordersList.appendChild(orderDiv);
    });
}