import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs"; 
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LeesonControlButtons";

export default function Modules() {
    return (
      <div>
        <ModulesControls /><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
              Week 1, Lecture 1 - Course Introduction, Syllabus
              <div className="ms-auto">
              <ModuleControlButtons />  
            </div></div>

            <ul className="wd-lessons list-group rounded-0">

              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1">LEARNING OBJECTIVES</span>
                <LessonControlButtons />
              </li>
                
                <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="flex-grow-1 ps-4">Introduction to the course</span>
                  <LessonControlButtons />
                </li>

                <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="flex-grow-1 ps-4">Learn what is Web Development</span>
                  <LessonControlButtons />
                </li>
              
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1">READING</span>
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1 ps-4">Full Stack Developer - Chapter 1 - Introduction</span>
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1 ps-4">Full Stack Developer - Chapter 2 - Creating User</span>
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1">SLIDES</span>
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1 ps-4">Introduction to Web Development</span>
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1 ps-4">Creating an HTTP sever with Node.js</span>
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1 ps-4">Creating a React Application</span>
                <LessonControlButtons />
              </li>

              </ul>
            </li>

            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
              Week 2, Lecture 2 - Formating User Interfaces with HTML
              <ModuleControlButtons />  
            </div>

            <ul className="wd-lessons list-group rounded-0">

              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1">LEARNING OBJECTIVES</span>
                <LessonControlButtons />
              </li>
                
                <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="flex-grow-1 ps-4">Learn how to create user interfaces with HTML</span>
                  <LessonControlButtons />
                </li>

                <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="flex-grow-1 ps-4">Keep working in assignment 1</span>
                  <LessonControlButtons />
                </li>

                <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="flex-grow-1 ps-4">Deploy the assignment to Netlify</span>
                  <LessonControlButtons />
                </li>
              
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1">READING</span>
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1 ps-4">Full Stack Developer - Chapter 1 - Introduction</span>
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1 ps-4">Full Stack Developer - Chapter 2 - Creating User</span>
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1">SLIDES</span>
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1 ps-4">Embeding content with Iframes</span>
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1 ps-4">Drawing with Scalable Vector Graphics</span>
                <LessonControlButtons />
              </li>
              </ul>
            </li>
        </ul>
      </div>
  );
}
  
  