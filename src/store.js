import { configureStore } from '@reduxjs/toolkit'

import auth from './features/authSlice'
import org from './features/orgSlice'
import ong from './features/ongSlice'

export default configureStore({
  reducer: {
    auth,
    org,
    ong
  },
})