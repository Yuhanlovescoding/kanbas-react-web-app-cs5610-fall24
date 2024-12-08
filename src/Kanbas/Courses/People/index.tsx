import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findUsersForCourse } from "../client";
import PeopleTable from "./Table";

export default function People() {
  const { cid } = useParams(); 
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      if (cid) {
        try {
          const enrolledUsers = await findUsersForCourse(cid); 
          setUsers(enrolledUsers); 
        } catch (error) {
          console.error("Failed to fetch enrolled users:", error);
        } finally {
          setLoading(false); 
        }
      }
    };

    fetchUsers();
  }, [cid]);

  if (loading) {
    return <div>Loading enrolled users...</div>; 
  }

  return (
    <div>
      <h2>Enrolled People</h2>
      <PeopleTable users={users} /> 
    </div>
  );
}