const con = require("../config/mysql");
// require con from config

// I Make the several methods for CRUD and I using Promise for call the value
//   createUser, updateOne, and deleteOne need a parameter
class UserModel {
  static getUsers() {
    return new Promise((resolve, reject) => {
      con.query("SELECT * FROM users;", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  static createUser(name, dob, address, description) {
    return new Promise((resolve, reject) => {
      con.query(
        `INSERT INTO users (name, dob, address, description)
            values ('${name}', '${dob}', '${address}', '${description}');`,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  static updateOne(id, name, dob, address, description) {
    return new Promise((resolve, reject) => {
      con.query(
        `UPDATE users set name = '${name}',
                dob = '${dob}',
                address = '${address}',
                description = '${description}'
                where id = ${id};`,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  static deleteOne(id) {
    return new Promise((resolve, reject) => {
      con.query(`DELETE FROM users WHERE id = ${id};`, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
}

module.exports = UserModel;
