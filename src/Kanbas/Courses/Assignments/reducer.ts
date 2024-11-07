import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import assignments from '../../Database/assignment.json';

const initialState = {
    assignments: assignments,
  };
  
  const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, { payload: assignment }) => {
        const newAssignment = {
          _id: new Date().getTime().toString(),
          ...assignment,
        };
        state.assignments = [...state.assignments, newAssignment];
      },
      deleteAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.filter(
          (a) => a._id !== assignmentId
        );
      },
      updateAssignment: (state, { payload: updatedAssignment }) => {
        state.assignments = state.assignments.map((a) =>
          a._id === updatedAssignment._id ? updatedAssignment : a
        );
      },
    },
  });
  
  export const { addAssignment, deleteAssignment, updateAssignment } =
    assignmentsSlice.actions;
  export default assignmentsSlice.reducer;