const routes = require("express").Router();
// Using Router() for trigger the API from ROUTES

const UserController = require("../controllers/userController");
// Import the User Controller from Controller to get a methods

routes.get("/", UserController.getAllUser);
routes.post("/add_user", UserController.addUser);
routes.put("/update_user/:id", UserController.updateUser);
routes.delete("/delete_user/:id", UserController.deleteUser);

module.exports = routes;
