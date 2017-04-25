(function() {
    function HomeCtrl() {
        this.heroTitle = "Its Chat Time!";
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', [HomeCtrl]);
})();


