$(document).ready(function () {
  $("#form").validate({
    submitHandler: function (form) {
      form.submit();
    },
    rules: {
      agreeCheck: {
        required: true,
      }
    },
    messages: {
      agreeCheck: {
        required: "Please acknowledge your understanding"
      },
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