import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { enroll, unenroll } from "./Account/reducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser, enrollments } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const filteredCourses = showAllCourses
  ? courses
  : currentUser.role === "STUDENT"
  ? courses.filter((course) =>
      enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id && enrollment.course === course._id
      )
    )
  : currentUser.role === "FACULTY"
  ? courses.filter(
      (course) =>
        enrollments.some(
          (enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
        ) || course.creator === currentUser._id
    )
  : [];

    
  const handleEnrollmentToggle = (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      dispatch(unenroll({ user: currentUser._id, course: courseId }));
    } else {
      dispatch(enroll({ user: currentUser._id, course: courseId }));
    }
  };

  const handleCourseNavigation = (courseId: string) => {
    const isEnrolled = enrollments.some(
      (enrollment:any) => enrollment.user === currentUser._id && enrollment.course === courseId
    );
    if (isEnrolled || currentUser.role === "FACULTY") {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else {
      alert("You are not enrolled in this course!");
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

     
      {currentUser?.role === "FACULTY" && (
        <div>
          <h5>
            New Course
            <button className="btn btn-primary float-end" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse}>
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <input
            value={course.image || ""}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, image: e.target.value })}
            placeholder="Enter image URL (eg./images/reactjs.jpg)"
          />
        </div>
      )}

      <hr />
      <div className="d-flex align-items-center justify-content-between">
        <h2>Published Courses ({filteredCourses.length})</h2>
        
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Courses" : "All Courses"}
        </button>
        
      </div>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-2">
          {filteredCourses.map((course) => {
            const enrolled = enrollments.some(
              (enrollment:any) => enrollment.user === currentUser._id && enrollment.course === course._id
            );

            return (
              <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                <div className="card rounded-3 overflow-hidden">
                <img src={course.image} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="card-title text-primary">{course.name}</h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleCourseNavigation(course._id)}
                    >
                      Go
                    </button>
                    {currentUser?.role === "STUDENT" && (
                      <button
                        className={`btn ${enrolled ? "btn-danger" : "btn-success"} float-end`}
                        onClick={() => handleEnrollmentToggle(course._id, enrolled)}
                      >
                        {enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                    {currentUser?.role === "FACULTY" && (
                      <>
                        <button
                          className="btn btn-danger float-end"
                          onClick={() => deleteCourse(course._id)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-warning float-end me-2"
                          onClick={() => setCourse(course)}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
