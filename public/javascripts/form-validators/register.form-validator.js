$(document).ready(function () {
  $.validator.addMethod(
    "regex",
    function(value, element, regexp) {
      return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
  );

  $("#form").validate({
    submitHandler: function (form) {
      form.submit();
    },
    rules: {
      username: {
        required: true,
        minlength: 3,
        regex: /^[\da-z_-]*$/
      },
      password: {
        required: true,
        minlength: 4
      },
      password2: {
        required: true,
        minlength: 4,
        equalTo: "#password"
      }
    },
    messages: {
      username: {
        required: "Please enter a username",
        minlength: "Your username must consist of at least 3 characters",
        regex: "Please use digits, lower-case letters, dashes and underlines. Dashes and underlines should be in the middle only."
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 4 characters long"
      },
      password2: {
        required: "Please re-enter password",
        minlength: "Your password must be at least 4 characters long",
        equalTo: "Please enter the same password as above"
      }
    },
    errorElement: "div",
    validClass: "is-valid",
    errorClass: "is-invalid",
    errorPlacement: function (error, element) {
      error.addClass("invalid-feedback");
      $(element).parent().children(".invalid-feedback").html(error.html());
    },
    highlight: function (element, errorClass, validClass) {
      $(element).removeClass(validClass).addClass(errorClass);
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass(errorClass).addClass(validClass);
    }
  });
});