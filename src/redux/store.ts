import { configureStore } from "@reduxjs/toolkit";
// import your reducers here

export const store = configureStore({
  reducer: {
    // Add your reducers here
    // trainingPoint: trainingPointReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;