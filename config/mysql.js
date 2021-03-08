const mysql = require("mysql");
// require the mysql dependency

// make var con for connect to mysql server 
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Al_Qolam"
});

// testing for connect in server
// con.connect((err) => {
//     if (err) console.log(err);
//     else console.log("mysql connected");
// });

module.exports = con;