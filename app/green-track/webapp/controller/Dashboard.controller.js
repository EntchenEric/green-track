sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, History, Controller, JSONModel) {
    "use strict";

    return Controller.extend("greentrack.controller.Dashboard", {
        onInit: function () {
            // Create a JSON model for statistics
            const oStatisticsModel = new JSONModel({
                totalRoutesDriven: 1234,
                totalFleetSize: 56,
                averageFleetUtilization: "85%",
                stat1: "Value 1",
                stat2: "Value 2",
                stat3: "Value 3",
                fleetData: [
                    { fleet: "Fleet A", utilization: 75 },
                    { fleet: "Fleet B", utilization: 85 },
                    { fleet: "Fleet C", utilization: 90 }
                ]
            });
            this.getView().setModel(oStatisticsModel, "statistics");

            // Create a JSON model for details
            const oDetailsModel = new JSONModel({
                detail1: "Description 1",
                detail2: "Description 2",
                detail3: "Description 3"
            });
            this.getView().setModel(oDetailsModel, "details");
        },

        onNavBack: function () {
            const sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("Green-Track", {}, true);
            }
        }
    });
});