namespace GreenTrack;

using { cuid, managed, Country, Currency } from '@sap/cds/common';

entity SystemSettings : cuid, managed {
    key settingKey : String(50);
    value          : Decimal(10, 2);
    description    : String(255);
}

entity Products : cuid, managed {
    name        : String(100);
    description : String(500);
    weightKG    : Decimal(10, 2);
    price       : Decimal(10, 2);
    currency    : Currency;
}

entity Customers : cuid, managed {
    name           : String(100);
    email          : String(255);
    primaryAddress : Composition of Addresses;
    orders         : Association to many PurchaseOrders on orders.customer = $self;
}

entity Addresses : cuid, managed {
    street   : String(100);
    houseNo  : String(10);
    city     : String(100);
    postCode : String(20);
    country  : Country;
}

entity Drivers : cuid, managed {
    firstName     : String(100);
    lastName      : String(100);
    licenseNumber : String(50);
    certificates  : Association to many Certificates on certificates.driver = $self;
}

entity Certificates : cuid, managed {
    name      : String(100);
    validFrom : Date;
    validTo   : Date;
    type      : String(50) enum { License; Safety; Hazmat; EcoDriving };
    driver    : Association to Drivers;
    vehicle   : Association to Vehicles;
}

entity Vehicles : cuid, managed {
    licensePlate      : String(20);
    vehicleType       : Association to VehicleTypes;
    status            : String(20) enum { Active; Maintenance; Retired };
    co2EmissionsFull  : Decimal(10, 2);
    co2EmissionsEmpty : Decimal(10, 2);
    maxCapacityWeight : Decimal(10, 2);
    certificates      : Association to many Certificates on certificates.vehicle = $self;
}

entity VehicleTypes : cuid {
    name        : String(100);
    description : String(255);
    vehicles    : Association to many Vehicles on vehicles.vehicleType = $self;
}

entity PurchaseOrders : cuid, managed {
    orderNumber   : String(20);
    customer      : Association to Customers;
    status        : String(20) enum { New; Planned; Shipped; Delivered; Cancelled };
    items         : Composition of many OrderItems on items.order = $self;
    assignedRoute : Association to Routes;
}

entity OrderItems : cuid {
    order    : Association to PurchaseOrders;
    product  : Association to Products;
    quantity : Integer;
}

entity Routes : cuid, managed {
    routeDate     : Date;
    status        : String(20) enum { Planned; InProgress; Completed };
    driver        : Association to Drivers;
    vehicle       : Association to Vehicles;
    totalDistance : Decimal(10, 2);
    actualCO2     : Decimal(10, 2);
    baselineCO2   : Decimal(10, 2);
    co2Saved      : Decimal(10, 2);
    orders        : Association to many PurchaseOrders on orders.assignedRoute = $self;
}

