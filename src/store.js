import { configureStore } from '@reduxjs/toolkit'

import auth from './features/authSlice'
import org from './features/orgSlice'
import pagination from './features/paginationSlice'
export default configureStore({
  reducer: {
    auth,
    org,
    pagination
  },
})