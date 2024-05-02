import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b329ea5f-d969-4768-acc2-ee5ec0713a2a',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f9b6be08-6ce8-4bff-9eed-68be84fd590c',
};

export const sampleWithFullData: IAuthority = {
  name: '8d062b45-c873-453d-a98b-baff2fb9677e',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
