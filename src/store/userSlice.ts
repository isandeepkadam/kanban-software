import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface userInterface {
  firstName: string
  lastName?: string
  dob?: string
  username: string
  email: string
  password: string
}

const initialState: userInterface = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state: userInterface, action: PayloadAction<userInterface>) => {
      return { ...state, username: action.payload.username }
    },
  },
})

export const { loginUser } = userSlice.actions
