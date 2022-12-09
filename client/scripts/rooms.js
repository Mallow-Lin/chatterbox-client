// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _roomList: [],
  _roomNameList: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  updateList: function() {
    _.each(App.data, function(message) {
      if (!Rooms._roomNameList.includes(message.roomname)) {
        var $roomElement = $(`<option class="room">${message.roomname}</option>`);
        Rooms._roomNameList.push(message.roomname);
        Rooms._roomList.push($roomElement);
      }
    });
  },
  getList: function() {
    return Rooms._roomList;
  },

  createRoom: function() {},
};
