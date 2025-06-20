export interface AuthResponse {
  _id: string;
  email: string;
  token: string;
}
export interface AuthState {
    user: null | { _id: string; email: string };
    token: string | null;
    loading: boolean;
    error: string | null;
}

export interface LoginPayload{
    email:string;
    password:string;
}

export interface RegisterPayload{
    email:string;
    password:string;
}