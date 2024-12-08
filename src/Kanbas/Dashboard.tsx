import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchEnrollments, enrollInCourse, unenrollFromCourse } from "./Account/reducer";
import type { AppDispatch } from "./store";
import * as coursesClient from "./Courses/client";


export default function Dashboard(
  { courses, course, setCourses, addNewCourse, deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
    courses: any[];
    course: any;
    setCourses: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: string) => void;
    updateCourse: (course: any) => void;
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void 
  }
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch<AppDispatch>();
  //const [showAllCourses, setShowAllCourses] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  
  // useEffect(() => {
  //   const fetchCoursesAndEnrollments = async () => {
  //     if (currentUser?.role === "FACULTY") {
  //       const allCourses = await coursesClient.fetchAllCourses();
  //       setCourse(allCourses);
  //     }
  //     const courses = await coursesClient.fetchAllCourses(); 
  //     setAllCourses(courses);

  //     if (currentUser?.role === "STUDENT") {
  //       dispatch(fetchEnrollments());
  //     }
  //   };

  //   fetchCoursesAndEnrollments();
  // }, [dispatch, currentUser]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const allCourses = await coursesClient.fetchAllCourses();
        setAllCourses(allCourses);
        setCourses(allCourses); 
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // const filteredCourses = currentUser?.role === "FACULTY"
  //   ? courses 
  //   : showAllCourses
  //   ? allCourses 
  //   : allCourses.filter((course: any) =>
  //       enrollments.some(
  //         (enrollment: any) =>
  //           enrollment.user === currentUser?._id && enrollment.course === course._id
  //       )
  //     );

  // const handleEnrollmentToggle = async (courseId: string) => {
  //   if (course.enrolled) {
  //     await dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
  //   } else {
  //     await dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
  //   }
  //   dispatch(fetchEnrollments());
  // };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
      {currentUser?.role === "STUDENT" && (
      <button
          onClick={() => setEnrolling(!enrolling)}
          className="float-end btn btn-primary"
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button>)}</h1>  
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
                 onChange={(e) => setCourses({ ...course, name: e.target.value })} />
          <textarea value={course.description} className="form-control"
                    onChange={(e) => setCourses({ ...course, description: e.target.value })} />
          <input value={course.image || ''} className="form-control mb-2"
                 onChange={(e) => setCourses({ ...course, image: e.target.value })}
                 placeholder="Enter image URL (eg./images/reactjs.jpg)" />
        </div>
      )}

      <hr />
      <div className="d-flex align-items-center justify-content-between">
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> 
      </div><hr />
      
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-2">
          {courses.map((course) => {
            return (
              <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <img src={course.image} width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title text-primary">
                        {course.name}
                        {enrolling && (
                          <button
                            className={`btn ${
                              course.enrolled ? "btn-danger" : "btn-success"
                            } float-end`}
                            onClick={(e) => {
                              e.preventDefault();
                              updateEnrollment(course._id, !course.enrolled);
                            }}
                          >
                            {course.enrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )}
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
                                    setCourses(course);
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
