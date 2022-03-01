import { configureStore } from '@reduxjs/toolkit'

import auth from './features/authSlice'
import org from './features/orgSlice'
import pagination from './features/paginationSlice'
import search from './features/searchSlice'
import ong from './features/ongSlice'
export default configureStore({
  reducer: {
    auth,
    org,
    pagination,
    search,
    ong
  },
})