import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 12344,
  login: 'n-Dls',
};

export const sampleWithPartialData: IUser = {
  id: 29720,
  login: 'hA}5li@Yx',
};

export const sampleWithFullData: IUser = {
  id: 5356,
  login: 'Kf',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
