console.log("here")

$(function () {

    $("#createButton").on("click", function (event) {
        
        event.preventDefault()

        var newBurger = {
            name: $("#name").val().trim()
        }
        
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })

    })

})