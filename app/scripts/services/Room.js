(function() {
  function Room($firebaseArray) {

    var roomsRef = firebase.database().ref().child("rooms");
    var messagesRef = firebase.database().ref().child("messages");
    var rooms = $firebaseArray(roomsRef);
    var messages = $firebaseArray(messagesRef);

    var roomService = {};


    roomService.all = rooms;

    roomService.addRoom = function (roomTitle) {
      rooms.$add({
        name: roomTitle,
        created_at: firebase.database.ServerValue.TIMESTAMP
      });
    };

    roomService.addMessage = function(userName, content, room) {

      messages.$add({
        username: userName,
        content: content,
        sent_at: firebase.database.ServerValue.TIMESTAMP,
        roomID: room.$id
          
      });
    };
      
      


    roomService.getMessages = function(room) {
        
        console.log("room.$id", room.$id);

      return $firebaseArray(messagesRef.orderByChild('roomID').equalTo(room.$id));
//        return $firebaseArray(messagesRef.orderByChild('roomID').equalTo('-KiBC8C_1tcj3EdC2Etu'));
        


    };

    return roomService;
  }


  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();