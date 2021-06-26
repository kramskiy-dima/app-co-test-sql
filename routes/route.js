const { Router } = require("express");
const handlers = require("./handlers");

const router = Router();

// Handle all users fetch
router.get("/users", handlers.getAllUsers);
// Handle user by id
router.get("/user/:id", handlers.getUserById);

module.exports = router;
