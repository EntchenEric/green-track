sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (UIComponent, History, Controller, JSONModel, MessageToast, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("greentrack.controller.Kontakte", {
        onInit: function () {
            // Mock-Daten für konsistente Anzeige
            var aContacts = [
                {
                    initials: "TM",
                    color: "Accent1",
                    name: "Thomas Müller",
                    role: "Senior Fahrer",
                    vehicleText: "E-Sprinter",
                    vehicleIcon: "sap-icon://car-rental",
                    vehicleState: "None",
                    infoText: "ID: 8821",
                    status: "Verfügbar",
                    statusState: "Success",
                    statusIcon: "sap-icon://accept",
                    phoneVisible: true,
                    emailVisible: false
                },
                {
                    initials: "AS",
                    color: "Accent5",
                    name: "Anna Schmidt",
                    role: "Leitung Disposition",
                    vehicleText: "Zentrale Berlin",
                    vehicleIcon: "sap-icon://building",
                    vehicleState: "None",
                    infoText: "Etage 3",
                    status: "Im Meeting",
                    statusState: "Warning",
                    statusIcon: "sap-icon://discussion", // KORRIGIERT: Standard Icon für Meetings
                    phoneVisible: false,
                    emailVisible: true
                },
                {
                    initials: "LW",
                    color: "Accent2",
                    name: "Lisa Weber",
                    role: "Fernkraftfahrer",
                    vehicleText: "Diesel LKW",
                    vehicleIcon: "sap-icon://shipping-status",
                    vehicleState: "Error",
                    infoText: "ID: 9901",
                    status: "Im Stau",
                    statusState: "Error",
                    statusIcon: "sap-icon://jam",
                    phoneVisible: true,
                    emailVisible: false
                },
                {
                    initials: "MK",
                    color: "Accent8",
                    name: "Max Klein",
                    role: "Stadt-Kurier",
                    vehicleText: "Lastenrad XL",
                    vehicleIcon: "sap-icon://physical-activity",
                    vehicleState: "Success",
                    infoText: "ID: 5502",
                    status: "Pause",
                    statusState: "Information",
                    statusIcon: "sap-icon://meal",
                    phoneVisible: true,
                    emailVisible: false
                },
                {
                    initials: "KY",
                    color: "Accent6",
                    name: "Kemal Yilmaz",
                    role: "Werkstattleiter",
                    vehicleText: "Werkstatt Nord",
                    vehicleIcon: "sap-icon://wrench",
                    vehicleState: "None",
                    infoText: "Intern",
                    status: "Beschäftigt",
                    statusState: "Indication06",
                    statusIcon: "sap-icon://busy",
                    phoneVisible: true,
                    emailVisible: true
                },
                {
                    initials: "SN",
                    color: "Accent4",
                    name: "Sophie Neumann",
                    role: "Fahrerin",
                    vehicleText: "E-Transporter",
                    vehicleIcon: "sap-icon://car-rental",
                    vehicleState: "Success",
                    infoText: "ID: 3312",
                    status: "Lädt",
                    statusState: "Information",
                    statusIcon: "sap-icon://energy-saving-lightbulb", // KORRIGIERT: Energie-Icon fürs Laden
                    phoneVisible: true,
                    emailVisible: false
                },
                {
                    initials: "DR",
                    color: "Accent3",
                    name: "Dr. David Richter",
                    role: "Flottenmanagement",
                    vehicleText: "HQ Hamburg",
                    vehicleIcon: "sap-icon://building",
                    vehicleState: "None",
                    infoText: "Management",
                    status: "Im Urlaub",
                    statusState: "Indication01",
                    statusIcon: "sap-icon://flight",
                    phoneVisible: false,
                    emailVisible: true
                }
            ];

            var oModel = new JSONModel({ 
                contacts: aContacts, 
                count: aContacts.length 
            });
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

        onSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("query");
            var aFilters = [];
            if (sQuery && sQuery.length > 0) {
                aFilters.push(new Filter("name", FilterOperator.Contains, sQuery));
            }
            var oTable = this.byId("contactsTable");
            var oBinding = oTable.getBinding("items");
            oBinding.filter(aFilters);
        },

        onPressAction: function (oEvent) {
            var sIcon = oEvent.getSource().getIcon();
            var sAction = sIcon.includes("call") ? "Anruf gestartet" : "E-Mail Client geöffnet";
            MessageToast.show(sAction);
        }
    });
});