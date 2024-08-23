sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {
           
        },
        onPress:function(){
        //    var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
        //    oRouter.navTo("RouteView2")
        
        var name=this.getView().byId("username").getValue();
            var  msg="Welcome To "+name;
            this.getView().byId("idTxtuser").setText(msg);
            this.getOwnerComponent().getRouter().navTo("RouteView2")
        }
    });
});
