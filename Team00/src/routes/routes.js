const { Router } = require('express');
// const controller = require('../controllers/controller.js');
// const authController = require('../controllers/authController.js');
// const { isAuthenticated, isAdmin, isWaiter } = require('../controllers/middleware.js');
// const { MenuItem, Order, User } = require('../models/index.js');

const router = Router();

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/signIn', (req, res) => {
    res.render('signIn');
});
  
router.get('/signUp', (req, res) => {
   res.render('signUp');
});

module.exports = router;