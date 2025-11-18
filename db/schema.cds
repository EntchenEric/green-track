namespace GreenTrack;

entity Article {
    ID   : Integer @sap.cds.auto.increment: true;
    name : String(100);
}

entity OrderItem {
    ID : Integer @sap.cds.auto.increment: true;

}

entity PurchaseOrderOrder {
    ID    : Integer @sap.cds.auto.increment: true;
    order : Integer;
}

entity PurchaseOrder {
    ID                 : Integer @sap.cds.auto.increment: true;
    orderItems         : Association to many OrderItem;
    purchaseOrderOrder : Association to many PurchaseOrderOrder;
}

entity Customer {
    ID   : Integer @sap.cds.auto.increment: true;
    name : String(100);
}

entity Address {
    ID       : Integer @sap.cds.auto.increment: true;
    street   : String(100);
    houseNo  : String(10);
    city     : String(100);
    postCode : String(5);
    country  : String(100);
}

entity Driver {
    ID   : Integer @sap.cds.auto.increment: true;
    name : String(100);
}

entity Certificat {
    ID   : Integer @sap.cds.auto.increment: true;
    name : String(100);
}

entity Vehicle {
    ID                 : Integer @sap.cds.auto.increment: true;
    licencePlate       : String(100);
    co_2EmissionsFull  : Decimal(10, 2);
    co_2EmissionsEmpty : Decimal(10, 2);
    maxCapacity        : Decimal(10, 2);
}

entity VehicleType {
    ID   : Integer @sap.cds.auto.increment: true;
    name : String(100);
}

entity RoutePlanner {
    ID : Integer @sap.cds.auto.increment: true;
}
