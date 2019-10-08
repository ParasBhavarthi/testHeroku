$(function () {
  adjustMessageWindowSize();
  const socket = io();
  socket.on('connect', function () {
  });

  socket.on('userList', function (userList) {
    userList = JSON.parse(userList);

    $("#active-user-table").html("");
    let tableHead = '<tr><th>Username</th><th>Active Status</th></tr>';
    $("#active-user-table").append(tableHead);

    for (let i = 0; i < userList.length; i++) {
      let usernameColumn = '<td>' + userList[i].username + '</td>';
      let onlineStatus = "";
      if (userList[i].onlineStatus === "ONLINE") {
        onlineStatus = "orange600";
      }
      let onlineStatusColumn = `<td><i class="material-icons ${onlineStatus}">face</i></td>`;
      $("#active-user-table").append('<tr>' + usernameColumn + onlineStatusColumn + '</tr>');
    }
  });

  function adjustMessageWindowSize() {
    const chatWindowY = $("#active-user-scroll").position().top;
    $('#active-user-scroll').css("height", window.innerHeight - chatWindowY - 20);
  }
});