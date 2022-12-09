// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    Rooms.updateList();
    $(document).ready(function() {
      Rooms.getList().forEach(function(curRoom) {
        RoomsView.$select.append(curRoom);
      });
    });
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    MessagesView.clearMessage();
    $(document).ready(function() {
      _each(App.data, function(message) {
        if (message.roomname === roomname) {
          MessagesView.renderMessage(message);
        }
      });
    });
  },

  handleChange: function(event) {
    console.log(event);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};