sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/BusyIndicator",
    "sap/m/MessageToast",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
], function (Controller, JSONModel, BusyIndicator, MessageToast, History, UIComponent) {
    "use strict";

    return Controller.extend("greentrack.controller.Routenoptimierung", {

        onInit: function () {
            // 1. Create the Data Model with initial values
            var oData = {
                config: {
                    fleet: "mix", // Default selection
                    startPoint: "Berlin, Logistikzentrum Süd"
                },
                ui: {
                    resultsVisible: false // Controls Empty State vs Results
                },
                results: {
                    // OPTION A (The LKW)
                    optionA: {
                        cost: "185,00",
                        status: "Ineffizient",
                        statusState: "Error", // Red
                        co2: "45 kg (Hoch)",
                        co2State: "Error"
                    },
                    // OPTION B (The Split)
                    optionB: {
                        visible: true,
                        cost: "112,50",
                        savings: "72,50",
                        percent: 39,
                        co2: "12 kg (Minimal)"
                    }
                }
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "view");
        },

        onNavBack: function () {
            const sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("RouteDashboard", {}, true);
            }
        },

        // Triggered when the "Calculate" button is pressed
        onCalculate: function () {
            var oModel = this.getView().getModel("view");
            var sFleet = oModel.getProperty("/config/fleet");

            // 1. Simulate "Thinking" time
            BusyIndicator.show(0);

            setTimeout(function () {
                BusyIndicator.hide();
                MessageToast.show("Route neu berechnet.");
                
                // Show results, hide empty state
                oModel.setProperty("/ui/resultsVisible", true);

                // 2. CHANGE THE DATA based on the Dropdown selection
                if (sFleet === "mix") {
                    // Scenario: Mixed Fleet (Good savings)
                    oModel.setProperty("/results/optionA/cost", "185,00");
                    oModel.setProperty("/results/optionA/status", "Ineffizient");
                    oModel.setProperty("/results/optionA/statusState", "Error");
                    
                    // Show Option B
                    oModel.setProperty("/results/optionB/visible", true);
                    oModel.setProperty("/results/optionB/cost", "112,50");
                    oModel.setProperty("/results/optionB/savings", "72,50");
                    oModel.setProperty("/results/optionB/percent", 39);

                } else if (sFleet === "truck") {
                    // Scenario: Only Truck (No split possible, slightly cheaper than A before, but no B)
                    oModel.setProperty("/results/optionA/cost", "165,00");
                    oModel.setProperty("/results/optionA/status", "Standard");
                    oModel.setProperty("/results/optionA/statusState", "Warning"); // Orange
                    oModel.setProperty("/results/optionA/co2", "42 kg (Mittel)");
                    oModel.setProperty("/results/optionA/co2State", "Warning");

                    // Hide Option B (cannot split if only truck is selected)
                    oModel.setProperty("/results/optionB/visible", false); 
                }

            }, 1500); // 1.5 seconds delay
        },

        onOrdersSelected: function(oEvent) {
            // Optional: Update cost slightly when adding items
            var iCount = oEvent.getParameter("selectedItems").length;
            // Just a visual feedback
             MessageToast.show(iCount + " Aufträge ausgewählt");
        }
    });
});