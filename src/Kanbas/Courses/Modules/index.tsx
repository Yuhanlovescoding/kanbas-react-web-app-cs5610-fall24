import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs"; 
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LeesonControlButtons";
import { useParams } from "react-router";
import React, { useState } from "react";



export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer); 
  const dispatch = useDispatch();

    return (
      <div>
       
        <ModulesControls moduleName = {moduleName} setModuleName={setModuleName}  
        addModule={()=> {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}/><br />
        <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <BsGripVertical className="me-2 fs-3" /> 
              {!module.editing && module.name}

              { module.editing && currentUser?.role === "FACULTY" && (
                <input className="form-control w-50 d-inline-block"
                      onChange={(e) => 
                        dispatch(
                        updateModule({ ...module, name: e.target.value })
              )}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                      defaultValue={module.name}/>
              )}
              <div className="ms-auto">
              
              <ModuleControlButtons
              moduleId={module._id}
              deleteModule={(moduleId) =>{
                dispatch(deleteModule(moduleId));}
              }
              editModule={(moduleId)=> dispatch(editModule(moduleId))}/>  
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
  
  