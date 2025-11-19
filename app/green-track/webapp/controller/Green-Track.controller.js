sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], (Controller, UIComponent) => {
    "use strict";

    return Controller.extend("greentrack.controller.Green-Track", {
        onInit() {
            // Use the dashboard model from the owner component/view if available, 
            // or let it inherit from the parent view (App.view.xml) which sets the 'dashboard' model.
        },

        onNavToDashboard: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteDashboard");
        },

        onNavToFahrzeuge: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteFahrzeuge");
        },

        onNavToRoutenoptimierung: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteRoutenoptimierung");
        }
    });
});