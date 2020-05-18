var express = require("express")

var burger = require("../models/burger")

var router = express.Router()

router.get("/", function(req, res) {
    try {
       burger.all(function(data) {
        
        
        var hbsobj = {
            burger: data
        }
        console.log(hbsobj);
        res.render("index", hbsobj)
    }) 
    } catch (error) {
        console.log(error)
    }
    
})

router.post("/api/burgers", function(req, res) {
     
    console.log("req", req.body)


    burger.new(req.body.name, function(data) {
        res.json(data)
    })
})

router.put("api/burgers/:id", function(req, res) {
    burger.put(req.body.name, req.body.id, function(data) {
        res.json(data)
    })
})

module.exports = router