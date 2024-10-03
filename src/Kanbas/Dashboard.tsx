import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link  className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width="100%" height={160}/>
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Full Stack software developer
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>
                    </div>
                </div>
                <br />       
                <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
                    <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/2.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS5001 Python
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Intensive Foundations of CS
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>     
                </div></div>
                <br /> 
                <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
                    <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/3.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS5002 Math
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Discrete Structures
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>     
                </div></div>
                <br />
                <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
                    <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/4.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS5004 Java
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Object-Oriented Ddesign
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>     
                </div></div>
                <br />
                <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
                    <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/5.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS5005 Recitation for CS5004
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Recitation for CS5004
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>     
                </div></div>
                <br />
                <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
                    <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/6.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS5008 C/C++
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Data Str, Algo & App in CmpSys
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>     
                </div></div>
                <br />
                <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
                    <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/7.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS5009 Recitation for CS5008
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Recitation for CS5008
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>     
                </div></div>    
            </div>
        </div>
        </div>
    );
}


