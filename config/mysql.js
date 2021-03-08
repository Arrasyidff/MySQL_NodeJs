const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Al_Qolam"
});

// con.connect((err) => {
//     if (err) console.log(err);
//     else console.log("mysql connected");
// });

module.exports = con;