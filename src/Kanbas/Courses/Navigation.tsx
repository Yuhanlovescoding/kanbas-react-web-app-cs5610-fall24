import { useParams, useLocation, Link } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  
  const links = [
    { name: "Home", path: "Home" },
    { name: "Modules", path: "Modules" },
    { name: "Piazza", path: "Piazza" },
    { name: "Zoom", path: "Zoom" },
    { name: "Assignments", path: "Assignments" },
    { name: "Quizzes", path: "Quizzes" },
    { name: "Grades", path: "Grades" },
    { name: "People", path: "People" },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map(({ name, path }) => (
        <Link
          key={name}
          to={`/Kanbas/Courses/${cid}/${path}`}
          className={`list-group-item ${
            pathname.includes(`/Kanbas/Courses/${cid}/${path}`)
              ? "active text-dark bg-white"
              : "text-danger"
          } border-0`}
        >
          {name}
            </Link>
        ))}
  
    </div>
  );
}
