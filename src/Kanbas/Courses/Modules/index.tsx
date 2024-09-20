export default function Modules() {
    return (
      <div>
        <button>Collapse All</button> <button>View Progress</button>
        <select id="wd=publish">
          <option value="PUBLISH ALL">Publish All</option>
        </select>
        <button>+ Module</button>
       
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP sever with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
              </li>

            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2, Lecture 2 - Formating User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                  <span className="wd-title">LEARNING OBJECTIVES</span>
                  <ul className="wd-content">
                    <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                    <li className="wd-content-item">Keep working in assignment 1</li>
                    <li className="wd-content-item">Deploy the assignment to Netlify</li>
                  </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Embeding content with Iframes</li>
                  <li className="wd-content-item">Drawing with Scalable Vector Graphics</li>
                </ul>
              </li>


            </ul>
          </li>
        </ul>
      </div>
  );
}
  
  