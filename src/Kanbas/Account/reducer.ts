import { createSlice } from "@reduxjs/toolkit";
import enrollmentsData from "../Database/enrollments.json";

const initialState = {
  currentUser: null,
  enrollments: enrollmentsData,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    enroll: (state, action) => {
      const newEnrollment = { _id: Date.now().toString(), ...action.payload };
      state.enrollments.push(newEnrollment);
    },
    unenroll: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => 
          !(enrollment.user === action.payload.user && enrollment.course === action.payload.course)
      );
    },
  },
});
export const { setCurrentUser, enroll, unenroll } = accountSlice.actions;
export default accountSlice.reducer;