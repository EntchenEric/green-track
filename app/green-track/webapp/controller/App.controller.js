sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent"
], (BaseController, UIComponent) => {
  "use strict";

  return BaseController.extend("greentrack.controller.App", {
      onInit() {
      },

      onNavToDashboard() {
          const oRouter = UIComponent.getRouterFor(this);
          oRouter.navTo("Dashboard");
      }
  });
});