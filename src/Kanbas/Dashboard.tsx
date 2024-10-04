import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-4 g-4 mb-2">
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link  className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width="100%" height={160}/>
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title text-primary">
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Full Stack software developer
                            </p>
                            <p className="wd-dashboard-course-term card-text">
                                Fall 2024 - Section 01
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>
                    </div>
                </div>
                     
                <div className="wd-dashboard-course col" style={{ width: "270px" }}> 
                    <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/2.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title text-primary">
                                CS5001 Python
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Intensive Foundations of CS
                            </p>
                            <p className="wd-dashboard-course-term card-text">
                                Fall 2024 - Section 01
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>     
                </div></div>
                
                <div className="wd-dashboard-course col" style={{ width: "270px" }}> 
                    <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/3.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title text-primary">
                                CS5002 Math
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Discrete Structures
                            </p>
                            <p className="wd-dashboard-course-term card-text">
                                Spring 2024 - Section 01
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>     
                </div></div>
               
                <div className="wd-dashboard-course col" style={{ width: "270px" }}> 
                    <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/4.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title text-primary">
                                CS5004 Java
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Object-Oriented Ddesign
                            </p>
                            <p className="wd-dashboard-course-term card-text">
                                Spring 2024 - Section 01
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>     
                </div></div>
                
                <div className="wd-dashboard-course col" style={{ width: "270px" }}> 
                    <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/5.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title text-primary">
                                CS5005 Recitation for CS5004
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Recitation for CS5004
                            </p>
                            <p className="wd-dashboard-course-term card-text">
                                Spring 2024 - Section 01
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>     
                </div></div>
                
                <div className="wd-dashboard-course col" style={{ width: "270px" }}> 
                    <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/6.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title text-primary">
                                CS5008 C/C++
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Data Str, Algo & App in CmpSys
                            </p>
                            <p className="wd-dashboard-course-term card-text">
                                Fall 2023 - Section 01
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>     
                </div></div>
                
                <div className="wd-dashboard-course col" style={{ width: "270px" }}> 
                    <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/7.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title text-primary">
                                CS5009 Recitation for CS5008
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Recitation for CS5008
                            </p>
                            <p className="wd-dashboard-course-term card-text">
                                Fall 2023 - Section 01
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


