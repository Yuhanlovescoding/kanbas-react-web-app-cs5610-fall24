import React, { useState, ChangeEvent } from 'react';
import { FaTimes } from 'react-icons/fa';
export default function AssignmentEditor() {

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
    
    <div id="wd-assignments-editor" className="full-width">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" value="A1 - ENV + HTML" className="full-width" /><br /><br />
      
      <div className="assignment-description-box">
        <p>The assignment is <span className="text-danger">available online.</span></p> 
        <p>Submit a link to the landing page of your web application running on Netlify.</p>
        <p>The landing page should include the following:</p>
        <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
        </ul>
        <p>The Kanbas application should include a link to navigate back to the landing page.</p>
    </div>
      <br /><br />
      
      <table className="full-width">
        <tr>
        <td className="table-cell">
          <label htmlFor="wd-points">Points</label>
        </td>
        <td className="table-input-cell">
          <input id="wd-points" value={100} className="full-width" />
        </td>
      </tr>
      <br />
      <tr>
        <td className="table-cell">
          <label htmlFor="wd-group">Assignment Group</label>
        </td>
        <td className="table-input-cell">
          <select id="wd-group" className="full-width">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </td>
      </tr>
      <br />
      <tr>
      <td className="table-cell">
          <label htmlFor="wd-display-grade-as">Display Grade as</label>
        </td>
        <td className="table-input-cell">
          <select id="wd-display-grade-as" className="full-width">
            <option value="PERCENTAGE">Percentage</option>
            <option value="INTEGER">Integer</option>
          </select>
        </td>
      </tr>
      <br />
      <tr>
        <td className="table-cell">
          <label htmlFor="wd-submission-type">Submission Type</label>
        </td>
        <td className="table-input-cell">
        <div className="submission-box">
          <select id="wd-submission-type" onChange={handleTypeChange} className="full-width">
            <option value="ONLINE">Online</option>
            <option value="IN PERSON">In Person</option>
          </select>
          {showOnlineOptions && (
            <div id="onlineOptions" className="submission-options">
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
          </td>
        </tr> 
        <br />
        <tr>
        <td className="table-cell" rowSpan={5}>Assign</td>
        <td className="table-input-cell">
          <div className="assign-box">
            <label htmlFor="wd-assign-to">Asign to</label><br />
            <div className="input-with-tag">
              <input type="text" id="wd-assign-to" className="full-width" />
              <div className="tag-inside-input">
              <span>Everyone</span>
              <FaTimes className="remove-tag-icon" />
            </div>
            </div>
            <br /><br />
            <div className="date-input-container">
            <label htmlFor="wd-due-date">Due</label><br />
            <input type="date" id="wd-due-date" value="2024-05-13" className="full-width custom-date-input" />
            </div>
            <br /><br />
            <div className="date-input-container">
            <div className="d-flex justify-content-between">
              <label htmlFor="wd-available-from">Available from</label>
              <label htmlFor="wd-available-until" style={{ marginLeft: "15px" }}>Until</label>
            </div>
            <div className="date-range">
            <input type="date" id="wd-available-from" value="2024-05-06" className="custom-date-input"/>
            <input type="date" id="wd-available-until" value="2024-05-13" style={{ marginLeft: "5px" }} className="custom-date-input"/>
          </div></div></div>
        </td>
      </tr>
    </table>

    <hr />
    <div style={{ textAlign: 'right' }}>
        <button onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        <button onClick={handleSave} className="btn btn-primary" style={{ marginLeft: "10px" }}>Save</button>
      </div>

    </div>
  );
}

  