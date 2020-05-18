var orm = require("../config/orm")

var burger = {
    all: function(cb) {
        orm.showAll("burgers", function(results) {
            cb(results)
        })
    },

    new: function(name, cb) {
        orm.create("burgers", {burger_name: name}, function(res) {
            cb(res)
        })
    },
    
    put: function(burger_name, id, cb) {
        orm.update("burgers", [burger_name, id], function(res) {
            cb(res)
        })
    }
}

module.exports = burger