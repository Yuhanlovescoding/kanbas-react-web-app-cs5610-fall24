import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { HiChartBar } from "react-icons/hi2";
import { ImBullhorn } from "react-icons/im";
import { ImDatabase } from "react-icons/im";
import { ImBubble } from "react-icons/im";
import { useSelector } from "react-redux";

export default function CourseStatus() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      {currentUser?.role === "FACULTY" && (
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap">
          <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
        <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div>
      )}
      {currentUser?.role === "FACULTY" && (
        <>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me- fs-5" /> Import Existing Content </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
        </> )}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <HiChartBar className="me-2 fs-5" /> View Course Stream </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <ImBullhorn className="me-2 fs-5" /> New Announcement </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <ImDatabase className="me-2 fs-5" /> New Analytics </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <ImBubble className="me-2 fs-5" /> View Course Notifications </button>
      
    
    </div>
  );
}
  
  