var connection = require("./connection")

var orm = {

    showAll: function(table, cb) {
        connection.query("SELECT * FROM " + table + ";", function(err, results) {
            if(err) throw err

            cb(results)

        })
    },

    create: function(table, data, cb) {
        connection.query("INSERT INTO" + table + "SET ?", data, function(err, results) {
            if(err) throw err
            cb(results)
        })
    },

    update: function(table, burger_name, id, cb) {
        connection.query("UPDATE" + table + "SET ? WHERE id = ?", [burger_name, id], function(err, results) {
            if(err) throw err
            cb(results)
        })
    }

}

module.exports = orm;