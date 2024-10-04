import { BsGripVertical } from "react-icons/bs"; 
import { AiFillEdit } from 'react-icons/ai';
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <BsGripVertical className="fs-4" />
      <AiFillEdit className="fs-4 green-edit-icon" />
    </div>
);}