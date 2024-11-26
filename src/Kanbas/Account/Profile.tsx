import { Link,  useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
      if (!currentUser) {
        navigate("/Kanbas/Account/Signin");
      } else {
        setProfile({
          ...currentUser,
          dob: currentUser?.dob?.slice(0, 10) || "", 
        });
      }
    }, [currentUser, navigate]);

  const updateProfile = async () => {
      try{
            const updatedProfile = await client.updateUser(profile);
            dispatch(setCurrentUser(updatedProfile));
      } catch (error) {
            console.error("Failed to update profile:", error);
            alert("Failed to update profile. Please try again.");
      }
    };
  
  const signout = async () => {
      try{
            await client.signout();
            dispatch(setCurrentUser(null));
            navigate("/Kanbas/Account/Signin");
      } catch (error){
            console.error("Failed to sign out:", error);
            alert("Sign out failed. Please try again.");  
      }
  };
  
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
            <input
            value={profile.username || ""}
            id="wd-username"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <input
            value={profile.password || ""}
            id="wd-password"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <input
            value={profile.firstName || ""}
            id="wd-firstname"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <input
            value={profile.lastName || ""}
            id="wd-lastname"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <input
            value={profile.dob || ""}
            id="wd-dob"
            className="form-control mb-2"
            type="date"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            value={profile.email || ""}
            id="wd-email"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
            <select value={profile.role || "USER"} onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
                  id="wd-role" className="form-control mb-2">
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
            </select>
            <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>

            <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn">
                  Sign out
            </button>
            </div>
      )}
    </div>);}
 
