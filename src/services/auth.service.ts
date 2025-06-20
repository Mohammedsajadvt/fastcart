import API from './api.service';
import type { LoginPayload, RegisterPayload } from '../types/authTypes';


export const loginAPI = (data:LoginPayload) => API.post('/api/admin/login',data);
export const registerAPI = (data:RegisterPayload) => API.post('/api/admin/register',data);
