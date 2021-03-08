const UserModel = require("../models/User");

class UserController {
  static getAllUser(req, res) {
    UserModel.getUsers()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.json(err);
      });
  }

  static addUser(req, res) {
    const { name, dob, address, description } = req.body;
    UserModel.createUser(name, dob, address, description)
      .then(data => {
        res
          .status(201)
          .json({ id: data.insertId, name, dob, address, description });
      })
      .catch(err => {
        res.json(err);
      });
  }

  static updateUser(req, res) {
    const { id } = req.params;
    const { name, dob, address, description } = req.body;
    UserModel.updateOne(id, name, dob, address, description)
      .then(data => {
        res.status(200).json({id, name, dob, address, description});
      })
      .catch(err => {
        res.json(err);
      });
  }

  static deleteUser(req, res) {
    const { id } = req.params;
    UserModel.deleteOne(id)
      .then(data => {
        res.status(200).json({msg: "User Deleted"});
      })
      .catch(err => {
        res.json(err);
      });
  }
}

module.exports = UserController;
