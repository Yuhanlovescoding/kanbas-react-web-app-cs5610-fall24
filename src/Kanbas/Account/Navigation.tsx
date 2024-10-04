import { useLocation, NavLink } from "react-router-dom";

export default function AccountNavigation() {
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink 
        to="/Kanbas/Account/Signin" 
        className={`list-group-item ${pathname === "/Kanbas/Account/Signin" ? 'active text-dark bg-white' : 'text-danger'} border border-0`}
      >
        Signin
      </NavLink>

      <NavLink 
        to="/Kanbas/Account/Signup" 
        className={`list-group-item ${pathname === "/Kanbas/Account/Signup" ? 'active text-dark bg-white' : 'text-danger'} border border-0`}
      >
        Signup
      </NavLink>

      <NavLink 
        to="/Kanbas/Account/Profile" 
        className={`list-group-item ${pathname === "/Kanbas/Account/Profile" ? 'active text-dark bg-white' : 'text-danger'} border border-0`}
      >
        Profile
      </NavLink>
    </div>
  );
}
