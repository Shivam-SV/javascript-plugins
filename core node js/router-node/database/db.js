var mysql = require("mysql");

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crm7",
});

const query = (sql) => {
    return new Promise((resolve, reject) => {
        conn.query(sql, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

conn.connect(function (err) {
    if (err) throw err;
    console.log("connected!");
});

module.exports = { conn, query };
