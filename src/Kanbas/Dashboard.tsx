import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchEnrollments, enrollInCourse, unenrollFromCourse } from "./Account/reducer";
import type { AppDispatch } from "./store";
import * as coursesClient from "./Courses/client";


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
  const { currentUser, enrollments } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchCoursesAndEnrollments = async () => {
      if (currentUser?.role === "FACULTY") {
        const allCourses = await coursesClient.fetchAllCourses();
        setCourse(allCourses);
      }
      const courses = await coursesClient.fetchAllCourses(); 
      setAllCourses(courses);

      if (currentUser?.role === "STUDENT") {
        dispatch(fetchEnrollments());
      }
    };

    fetchCoursesAndEnrollments();
  }, [dispatch, currentUser]);

  const filteredCourses = showAllCourses
    ? allCourses
    : currentUser?.role === "STUDENT"
    ? allCourses.filter((course: any) =>
        enrollments.some(
          (enrollment: any) =>
            enrollment.user === currentUser._id && enrollment.course === course._id
        )
      )
    : currentUser?.role === "FACULTY"
    ? courses
    : [];

  const handleEnrollmentToggle = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
    } else {
      await dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
    }
    dispatch(fetchEnrollments());
  };

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
      <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2> 
      
        <button
        className="btn btn-primary float-end"
        onClick={() => setShowAllCourses(!showAllCourses)}
      >
        {showAllCourses ? "My Courses" : "All Courses"}
      </button>
        
      </div><hr />
      
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-2">
          {filteredCourses.map((course) => {
            const enrolled = enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser._id && enrollment.course === course._id
            );
            return (
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
                      {currentUser?.role === "STUDENT" && (
                        <button
                          className={`btn ${enrolled ? "btn-danger" : "btn-success"} float-end`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleEnrollmentToggle(course._id, enrolled);
                          }}
                        >
                          {enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                      
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
