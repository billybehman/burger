var express = require("express")

var burger = require("../models/burger")

var router = express.Router()

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsobj = {
            burger: data
        }
        res.render("index", hbsobj)
    })
})

router.post("/api/burgers", function(req, res) {
    burger.new(req.body.name, req.body.eaten, function(data) {
        res.json(data)
    })
})

router.put("api/burgers/:id", function(req, res) {
    burger.put(function() {

    })
})

module.exports = router