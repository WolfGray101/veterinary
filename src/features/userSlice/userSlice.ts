import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IAuthResponse, Role } from '../../types/AuthDTO/AuthDTO';

const initialState = {
  jwtToken: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjFAZW1haWwuY29tIiwiaWF0IjoxNjc1NzgxMzc1LCJleHAiOjE2Nzc3ODEzNzV9.T5S' +
    'PXzCg1fZ4_fF-vCpX4GDUPyfr3Mx9SLnntkAQHfo-AYNzNAYE7m7fZfQnut7UES17a259WIkHjGeDnqR7rw',
  role: Role.ADMIN,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    pushAuth(state, action: PayloadAction<IAuthResponse>) {
      state.jwtToken = action.payload.jwtToken;
      state.role = action.payload.role;
    },
    logout(state) {
      state.jwtToken = initialState.jwtToken;
      state.role = initialState.role;
    }
  }
});

export const { pushAuth, logout } = userSlice.actions;
