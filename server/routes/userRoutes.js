// User Account Registration and Login Routes
router.get('/login', userController.loginPage);
router.get('/register', userController.registerPage);
router.post('/register', userController.register);

// User Account Dashboard
router.get('/account', userController.accountDashboard);

// User Account Edit Page
router.get('/account/edit', userController.accountEdit);

// User Order History Page
router.get('/account/orders', userController.orderHistory);

// Password Reset Request Page
router.get('/forgot-password', userController.passwordResetRequest);

// Password Reset Page
router.get('/reset-password/:token', userController.passwordReset);