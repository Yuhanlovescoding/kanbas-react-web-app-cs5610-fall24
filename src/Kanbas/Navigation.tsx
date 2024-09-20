import { Link } from "react-router-dom";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation">
      <ul style={{ padding: 10, marginTop: 0, paddingTop: 0}}>
        <li><a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/></li>
        <li><Link to="/Kanbas/Account" id="wd-account-link">Account</Link><br/></li>
        <li><Link to="/Kanbas/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/></li>
        <li><Link to="/Kanbas/Dashboard" id="wd-course-link">Courses</Link><br/></li>
        <li><Link to="/Kanbas/Calendar" id="wd-calendar-link">Calendar</Link><br/></li>
        <li><Link to="/Kanbas/Inbox" id="wd-inbox-link">Inbox</Link><br/></li>
        <li><Link to="/Labs" id="wd-labs-link">Labs</Link><br/></li>
        <li><a href="https://github.com/Yuhanlovescoding/kanbas-react-web-app-cs5610-fall24" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </div>
);}

