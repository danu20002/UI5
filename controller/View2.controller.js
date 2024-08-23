sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View2", {
        onInit: function () {
           
        },
        onPress:function(){
           var onRouter=sap.ui.core.UIComponent.getRouterFor(this);
           onRouter.navTo("RouteView1")
        }
    });
});
