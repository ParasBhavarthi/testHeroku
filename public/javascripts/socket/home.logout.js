$(function () {
  var socket = io();

  // logout
  $("#logout").click(() => {
    console.log("client: disconnect");
    Cookies.remove('token', {path: ''});
    socket.close();
  });

});