export interface CurrentUser {
  name: string;
  email: string;
  role?: Role;
}

export enum Role {
  ADMIN = "ADMIN",
  DEFAULT = "DEFAULT",
}

export interface LoginRequest {
  user: string;
  password: string;
}
