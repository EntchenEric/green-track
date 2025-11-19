sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/Popover"
], function (UIComponent, Controller, MessageBox, Popover) {
    "use strict";

    return Controller.extend("greentrack.controller.App", {
        onInit: function () {
            // Mock data for alerts
            var oDashboardModel = new JSONModel({
                Alerts: [
                    {
                        type: "Critical",
                        message: "Fahrzeug im Einsatz trotz Stilllegung",
                        description: "Fahrzeug M-GT 107 (Retired) ist auf aktiver Route 31e30d75 gemeldet.",
                        vehicleID: "M-GT 107",
                        status: "Error",
                        statusText: "Kritisch",
                        icon: "sap-icon://alert"
                    },
                    {
                        type: "Warning",
                        message: "Wartungsfahrzeug eingeplant",
                        description: "H-FC 902 (Maintenance) wurde für Route 41434fe3 (Planned) eingeteilt.",
                        vehicleID: "H-FC 902",
                        status: "Warning",
                        statusText: "Warnung",
                        icon: "sap-icon://message-warning"
                    },
                    {
                        type: "Critical",
                        message: "Gefahrgut-Zertifikat abgelaufen",
                        description: "Zertifikat für F-HY 500 ist am 01.11.2025 abgelaufen.",
                        vehicleID: "F-HY 500",
                        status: "Error",
                        statusText: "Abgelaufen",
                        icon: "sap-icon://certificate"
                    }
                ]
            });
            this.getView().setModel(oDashboardModel, "dashboard");
        },

        onSideNavButtonPress: function () {
            var oToolPage = this.byId("toolPage");
            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
        },

        onNavToHome: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteGreen-Track");
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
        },


        onNavToKontakte: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteKontakte");
        },
        
        onUserPress: function () {
             // User action
        },

        onNavToVehicles: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteVehicles"); // Ensure the route name matches the manifest
        },

        onNotificationPress: function (oEvent) {
            const oButton = oEvent.getSource();
            const oPopover = this.byId("notificationPopover");
            oPopover.openBy(oButton);
        },

        onItemClose: function (oEvent) {
            const oItem = oEvent.getSource();
            oItem.destroy();
        },

        onAcceptPress: function () {
            MessageBox.success("Accepted!");
        },

        onRejectPress: function () {
            MessageBox.error("Rejected!");
        },

        onListItemPress: function (oEvent) {
            const oItem = oEvent.getSource();
            MessageBox.information(`Item pressed: ${oItem.getTitle()}`);
        }
    });
});