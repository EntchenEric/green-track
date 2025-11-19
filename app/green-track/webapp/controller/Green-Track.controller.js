sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
    "use strict";

    return Controller.extend("greentrack.controller.Green-Track", {
        onInit: function () {
            // Controller initialization logic
        },

        /**
         * Navigation handlers for the tiles
         */
        onNavToDashboard: function () {
            this.getRouter().navTo("RouteDashboard");
        },

        onNavToFahrzeuge: function () {
            this.getRouter().navTo("RouteFahrzeuge"); // Achte auf konsistente Benennung in manifest.json
        },

        onNavToRoutenoptimierung: function () {
            this.getRouter().navTo("RouteRoutenoptimierung");
        },

        onNavToKontakte: function () {
            this.getRouter().navTo("RouteKontakte");
        },

        // Helper to access the router easily
        getRouter: function () {
            return UIComponent.getRouterFor(this);
        }
    });
});