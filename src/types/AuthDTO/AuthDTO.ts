export enum Role {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  DOCTOR = 'DOCTOR',
  CLIENT = 'CLIENT',
  UNVERIFIED_CLIENT = 'UNVERIFIED_CLIENT',
}
export type Username = string;

export type AuthBody = {
  username: Username;
  password: string;
};

export interface IAuthResponse {
  jwtToken: 'string';
  role: Role;
}
