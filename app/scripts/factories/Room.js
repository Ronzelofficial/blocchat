(function() {
    function Room($firebaseArray) {
//        var firebaseRef = new Firebase("https://bloc-chat-fbcae.firebaseio.com");
//        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        var ref = firebase.database().ref().child("rooms"); 
        var rooms = $firebaseArray(ref);
        
        return {
            rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();