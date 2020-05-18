var express = require("express")

var exphbs = require("express-handlebars")


var PORT = process.env.PORT || 3000;

var app = express();

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT)