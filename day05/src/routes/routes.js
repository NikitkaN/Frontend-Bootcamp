const { Router } = require('express');
const controller = require('../controllers/controller.js');
const authController = require('../controllers/authController.js');
const { isAuthenticated, isAdmin, isWaiter } = require('../controllers/middleware.js');
const { MenuItem, Order, User } = require('../models/index.js');

const router = Router();

router.get('/', isAuthenticated, async (req, res) => {
    if (req.session.role === 'waiter') {
      const orders = await Order.findAll({
        where: { userId: req.session.userId, isActive: true },
        include: [{ model: MenuItem }]
      });
      res.render('waiterMain', { orders });
    } else {
        res.render('main');
    }
});

router.get('/orders', isAuthenticated, isWaiter, (req, res) => {
    res.render('orders');
});

router.post('/signin', authController.signIn);
router.post('/signup', authController.signUp);

router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Ошибка при выходе');
        }
        res.clearCookie('connect.sid');
        res.redirect('/signIn');
    });
});

// GET /menu - меню для клиента.
router.get('/menu', controller.renderMenu);

// GET /orders/:id - для страницы заказа
router.get('/orders/:id', controller.getOrderById);

// GET /menuList — API для меню и все, что в него входит.
router.get('/menuList', controller.getMenu);

// GET /ordersList — получить все текущие заказы из ресторана.
router.get('/ordersList', controller.getAllOrders);

router.post('/orders/:id/close', controller.closeOrder);
// router.put('/orders/:id/close', controller.closeOrder);

// GET /users - получить данные всех пользователей.
router.get('/users', controller.getAllUsers);

// GET /employee/:id/orders - получить заказы для сотрудника.
router.get('/employee/:id/orders', controller.getOrdersByEmployeeId);

// GET /waiters - получить данные официантов.
router.get('/waiters', controller.getWaiters);

// POST /orders — создать заказ.
router.post('/orders', controller.createOrder);

// POST /waiters —  возможность добавить нового сотрудника.
router.post('/waiters', controller.createWaiter);

// PUT /menu/id - изменить информацию о блюде в меню
router.put('/menu/:id', controller.updateMenuItem);

// PUT /orders/id — изменить заказ.
router.put('/orders/:id', controller.updateOrder);

// PUT /user/:id - изменить информацию о пользователе
router.put('/user/:id', controller.updateUser);

module.exports = router;