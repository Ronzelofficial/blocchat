(function() {
    function RoomCtrl($scope, $uibModal, Room, Message, $firebaseArray ) {
        $scope.rooms = Room;
        $scope.currentRoom = null;
        $scope.message = null;
        
        $scope.open = function() {
            $uibModal.open({
                templateUrl: 'roomsModal.html',
                controller: 'ModalInstanceCtrl'
            })
        };
        
            
        $scope.setCurrentRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Room.getMessages(room.$id);
        };
        
        return $scope.rooms;
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', '$uibModal', 'Room','Message', RoomCtrl]);
})();


