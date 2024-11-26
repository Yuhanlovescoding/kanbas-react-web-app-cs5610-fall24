import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { enroll, unenroll } from "./Account/reducer"; 

export default function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: string) => void;
    updateCourse: (course: any) => void;
  }
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>  
      <hr />
      
      {currentUser?.role === "FACULTY" && (
        <div>
          <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse}> Add </button>
            <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5><br />
          <input value={course.name} className="form-control mb-2"
                 onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea value={course.description} className="form-control"
                    onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <input value={course.image || ''} className="form-control mb-2"
                 onChange={(e) => setCourse({ ...course, image: e.target.value })}
                 placeholder="Enter image URL (eg./images/reactjs.jpg)" />
        </div>
      )}

      <hr />
      <div className="d-flex align-items-center justify-content-between">
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> 
      </div><hr />
      
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-2">
          {courses.map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <img src={course.image} width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title text-primary">
                        {course.name}
                      </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </p>
                      <button className="btn btn-primary"> Go </button>
                      
                      {currentUser?.role === "FACULTY" && (
                        <>
                          <button id="wd-delete-course-click"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                  }} className="btn btn-danger float-end">
                            Delete
                          </button>
                          <button id="wd-edit-course-click"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                  }}
                                  className="btn btn-warning me-2 float-end">
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
