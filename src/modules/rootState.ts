import { combineReducers } from '@reduxjs/toolkit'
import sampleModule, { SampleState } from './sampleModule'

export interface RootState {
  sample: SampleState
}

export const rootReducer = combineReducers({
  sample: sampleModule.reducer
})
