import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaGithub } from "react-icons/fa6";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }}
      className="list-group rounded-0 position-fixed
      bottom-0 top-0 d-none d-md-block bg-black z-2">
      
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" alt="NEU logo" />
      </a>

      <Link 
        to="/Kanbas/Account" 
        id="wd-account-link"
        className={`list-group-item text-center border-0 bg-${pathname.startsWith('/Kanbas/Account') ? 'white' : 'black'} text-${pathname.startsWith('/Kanbas/Account') ? 'danger' : 'white'}`}>
        <FaRegCircleUser className={`fs-1 text-${pathname.startsWith('/Kanbas/Account') ? 'danger' : 'white'}`} /><br />
        Account
      </Link>

      <Link 
        to="/Kanbas/Dashboard" 
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0 bg-${pathname === '/Kanbas/Dashboard' ? 'white' : 'black'} text-${pathname === '/Kanbas/Dashboard' ? 'danger' : 'white'}`}>
        <AiOutlineDashboard className={`fs-1 text-${pathname === '/Kanbas/Dashboard' ? 'danger' : 'danger'}`} /><br />
        Dashboard
      </Link>

      <Link 
        to="/Kanbas/Courses" 
        id="wd-course-link"
        className={`list-group-item text-center border-0 bg-${pathname === '/Kanbas/Courses' ? 'white' : 'black'} text-${pathname === '/Kanbas/Courses' ? 'danger' : 'white'}`}>
        <LiaBookSolid className={`fs-1 text-${pathname === '/Kanbas/Courses' ? 'danger' : 'danger'}`} /><br />
        Courses
      </Link>

      <Link 
        to="/Kanbas/Calendar" 
        id="wd-calendar-link"
        className={`list-group-item text-center border-0 bg-${pathname === '/Kanbas/Calendar' ? 'white' : 'black'} text-${pathname === '/Kanbas/Calendar' ? 'danger' : 'white'}`}>
        <IoCalendarOutline className={`fs-1 text-${pathname === '/Kanbas/Calendar' ? 'danger' : 'danger'}`} /><br />
        Calendar
      </Link>

      <Link 
        to="/Kanbas/Inbox" 
        id="wd-inbox-link"
        className={`list-group-item text-center border-0 bg-${pathname === '/Kanbas/Inbox' ? 'white' : 'black'} text-${pathname === '/Kanbas/Inbox' ? 'danger' : 'white'}`}>
        <FaInbox className={`fs-1 text-${pathname === '/Kanbas/Inbox' ? 'danger' : 'danger'}`} /><br />
        Inbox
      </Link>

      <Link 
        to="/Labs" 
        id="wd-labs-link"
        className={`list-group-item text-center border-0 bg-${pathname === '/Labs' ? 'white' : 'black'} text-${pathname === '/Labs' ? 'danger' : 'white'}`}>
        <LiaCogSolid className={`fs-1 text-${pathname === '/Labs' ? 'danger' : 'danger'}`} /><br />
        Labs
      </Link>

      <a 
        href="https://github.com/Yuhanlovescoding/kanbas-react-web-app-cs5610-fall24"
        className="list-group-item text-center border-0 bg-black text-white" 
        target="_blank" 
        rel="noopener noreferrer">
        <FaGithub className="fs-1 text-white" /><br />
        My GitHub Repo
      </a>

      <a 
        href="https://github.com/Yuhanlovescoding/kanbas-react-web-app-cs5610-fall24/tree/A2"
        className="list-group-item text-center border-0 bg-black text-white" 
        target="_blank" 
        rel="noopener noreferrer">
        <FaGithub className="fs-1 text-white" /><br />
        Source Code GitHub Repo
      </a>
    </div>
  );
}
