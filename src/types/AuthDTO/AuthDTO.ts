export type Role = string;
export type Username = string;

export type AuthBody = {
  username: Username;
  password: string;
};

export interface IAuthResponse {
  jwtToken: 'string';
  role: Role;
}
