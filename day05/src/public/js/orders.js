document.addEventListener('DOMContentLoaded', async () => {
    try {
      const waiterResponse = await fetch('/waiters');
      const waiters = await waiterResponse.json();
  
      const waiterSelect = document.getElementById('waiterSelect');
      waiters.forEach(waiter => {
        const option = document.createElement('option');
        option.value = waiter.id;
        option.textContent = waiter.name;
        waiterSelect.appendChild(option);
      });
  
      const menuItemResponse = await fetch('/menuList');
      const menuItems = await menuItemResponse.json();
  
      const menuItemSelect = document.getElementById('menuItemSelect');
      menuItems.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.title;
        menuItemSelect.appendChild(option);
      });
  
    } catch (error) {
      console.error('Error fetching data:', error);
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = 'Ошибка при загрузке данных';
      errorMessage.style.display = 'block';
    }
  
    document.getElementById('orderForm').addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const waiterId = document.getElementById('waiterSelect').value;
      const menuItems = Array.from(document.getElementById('menuItemSelect').selectedOptions).map(option => option.value);
  
      try {
        const response = await fetch('/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            isActive: true,
            items: menuItems,
            userId: waiterId,
          }),
        });
  
        if (response.ok) {
          const order = await response.json();
          window.location.href = `/orders/${order.id}`;
        } else {
          const error = await response.json();
          const errorMessage = document.getElementById('errorMessage');
          errorMessage.textContent = error.error;
          errorMessage.style.display = 'block';
        }
      } catch (error) {
        console.error('Error creating order:', error);
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Ошибка при создании заказа';
        errorMessage.style.display = 'block';
      }
    });
});  