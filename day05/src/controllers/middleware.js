// Пример middleware для проверки аутентификации
function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        res.locals.isAuthenticated = true;
    } else {
        res.locals.isAuthenticated = false;
    }
    next();
}
  
// Middleware для проверки роли администратора
function isAdmin(req, res, next) {
    if (req.session.role === 'admin') {
        next();
        return true;
    } else {
        next();
        return false;
    }
}
  
// Middleware для проверки роли официанта
function isWaiter(req, res, next) {
    if (req.session.role === 'waiter') {
        next();
        return true;
    } else {
        next();
        return false;
    }
}
  
module.exports = {
    isAuthenticated,
    isAdmin,
    isWaiter
};
  