import { configureStore } from '@reduxjs/toolkit'

import auth from './features/authSlice'

export default configureStore({
  reducer: {
    auth
  },
})