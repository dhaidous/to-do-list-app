$(document).ready(function () {
    // Function to add a new item to the list
    function newItem() {
        let inputValue = $('#input').val();
        if (inputValue === '') {
            alert('You must write something!');
        } else {
            let li = $('<li></li>').text(inputValue);
            // Create the delete button and append it to the li
            let deleteButton = $('<button class="delete">X</button>');
            li.append(deleteButton);

            // Append the new li to the list
            $('#list').append(li);

            // Clear the input field
            $('#input').val('');

            // Mark the item as done on double click
            li.on('dblclick', function () {
                li.toggleClass('strike');
            });

            // Delete the item when the delete button is clicked
            deleteButton.on('click', function () {
                li.remove();
            });

            // Enable reordering of the list items
            $('#list').sortable();
        }
    }

    // Event listener for the add button
    $('#button').on('click', function () {
        newItem();
    });

    // Allow adding items by pressing the Enter key
    $('#input').on('keypress', function (e) {
        if (e.which === 13) {
            newItem();
        }
    });
});
