(function(){
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages =  $firebaseArray(ref);
    this.myMessage = {};

      console.log(messages);
      
    this.myMessage.send = function(userName, content, room) {

      messages.$add({
        username: userName,
        content: content,
        sent_at: firebase.database.ServerValue.TIMESTAMP,
        roomID: room.$id
      });

    };

    return this.myMessage;

console.log(messages);
  }

  angular
    .module('blocChat')
    .factory('Message',['$firebaseArray','$cookies', Message]);
})();