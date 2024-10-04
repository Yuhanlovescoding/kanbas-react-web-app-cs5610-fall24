import { FaSearch } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import { BsGripVertical } from "react-icons/bs"; 
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LeesonControlButtons";
import AssignmentControlButtons from './AssignmentControlButtons';

export default function Assignments() {
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
          <button id="wd-add-assignment" className="btn btn-danger">
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
       
      <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderRadius: '0', borderLeft: '4px solid #28a745'}}>
      <div className="d-flex align-items-center">
        <AssignmentControlButtons />
          <div className="ms-3">
              <a className="wd-assignment-link  fs-5"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A1
              </a>
              <br />
              <small className="text-muted">
                <span className="text-danger">Multiple Modules</span> | Not available until May 6 at 12:00am</small>
              <br />
              <small><b>Due:</b> May 13 at 11:59pm | 100 pts</small>
            </div>
          </div>
            <div className="d-flex align-items-center ms-auto">
              <LessonControlButtons />
            </div>
          </li>
        
          <li className="list-group-item d-flex justify-content-between align-items-center" style={{borderLeft: '4px solid #28a745'}}>
            <div className="d-flex align-items-center">
              <AssignmentControlButtons />
                <div className="ms-3">
                    <a className="wd-assignment-link fs-5"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A2
                    </a>
                    <br />
                    <small className="text-muted">
                      <span className="text-danger">Multiple Modules</span> | Not available until May 13 at 12:00am</small>
                    <br />
                    <small><b>Due:</b> May 20 at 11:59pm | 100 pts</small>
                  </div>
                </div>
                  <div className="d-flex align-items-center ms-auto">
                    <LessonControlButtons />
                  </div>
                </li>
          
          <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderRadius: '0', borderLeft: '4px solid #28a745'}}>
            <div className="d-flex align-items-center">
              <AssignmentControlButtons />
                <div className="ms-3">
                    <a className="wd-assignment-link fs-5"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A3
                    </a>
                    <br />
                    <small className="text-muted">
                      <span className="text-danger">Multiple Modules</span> | Not available until May 20 at 12:00am</small>
                    <br />
                    <small><b>Due:</b> May 27 at 11:59pm | 100 pts</small>
                  </div>
                </div>
                  <div className="d-flex align-items-center ms-auto">
                    <LessonControlButtons />
                  </div>
                </li>
      </ul>
    </div>
  );
}
  
  