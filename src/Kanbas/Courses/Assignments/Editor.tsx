import React, { useState, ChangeEvent } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GoChevronDown } from "react-icons/go";
import { useParams, Link } from "react-router-dom";
import DatePickerInput from "./DatePickerInput";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); 
  const assignment = db.assignments.find(assignment => assignment._id === aid); 
  
  const [startTime, setStartTime] = useState<Date | null>(assignment ? new Date(assignment.startTime) : new Date());
  const [dueTime, setDueTime] = useState<Date | null>(assignment ? new Date(assignment.dueTime) : new Date());

  const [showOnlineOptions, setShowOnlineOptions] = useState(true);

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setShowOnlineOptions(event.target.value === 'ONLINE');
  };

  const handleSave = () => {
    console.log('Save button clicked');
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
  };

  
  return (
    <div id="wd-assignments-editor" className="container">
      
      
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" value={assignment?.title} className="form-control" />
      </div>



      <div className="assignment-description-box mb-4">
        <p>The assignment is <span className="text-danger">available online.</span></p> 
        <p>Submit a link to the landing page of your web application running on Netlify.</p>
        <p>The landing page should include the following:</p>
        <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
        </ul>
        <p>The Kanbas application should inclued a link to navigate back to the landing page.</p>
      </div>

      
      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-md-2 col-form-label text-md-end">Points</label>
        <div className="col-md-10">
          <input id="wd-points" value={assignment?.points} className="form-control" />
        </div>
      </div>

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
      </div>

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
      </div>

      
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
      </div>

      
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
                  dateFormat="MMMM d, yyyy h:mm aa"
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
                  dateFormat="MMMM d, yyyy h:mm aa"
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
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="form-control custom-date-input"
                  wrapperClassName="d-block"
                />
               </div> 
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <hr />
      <div className="d-flex justify-content-end mt-3">
        <button onClick={handleCancel} className="btn btn-secondary me-2">Cancel</button>
        <button onClick={handleSave} className="btn btn-danger float-end">Save</button>
      </div>
    </div>
  );
}
