define(["require", "exports", 'aurelia-dialog'], function (require, exports, aurelia_dialog_1) {
    "use strict";
    var ViewBeer = (function () {
        function ViewBeer(controller) {
            this.controller = controller;
        }
        ViewBeer.prototype.activate = function (beer) {
            this.beer = beer;
        };
        ViewBeer.inject = [aurelia_dialog_1.DialogController];
        return ViewBeer;
    }());
    exports.ViewBeer = ViewBeer;
});
//# sourceMappingURL=view-beer.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy92aWV3LWJlZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsid2lkZ2V0cy92aWV3LWJlZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFHQTtRQU1FLGtCQUFZLFVBQTRCO1lBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQy9CLENBQUM7UUFFRCwyQkFBUSxHQUFSLFVBQVMsSUFBUztZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQixDQUFDO1FBWE0sZUFBTSxHQUFHLENBQUMsaUNBQWdCLENBQUMsQ0FBQztRQVlyQyxlQUFDO0lBQUQsQ0FBQyxBQWJELElBYUM7SUFiWSxnQkFBUSxXQWFwQixDQUFBIn0=
