import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch, FaCaretDown } from 'react-icons/fa';
import { BsGripVertical } from "react-icons/bs"; 
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import AssignmentControlButtons from './AssignmentControlButtons';


export default function Assignments() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cid } = useParams<{ cid: string }>();
  const assignments = useSelector((state: any) =>
    state.assignmentsReducer.assignments.filter((assignment: any) => assignment.course === cid)
  );
  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

    return (
      <div id="wd-assignments" className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <div className="input-group w-50">
          <span className="input-group-text">
            <FaSearch />
          </span>
        <input id="wd-search-assignment" 
               className="form-control w-50"
               placeholder="Search for Assignments" />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-outline-secondary me-2">
            + Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger" onClick={handleAddAssignment}>
            + Assignment
          </button>
        </div>
      </div>


      <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <FaCaretDown className="me-2 fs-9" />
            ASSIGNMENTS
        </div>
        <div className="d-flex align-items-center">
          <div className="ms-3 px-3 py-1 text-dark" style={{ 
            borderRadius: '15px',  
            border: '2px solid #000',  
            display: 'inline-block' 
          }}>
            40% of Total
          </div>
          <ModuleControlButtons />
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-group">
      {assignments.map((assignment: any) => (
      <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderRadius: '0', borderLeft: '4px solid #28a745'}}>
      <div className="d-flex align-items-center">
        <AssignmentControlButtons cid={cid!} aid={assignment._id}/>
          <div className="ms-3">
              <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link  fs-5">
                {assignment.title}
              </Link>
              <br />
              <small className="text-muted">
                <span className="text-danger">{assignment.modulesInvolved}</span> | {assignment.availability}</small>
              <br />
              <small><b>Due:</b> {assignment.dueDate} | {assignment.points}</small>
            </div>
          </div>
            <div className="d-flex align-items-center ms-auto">
              <LessonControlButtons aid={assignment._id}/>
            </div>
          </li>
      ))}
      </ul>
    </div>
  );
}
  
  