import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState: { assignments: initialAssignments },
    reducers: {
        addAssignment: (state, { payload }) => {
            state.assignments = [...state.assignments, { ...payload, 
                _id: new Date().getTime().toString(),
                startTime: payload.startTime || new Date().toISOString(),
                dueTime: payload.dueTime || new Date().toISOString(), 
                course: payload.course || "" }];
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(assignment => assignment._id !== assignmentId);
        },
        updateAssignment: (state, { payload }) => {
            state.assignments = state.assignments.map(assignment =>
                assignment._id === payload._id ? { ...assignment, ...payload.updates } : assignment
            );
        }
    }
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;