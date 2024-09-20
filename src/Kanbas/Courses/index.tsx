import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes } from "react-router";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Piazza" element={<h3>Piazza</h3>} />
              <Route path="Zoom" element={<h3>Zoom</h3>} />
              <Route path="Quizzes" element={<h3>Quizzes</h3>} />
              <Route path="Grades" element={<h3>Grades</h3>} />
              <Route path="People" element={<h3>People</h3>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>  
  );
}
  
  