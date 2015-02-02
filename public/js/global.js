// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

    // Add User button click
    $('#btnAddUser').on('click', addUser);

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/userlist', function( data ) {

        // Stick our user data array into a userlist variable in the global object
        userListData = data;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.fullname + '</td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td>' + this.qlearn + '</td>';
            tableContent += '<td>' + this.qwhy + '</td>';
            tableContent += '<td>' + this.qbackground + '</td>';
            tableContent += '<td>' + this.qformat + '</td>';
            tableContent += '<td>' + this.qbudget + '</td>';
            tableContent += '<td>' + this.qdate + '</td>';
            tableContent += '<td>' + this._id + '</td>';
            tableContent += '<td><input type="checkbox"></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};

// Add User
function addUser(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addUser input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newUser = {
            'fullname': $('#addUser fieldset input#inputUserFullName').val(),
            'email': $('#addUser fieldset input#inputUserEmail').val(),
            'qlearn': $('#addUser fieldset textarea#inputUserQLearn').val(),
            'qwhy': $('#addUser fieldset textarea#inputUserQWhy').val(),
            'qbackground': $('#addUser fieldset textarea#inputUserQBackground').val(),
            'qformat': $('#addUser fieldset textarea#inputUserQFormat').val(),
            'qbudget': $('#addUser fieldset input#inputUserQBudget').val(),
            'qdate': new Date().getTime(),
            'completed': false
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/adduser',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addUser fieldset input').val('');

                // Update the table
                populateTable();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};
