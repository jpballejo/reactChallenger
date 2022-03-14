import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './ItemSlicer'
import dataReducer from './DataSlicer'

export default configureStore({
  reducer: {
    items: itemReducer,
    data: dataReducer,
  },
})