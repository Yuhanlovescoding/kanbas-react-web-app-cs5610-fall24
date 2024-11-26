import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState: { assignments: initialAssignments },
    reducers: {
        setAssignments: (state, { payload }) => {
            state.assignments = payload;
          },

        addAssignment: (state, { payload }) => {
            state.assignments.push(payload);
        },

        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(assignment => assignment._id !== assignmentId);
        },

        updateAssignment: (state, { payload }) => {
            state.assignments = state.assignments.map((assignment) =>
                assignment._id === payload._id ? { ...assignment, ...payload } : assignment
              );
        }
    }
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;