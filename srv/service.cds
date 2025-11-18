using { GreenTrack as my } from '../db/schema.cds';

@path: '/service/greenTrack'
@requires: 'authenticated-user'
service greenTrackSrv {
  entity Addresses as projection on my.Addresses;

  @odata.draft.enabled
  entity Drivers as projection on my.Drivers;

  @odata.draft.enabled
  entity Certificates as projection on my.Certificates;

  @odata.draft.enabled
  entity Vehicles as projection on my.Vehicles;

  @odata.draft.enabled
  entity Products as projection on my.Products;

  entity OrderItems as projection on my.OrderItems;

  @odata.draft.enabled
  entity PurchaseOrders as projection on my.PurchaseOrders;

  @odata.draft.enabled
  entity Customers as projection on my.Customers;

  @odata.draft.enabled
  entity VehicleTypes as projection on my.VehicleTypes;

  @odata.draft.enabled
  @cds.redirection.target
  entity Routes as projection on my.Routes;

  //@odata.draft.enabled
  //entity GlobalDashboard as projection on my.GlobalDashboard;
}