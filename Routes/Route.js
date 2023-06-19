// Route.js
//connect express server to account routes to handle player routes
const express = require("express")
const router = express.Router();
const fs = require('fs');

const userRoutes = require('./account.js') // import account route
router.use(userRoutes) // use account route

module.exports = router;