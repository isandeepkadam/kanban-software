import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface taskInterface {
  title: string
  description: string
  creationDate: Date
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
