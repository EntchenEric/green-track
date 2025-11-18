namespace GreenTrack;
using { cuid } from '@sap/cds/common';

entity Addresses : cuid {
  street: String(100);
  city: String(50);
  postalCode: String(20);
  country: String(50);
}

