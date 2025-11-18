using { GreenTrack as my } from '../db/schema.cds';

@path: '/service/greenTrack'
@requires: 'authenticated-user'
service greenTrackSrv {
  @odata.draft.enabled
  entity Addresses as projection on my.Addresses;
}