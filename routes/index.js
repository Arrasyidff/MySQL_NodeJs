const routes = require("express").Router();
const UserController = require("../controllers/userController");

routes.get("/", UserController.getAllUser);
routes.post("/add_user", UserController.addUser);
routes.put("/update_user/:id", UserController.updateUser);
routes.delete("/delete_user/:id", UserController.deleteUser);

module.exports = routes;
