$(document).ready(function() {
  $("#basic-form").validate({
    rules: {
      password: {
        min: 0
      }
    },
    messages : {
      name: {
        required: "First Name cannot be empty",
        minlength: "Name should be at least 3 characters"
      },

      lastname: {
        required: "Last Name cannot be empty",
      },
     
      email: {
        required: "Email cannot be empty",
        email: "The email should be in the format: email@example.com"
      },

      password: {
        required: "Password cannot be empty",
        password: "The email should be in the format: email@example.com"
      },
     
    }
  });
});