import React, { useState, ChangeEvent, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GoChevronDown } from "react-icons/go";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import DatePickerInput from "./DatePickerInput";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existingAssignment = useSelector((state: any) =>
    state.assignmentsReducer.assignments.find((a: any) => a._id === aid)
  );

  
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [title, setTitle] = useState(existingAssignment?.title || "");
  const [description, setDescription] = useState(existingAssignment?.description || "");
  const [points, setPoints] = useState(existingAssignment?.points || 0);
  const [dueDate, setDueDate] = useState(existingAssignment?.dueDate || "");
  const [startTime, setStartTime] = useState<Date | null>(
    existingAssignment?.startTime && !isNaN(Date.parse(existingAssignment.startTime))
      ? new Date(existingAssignment.startTime)
      : new Date()
  );
  
  const [dueTime, setDueTime] = useState<Date | null>(
    existingAssignment?.dueTime && !isNaN(Date.parse(existingAssignment.dueTime))
      ? new Date(existingAssignment.dueTime)
      : new Date()
  );
  const [showOnlineOptions, setShowOnlineOptions] = useState(true);

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setShowOnlineOptions(event.target.value === "ONLINE");
  };


  

  const handleSave = () => {
    const formatDate = (date: string | Date) => {
      if (!date) return "";
      const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(new Date(date));
      const [datePart, timePart] = formattedDate.split(", "); 
      return `${datePart} at ${timePart}`;
    };
  
    
    const formattedStartTime = startTime ? formatDate(startTime) : formatDate(new Date());
    const formattedDueTime = dueTime ? formatDate(dueTime) : formatDate(new Date());
    if (aid === "new") {
      dispatch(
        addAssignment({
          title,
          description,
          points,
          dueDate:formattedDueTime,
          startTime:formattedStartTime,
          dueTime: formattedDueTime,
          course: cid, 
          availability: `Not available until ${formattedStartTime}`,
          modulesInvolved: "Multiple Modules",
        })
      );
    } else {
      dispatch(
        updateAssignment({
          _id: aid,
          updates: {
            title,
            description,
            points,
            dueDate: formattedDueTime,
            startTime: formattedStartTime,
            dueTime: formattedDueTime,
          },
        })
      );
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  if (!existingAssignment && aid !== "new") {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          Assignment not found. <button onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)} className="btn btn-link">Go Back</button>
        </div>
      </div>
    );
  }

  if (!existingAssignment && aid !== "new") {
    return <div className="alert alert-danger">Assignment not found. Redirecting...</div>;
  }


  
  return (
    <div id="wd-assignments-editor" className="container">
      <h1>{aid === "new" ? "Create Assignment" : "Edit Assignment"}</h1>
      
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
      </div>



      <div className="assignment-description-box mb-4">
      <label>Description</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

    
      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-md-2 col-form-label text-md-end">Points</label>
        <div className="col-md-10">
          <input id="wd-points" type ="number" value={points === 0 ? "" : points} onChange={(e) => {
        const value = e.target.value;
        setPoints(value === "" ? 0 : Number(value)); 
      }} className="form-control" />
        </div>
      </div>

      {currentUser?.role === "FACULTY" && (  
      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-md-2 col-form-label text-md-end">Assignment Group</label>
        <div className="col-md-10">
        <div className="select-wrapper position-relative">
          <select id="wd-group" className="form-control">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
          <GoChevronDown className="select-icon" />
        </div>
      </div>
      </div>)}

      {currentUser?.role === "FACULTY" && ( 
      <div className="row mb-3">
        <label htmlFor="wd-display-grade-as" className="col-md-2 col-form-label text-md-end">Display Grade as</label>
        <div className="col-md-10">
        <div className="select-wrapper position-relative">
          <select id="wd-display-grade-as" className="form-control">
            <option value="PERCENTAGE">Percentage</option>
            <option value="INTEGER">Integer</option>
          </select>
          <GoChevronDown className="select-icon" />
        </div>
      </div>
      </div>)}

      {currentUser?.role === "FACULTY" && ( 
      <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="col-md-2 col-form-label text-md-end">Submission Type</label>
        <div className="col-md-10">
          <div className="submission-box p-3 border">
          <div className="select-wrapper position-relative">
            <select id="wd-submission-type" onChange={handleTypeChange} className="form-control">
              <option value="ONLINE">Online</option>
              <option value="IN PERSON">In Person</option>
            </select>
            <GoChevronDown className="select-icon" />
          </div>
            
            {showOnlineOptions && (
              <div id="onlineOptions" className="submission-options mt-2">
                <label>Online Entry Options</label><br />
                <input type="checkbox" name="online-opt" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="online-opt" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Web URL</label><br/>

                <input type="checkbox" name="online-opt" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" name="online-opt" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                <input type="checkbox" name="online-opt" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            )}
          </div>
        </div>
      </div>)}

      {currentUser?.role === "FACULTY" && ( 
      <div className="row mb-3">
        <label className="col-md-2 col-form-label text-md-end">Assign</label>
        <div className="col-md-10">
          <div className="assign-box p-3 border">
            <label htmlFor="wd-assign-to">Assign to</label><br />
            <div className="input-with-tag">
              <input type="text" id="wd-assign-to" className="form-control" />
              <div className="tag-inside-input">
                <span>Everyone</span>
                <FaTimes className="remove-tag-icon" />
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-md-12">
                <label htmlFor="wd-due-date">Due</label>
                <DatePicker
                  selected={dueTime}
                  onChange={(date: Date | null) => setDueTime(date)}
                  showTimeSelect
                  customInput={<DatePickerInput />}
                  dateFormat="MMMM d, yyyy, h:mm aa"
                  className="form-control custom-date-input"
                  wrapperClassName="d-block"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
              <div className="label-input-container">
                <label htmlFor="wd-available-from">Available from</label>
                <DatePicker
                  selected={startTime}
                  onChange={(date: Date | null) => setStartTime(date)}
                  showTimeSelect
                  customInput={<DatePickerInput />}
                  dateFormat="MMMM d, yyyy, h:mm aa"
                  className="form-control custom-date-input"
                  wrapperClassName="d-block"
                />
              </div> 
              </div>
              <div className="col-md-6">
              <div className="label-input-container">
                <label htmlFor="wd-available-until">Until</label>
                <DatePicker
                  selected={dueTime}
                  onChange={(date: Date | null) => setDueTime(date)}
                  showTimeSelect
                  customInput={<DatePickerInput />}
                  dateFormat="MMMM d, yyyy, h:mm aa"
                  className="form-control custom-date-input"
                  wrapperClassName="d-block"
                />
               </div> 
              </div>
            </div>
          </div>
        </div>
      </div>)}

      
      <hr />
      {currentUser?.role === "FACULTY" && (
      <div className="d-flex justify-content-end mt-3">
        <button onClick={handleCancel} className="btn btn-secondary me-2">Cancel</button>
        <button onClick={handleSave} className="btn btn-danger float-end">Save</button>
      </div>)}
    </div>
  );
}
