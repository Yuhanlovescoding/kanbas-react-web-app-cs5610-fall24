import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs"; 
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LeesonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";


export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
    return (
      <div>
        <ModulesControls /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <BsGripVertical className="me-2 fs-3" /> 
              {module.name}
              <div className="ms-auto">
              <ModuleControlButtons />  
            </div></div>
            {module.lessons && (
            <ul className="wd-lessons list-group rounded-0">
              {module.lessons.map((lesson: any) => (
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="flex-grow-1">{lesson.name}</span>
                <LessonControlButtons />
              </li>
                ))}
              </ul>
            )}
            </li>
          ))}
        </ul>
      </div>
  );
}
  
  