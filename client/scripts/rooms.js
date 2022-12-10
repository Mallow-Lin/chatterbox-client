// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _roomList: [$('<option class="room">lobby</option>')],
  _roomNameList: ['lobby'],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  updateList: function() {
    _.each(App.data, function(message) {
      if (!Rooms._roomNameList.includes(message.roomname)) {
        var roomName = escaper(message.roomname);
        // var roomName = message.roomname;

        var $roomElement = $(`<option class="room">${roomName}</option>`);
        Rooms._roomNameList.push(message.roomname);
        Rooms._roomList.push($roomElement);
      }
    });
  },
  getList: function() {
    return Rooms._roomList;
  },

  add: function() {
    var roomName = prompt('Enter Room Name');
    RoomsView.renderRoom(roomName);
  },
};
