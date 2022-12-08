// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  /*render: _.template(`
      <!--
      <div class="chat">
        <div class="username"></div>
        <div class="text"></div>
      </div>
      -->
    `)*/
  render: function(message) { //{} Appends everything
    $(document).ready(function() {
      var $chat = $('<div class="chat"></div>');
      var username = message.username;
      var $username = $(`<div class="username">${username}</div>`);
      var text = message.text;
      var $text = (`<div class="text">${text}</div>`);
      $('#chats').append($chat);
      $chat.append([$username, $text]);
    });
  }

};