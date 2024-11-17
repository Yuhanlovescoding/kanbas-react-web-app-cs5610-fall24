import { BsGripVertical } from "react-icons/bs"; 
import { AiFillEdit } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
export default function AssignmentControlButtons({ cid, aid }: {cid: string; aid: string }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/${aid}`); 
  };
  return (
    <div className="float-end">
      <BsGripVertical className="fs-4" />
      <AiFillEdit className="fs-4 green-edit-icon" onClick={handleEdit} role="button" />
    </div>
);}