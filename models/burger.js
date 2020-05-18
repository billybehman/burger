var orm = require("../config/orm")

var burger = {
    all: function(cb) {
        orm.showAll("burgers,", function(results) {
            cb(results)
        })
    },

    new: function(name, eaten, cb) {
        orm.create("burgers", {burger_name: name, devoured: eaten}, function(res) {
            cb(res)
        })
    },
    
    put: function(cb) {
        orm.update("burgers", burger_name, id, function(res) {
            cb(res)
        })
    }
}

module.exports = burger