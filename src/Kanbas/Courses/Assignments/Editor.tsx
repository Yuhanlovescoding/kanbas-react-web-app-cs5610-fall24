import React, { useState, ChangeEvent } from 'react';
export default function AssignmentEditor() {

  const [showOnlineOptions, setShowOnlineOptions] = useState(false);

    
    const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setShowOnlineOptions(event.target.value === 'ONLINE');
    };

    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={30} rows={5}>
          The assignment is available online Submit a link to the landing page of your 
          wed application running on Netlify. 
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
          
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="INTEGER">Integer</option>
            </select>
          </td>
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Display Grade as</label>
          </td>
          <td>
            <select id="wd-submission-type" onChange={handleTypeChange}>
    
              <option value="ONLINE">Online</option>
              <option value="IN PERSON">In Person</option>
            </select>
            {showOnlineOptions && (
              <div id="onlineOptions">
                <label>Online Entry Options</label><br />
                <input type="checkbox" name="online-opt" id="wd-chkbox-text"/>
                <label htmlFor="wd-chkbox-text">Text Entry</label><br/>

                <input type="checkbox" name="online-opt" id="wd-chkbox-web"/>
                <label htmlFor="wd-chkbox-web">Web URL</label><br/>

                <input type="checkbox" name="online-opt" id="wd-chkbox-media"/>
                <label htmlFor="wd-chkbox-media">Media Recordings</label><br/>

                <input type="checkbox" name="online-opt" id="wd-chkbox-student"/>
                <label htmlFor="wd-chkbox-student">Student Annotation</label>

                <input type="checkbox" name="online-opt" id="wd-chkbox-file"/>
                <label htmlFor="wd-chkbox-file">File Uploads</label>
              </div>
              )}
            </td>
          </tr> 

          <tr>
            <td rowSpan={4} align="right" valign="top">Assign</td>
            <td align="left" valign="top">
              <label htmlFor="wd-assign-to">Asign to</label><br />
              <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
              <label htmlFor="wd-due-date">Due</label><br />
              <input type="date" id="wd-due-date" value="2024-05-13"/>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
              <label htmlFor="wd-until" style={{ marginLeft: "35px" }}>Until</label><br />
              <input type="date" id="wd-available-from" value="2024-05-06"/>
              <input type="date" style={{ marginLeft: "5px" }}id="wd-until" value="2024-05-20"/>
          </td>
        </tr>
        

        
      </table>
    </div>
);}

  