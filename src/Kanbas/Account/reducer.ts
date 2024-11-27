import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as enrollmentsClient from "../Enrollments/client";

const initialState = {
  currentUser: null,
  enrollments: [] as any[],
};

export const fetchEnrollments = createAsyncThunk(
  "account/fetchEnrollments",
  async () => {
    return await enrollmentsClient.getEnrollments();
  }
);

export const enrollInCourse = createAsyncThunk(
  "account/enrollInCourse",
  async ({ userId, courseId }: { userId: string; courseId: string }) => {
    return await enrollmentsClient.enrollInCourse(userId, courseId);
  }
);

export const unenrollFromCourse = createAsyncThunk(
  "account/unenrollFromCourse",
  async ({ userId, courseId }: { userId: string; courseId: string }) => {
    return await enrollmentsClient.unenrollFromCourse(userId, courseId);
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEnrollments.fulfilled, (state, action) => {
        state.enrollments = action.payload;
      })
      .addCase(enrollInCourse.fulfilled, (state, action) => {
        state.enrollments.push(action.payload);
      })
      .addCase(unenrollFromCourse.fulfilled, (state, action) => {
        state.enrollments = state.enrollments.filter(
          enrollment => enrollment._id !== action.payload._id
        );
      });
  },
});

export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;
