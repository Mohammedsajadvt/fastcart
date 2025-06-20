import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, registerAPI } from '../../services/auth.service';
import type { LoginPayload, RegisterPayload, AuthResponse } from '../../types/authTypes';

interface AuthState {
  user: AuthResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (data: LoginPayload, { rejectWithValue }) => {
    try {
      const res = await loginAPI(data);
      localStorage.setItem('token', res.data.token);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (data: RegisterPayload, { rejectWithValue }) => {
    try {
      const res = await registerAPI(data);
      localStorage.setItem('token', res.data.token);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Registration failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
