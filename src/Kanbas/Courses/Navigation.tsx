import { useParams, useLocation, Link } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        {links.map((link) => (
            <Link
                key={link}
                to={`/Kanbas/Courses/${cid}/${link}`}
                className={`list-group-item ${pathname.includes(`/Kanbas/Courses/${cid}/${link}`) ? 'active text-dark bg-white' : 'text-danger'} border-0`}
            >
                {link}
            </Link>
        ))}
  
    </div>
  );
}
