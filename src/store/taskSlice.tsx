import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface taskInterface {
  id: number
  title: string
  description: string
  creationDate: string
  tags: string[]
  creator: string
  status: string
}

const initialState: taskInterface[] = []

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    createTask: (
      state: taskInterface[],
      action: PayloadAction<taskInterface>
    ) => {
      state.push(action.payload)
    },
  },
})

export const { createTask } = taskSlice.actions
