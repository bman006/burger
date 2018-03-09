$(document).ready(function() {
    //Move burger from new list to devoured list when button is clicked
    $(`.devour-button`).on(`click`, function() {
        //Send ajax request to update this burger's data
        $.ajax(`/api/devour/${$(this).attr("sql-id")}`, {
            type: "PUT"
        }).then(function() {
        //Update page with new data condition of new and devoured burgers
        location.reload();
        });
    });

    //Add a new burger from new input field to the new burger list
    $(`#add-burger-button`).on(`click`, function() {
        //Send ajax request to update this burger's data
        var newBurger = $(`#new-burger-input`).val().trim();
        console.log(newBurger);
        $.ajax(`/api/${newBurger}`, {
            type: "POST"
        }).then(function() {
        //Update page with new data condition of new and devoured burgers
        // location.reload();
        });
    });
});