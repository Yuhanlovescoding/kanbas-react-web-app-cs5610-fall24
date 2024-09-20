import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />       
                <div className="wd-dashboard-course"> 
                    <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5001/Home">
                        <img src="/images/2.jpg" width={200} />
                        <div>
                            <h5>
                                CS5001 Python
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Intensive Foundations of CS
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>     
                </div>
                <br /> 
                <div className="wd-dashboard-course"> 
                    <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5002/Home">
                        <img src="/images/3.jpg" width={200} />
                        <div>
                            <h5>
                                CS5002 Math
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Discrete Structures
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>     
                </div>
                <br />
                <div className="wd-dashboard-course"> 
                    <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5004/Home">
                        <img src="/images/4.jpg" width={200} />
                        <div>
                            <h5>
                                CS5004 Java
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Object-Oriented Ddesign
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>     
                </div>
                <br />
                <div className="wd-dashboard-course"> 
                    <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5005/Home">
                        <img src="/images/5.jpg" width={200} />
                        <div>
                            <h5>
                                CS5005 Recitation for CS5004
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Recitation for CS5004
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>     
                </div>
                <br />
                <div className="wd-dashboard-course"> 
                    <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5008/Home">
                        <img src="/images/6.jpg" width={200} />
                        <div>
                            <h5>
                                CS5008 C/C++
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Data Str, Algo & App in CmpSys
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>     
                </div>
                <br />
                <div className="wd-dashboard-course"> 
                    <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5009/Home">
                        <img src="/images/7.jpg" width={200} />
                        <div>
                            <h5>
                                CS5009 Recitation for CS5008
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Recitation for CS5008
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>     
                </div>

            </div>
        </div>
    );
}


