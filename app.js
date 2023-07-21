
(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl = this;

        toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyCtrl.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtCtrl = this;

        alreadyBoughtCtrl.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var items = [
            { name: "cookies", quantity: 10 },
            { name: "cokes", quantity: 2 },
            { name: "beers", quantity: 6 },
            { name: "apples", quantity: 4 },
            { name: "bananas", quantity: 7 },
            { name: "guava", quantity: 7 }, 
            { name: "mango", quantity: 7 },
        ];

        var alreadyBoughtItems = [];

        service.buyItem = function(itemIndex) {
            var item = items[itemIndex];

            alreadyBoughtItems.push(item);
            items.splice(itemIndex, 1);
        };

        service.getToBuyItems = function() {
            return items;
        };

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };
    }
})();

