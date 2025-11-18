sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("greentrack.controller.Vehicles", {

        onInit: function () {
            // Hardcoded Vehicle Data
            var aVehicles = [
                {
                    licensePlate: "VH-001",
                    vehicleType: "Electric Van",
                    subtitle: "Battery Van",
                    tonnage: "3.5 t",
                    fuelType: "Electric",
                    emissions: "0 kg CO₂",
                    certificates: 2,
                    status: "Active",
                    statusState: "Success" // String compatible with ObjectStatus 'state' property
                },
                {
                    licensePlate: "VH-002",
                    vehicleType: "Diesel Truck",
                    subtitle: "12t Truck",
                    tonnage: "12 t",
                    fuelType: "Combustion",
                    emissions: "245 kg CO₂",
                    certificates: 4,
                    status: "Maintenance",
                    statusState: "Warning" 
                },
                {
                    licensePlate: "VH-004",
                    vehicleType: "Hybrid Truck",
                    subtitle: "Hybrid 10t Truck",
                    tonnage: "10 t",
                    fuelType: "Hybrid",
                    emissions: "140 kg CO₂",
                    certificates: 3,
                    status: "Inactive",
                    statusState: "Error"
                },
                {
                    licensePlate: "VH-005",
                    vehicleType: "Electric Van",
                    subtitle: "Light Haul",
                    tonnage: "3.0 t",
                    fuelType: "Electric",
                    emissions: "0 kg CO₂",
                    certificates: 1,
                    status: "Active",
                    statusState: "Success"
                },
                {
                    licensePlate: "VH-006",
                    vehicleType: "Diesel Truck",
                    subtitle: "Heavy Haul",
                    tonnage: "15 t",
                    fuelType: "Combustion",
                    emissions: "300 kg CO₂",
                    certificates: 5,
                    status: "Active",
                    statusState: "Success"
                }
            ];

            // Create a JSON Model and set the data
            var oModel = new JSONModel({
                Vehicles: aVehicles
            });
            this.getView().setModel(oModel);
        },

        // Event handlers to fulfill XML View requirements
        onNavToGreenTrack: function () {
            // Implement navigation logic here
        },
        onSearch: function (oEvent) {
            // Implement search/filter logic here
        },
        onFilterPress: function () {
            // Implement filter dialog/popover logic here
        }
    });
});