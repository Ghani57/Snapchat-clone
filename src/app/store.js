import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../Features/Movies/MovieSlice'
import userSlice from '../Features/User/UserSlice';

export const store = configureStore({
     reducer: {
          movie: movieReducer,
          user: userSlice
     },
})