import { configureStore } from '@reduxjs/toolkit'

import auth from './features/authSlice'
import org from './features/orgSlice'
export default configureStore({
  reducer: {
    auth,
    org,
  },
})