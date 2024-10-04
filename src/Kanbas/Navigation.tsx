import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaGithub } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }}
      className="list-group rounded-0 position-fixed
      bottom-0 top-0 d-none d-md-block bg-black z-2">
      
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" alt="NEU logo" />
      </a>

      <NavLink 
        to="/Kanbas/Account" 
        id="wd-account-link"
        className={({ isActive }) => 
          `list-group-item text-center border-0 bg-${isActive ? 'white' : 'black'} text-${isActive ? 'danger' : 'white'}`
        }>
        {({ isActive }) => (
          <>
            <FaRegCircleUser className={`fs-1 text-${isActive ? 'danger' : 'white'}`} /><br />
            Account
          </>
        )}
      </NavLink>


      <NavLink 
        to="/Kanbas/Dashboard" 
        id="wd-dashboard-link"
        className={({ isActive }) => 
          `list-group-item text-center border-0 bg-${isActive ? 'white' : 'black'} text-${isActive ? 'danger' : 'white'}`
        }>
        {({ isActive }) => (
          <>
            <AiOutlineDashboard className={`fs-1 text-${isActive ? 'danger' : 'danger'}`} /><br />
            Dashboard
          </>
        )}
      </NavLink>

      <NavLink 
        to="/Kanbas/Courses" 
        id="wd-course-link"
        className={({ isActive }) => 
          `list-group-item text-center border-0 bg-${isActive ? 'white' : 'black'} text-${isActive ? 'danger' : 'white'}`
        }>
        {({ isActive }) => (
          <>
            <LiaBookSolid className={`fs-1 text-${isActive ? 'danger' : 'danger'}`} /><br />
            Courses
          </>
        )}
      </NavLink>

      <NavLink 
        to="/Kanbas/Calendar" 
        id="wd-calendar-link"
        className={({ isActive }) => 
          `list-group-item text-center border-0 bg-${isActive ? 'white' : 'black'} text-${isActive ? 'danger' : 'white'}`
        }>
        {({ isActive }) => (
          <>
            <IoCalendarOutline className={`fs-1 text-${isActive ? 'danger' : 'danger'}`} /><br />
            Calendar
          </>
        )}
      </NavLink>

      <NavLink 
        to="/Kanbas/Inbox" 
        id="wd-inbox-link"
        className={({ isActive }) => 
          `list-group-item text-center border-0 bg-${isActive ? 'white' : 'black'} text-${isActive ? 'danger' : 'white'}`
        }>
        {({ isActive }) => (
          <>
            <FaInbox className={`fs-1 text-${isActive ? 'danger' : 'danger'}`} /><br />
            Inbox
          </>
        )}
      </NavLink>

      <NavLink 
        to="/Labs" 
        id="wd-labs-link"
        className={({ isActive }) => 
          `list-group-item text-center border-0 bg-${isActive ? 'white' : 'black'} text-${isActive ? 'danger' : 'white'}`
        }>
        {({ isActive }) => (
          <>
            <LiaCogSolid className={`fs-1 text-${isActive ? 'danger' : 'danger'}`} /><br />
            Labs
          </>
        )}
      </NavLink>

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
