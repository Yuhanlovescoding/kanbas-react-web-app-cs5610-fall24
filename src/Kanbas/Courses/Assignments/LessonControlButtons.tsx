import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function LessonControlButtons({ aid }: { aid: string }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmed) {
      dispatch(deleteAssignment(aid));
    }
  };
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-3 mt-1 " onClick={handleDelete} role="button" />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
