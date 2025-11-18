using { greenTrackSrv } from '../srv/service.cds';

annotate greenTrackSrv.Addresses with @UI.HeaderInfo: { TypeName: 'Address', TypeNamePlural: 'Addresses' };
annotate greenTrackSrv.Addresses with {
  street @title: 'Street';
  city @title: 'City';
  postalCode @title: 'Postal Code';
  country @title: 'Country'
};

annotate greenTrackSrv.Addresses with @UI.LineItem: [
 { $Type: 'UI.DataField', Value: street },
 { $Type: 'UI.DataField', Value: city },
 { $Type: 'UI.DataField', Value: postalCode },
 { $Type: 'UI.DataField', Value: country }
];

annotate greenTrackSrv.Addresses with @UI.FieldGroup #Main: {
  $Type: 'UI.FieldGroupType', Data: [
 { $Type: 'UI.DataField', Value: street },
 { $Type: 'UI.DataField', Value: city },
 { $Type: 'UI.DataField', Value: postalCode },
 { $Type: 'UI.DataField', Value: country }
  ]
};

annotate greenTrackSrv.Addresses with @UI.Facets: [
  { $Type: 'UI.ReferenceFacet', ID: 'Main', Label: 'General Information', Target: '@UI.FieldGroup#Main' }
];

