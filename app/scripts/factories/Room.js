(function() {
    function Room($firebaseArray) {
        
        var ref = firebase.database().ref().child("rooms"); 
        var rooms = $firebaseArray(ref);
        
        return {
            rooms,
            getMessage: function() {
                return $firebaseArray(ref.child('messages').orderByChild("roomID").equalTo(roomId));
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();