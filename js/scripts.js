$(document).ready(function () {
    function newItem() {
        // jQuery
        // 1. Adding a new item to the list of items:
        let inputValue = $('#input').val();
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            let li = $('<li></li>').text(inputValue);
            $('#list').append(li);

            // 2. Crossing out an item from the list of items:
            li.on("dblclick", function () {
                li.toggleClass("strike");
            });

            // 3. Adding the delete button "X":
            let crossOutButton = $('<button class="delete">X</button>');
            li.append(crossOutButton);

            crossOutButton.on("click", function () {
                li.remove();
            });

            // 4. Reordering the items:
            $('#list').sortable();
        }

        // Clear the input field
        $('#input').val('');
    }

    // Event listener for the Add button
    $('#button').on("click", function () {
        newItem();
    });

    // Allow adding items by pressing the Enter key
    $('#input').on("keypress", function (e) {
        if (e.which === 13) {
            newItem();
        }
    });
});
