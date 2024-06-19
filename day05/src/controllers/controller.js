const { MenuItem, Order, User } = require('../models/index.js');

// Get all menu items
exports.getMenu = async (req, res) => {
  try {
    const menu = await MenuItem.findAll();
    res.json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении меню' });
  }
};

exports.renderMenu = async (req, res) => {
  try {
    const menu = await MenuItem.findAll();
    res.render('menu', { menu });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении меню' });
  }
};

exports.getWaiters = async (req, res) => {
  try {
    const waiters = await User.findAll({ where: { role: 'waiter' } });
    res.json(waiters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении списка официантов' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ошибка при получении списка пользователей' });
  }
};

// Get all current orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { isActive: true } });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении заказов' });
  }
};

exports.getOrderById = async (req, res) => {
  const orderId = req.params.id;
  try {
    console.log('Fetching order with ID:', orderId);
    const order = await Order.findByPk(orderId, {
      include: [{
        model: MenuItem,
        through: {
          attributes: []
        }
      }]
    });

    console.log('Order:', order);

    if (!order) {
      console.log('Order not found with ID:', orderId);
      return res.status(404).json({ error: 'Заказ не найден' });
    }

    console.log('Found order:', order.toJSON());

    const totalCost = order.MenuItems.reduce((sum, item) => sum + item.cost, 0);
    console.log('Total cost of order:', totalCost);

    const orderItemsWithDetails = order.MenuItems.map(item => {
      return {
        id: item.id,
        title: item.title,
        picture: item.picture,
        cost: item.cost
      };
    });

    console.log('Order items with details:', orderItemsWithDetails);

    res.render('order', { order, orderItems: orderItemsWithDetails, totalCost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении заказа' });
  }
};

exports.closeOrder = async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Заказ не найден' });
    }

    order.isActive = false;
    await order.save();

    const user = await User.findByPk(order.userId); 
    if (user) {
      user.orders = [...user.orders, order.id];
      await user.save();
    }

    res.redirect(`/orders/${orderId}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при закрытии заказа' });
  }
};

// Create new order
exports.createOrder = async (req, res) => {
  try {
    const { items, userId, isActive } = req.body;
    const order = await Order.create({ items, userId, isActive });
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при создании заказа' });
  }
};

exports.getOrderById = async (req, res) => {
  const orderId = req.params.id;
  
  try {
    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(404).json({ error: 'Заказ не найден' });
    }

    const menuItems = await MenuItem.findAll({
      where: {
        id: order.items,
      },
    });

    const totalCost = menuItems.reduce((sum, item) => sum + item.cost, 0);

    res.render('order', { order, totalCost, menuItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении заказа' });
  }
};

// Change order
exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findByPk(id);

  try {
    const { items, isActive } = req.body;
    if (!order) {
      return res.status(404).json({ error: 'Заказ не найден' });
    }

    order.isActive = isActive;
    order.items = items;
    await order.save();

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при обновлении заказа' });
  }

  return order;
};

// Change menu item
exports.updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const menuItem = await MenuItem.findByPk(id);
  const { title, picture, description, calories, cost } = req.body;

  try {
    if (!menuItem) {
      return res.status(404).json({ error: 'Элемент меню не найден' });
    }

    menuItem.title = title || menuItem.title;
    menuItem.picture = picture || menuItem.picture;
    menuItem.cost = cost || menuItem.cost;
    menuItem.description = description || menuItem.description;
    menuItem.calories = calories || menuItem.calories;
    await menuItem.save();

    res.json(menuItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при обновлении элемента меню' });
  }
};

// Change user data
exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, role, orders, employeeID } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }

    user.name = name !== undefined ? name : user.name;
    user.role = role !== undefined ? role : user.role;
    user.orders = orders !== undefined ? orders : user.orders;
    user.employeeID = employeeID !== undefined ? employeeID : user.employeeID;

    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при обновлении пользователя' });
  }
};

exports.getOrdersByEmployeeId = async (req, res) => {
  const employeeId = req.params.id;

  try {
    const employee = await User.findOne({
      where: { employeeID: employeeId },
      include: {
        model: Order,
        include: MenuItem,
      },
    });

    if (!employee) {
      return res.status(404).json({ error: 'Сотрудник не найден' });
    }

    const orders = await Order.findAll({
      where: {
        id: employee.orders
      },
      include: MenuItem,
    });

    res.json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ошибка при получении заказов' });
  }
};

// Create new User
exports.createWaiter = async (req, res) => {
  try {
    const { name, role, orders } = req.body;
    const waiter = await User.create({ name, role, orders });
    res.status(201).json(waiter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при создании сотрудника' });
  }
};