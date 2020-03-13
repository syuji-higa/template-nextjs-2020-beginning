import { createSlice } from '@reduxjs/toolkit'

export type SampleState = {
  value: string
}

export const sampleInitialState: SampleState = {
  value: ''
}

const sampleModule = createSlice({
  name: 'sample',
  initialState: sampleInitialState,
  reducers: {
    update: (state): SampleState => {
      return { value: state.value }
    }
  }
})

export default sampleModule
