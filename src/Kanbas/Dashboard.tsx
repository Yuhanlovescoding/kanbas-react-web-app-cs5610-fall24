import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-4 g-4 mb-2">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark">
                            <img src={course.img} width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title text-primary">
                                    {course.name}
                                </h5>
                                <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                    {course.description} 
                                </p>
                                <button className="btn btn-primary"> Go </button>
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


