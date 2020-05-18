$("#createButton").on("click", function(event) {
    event.preventDefault()

    var newBurger = {
        burger_name: $("#name").val().trim()
    }
})

$.ajax("api/burgers", newBurger)
    