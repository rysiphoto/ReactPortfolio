import React from "react";
import "./style.css";

function Contact() {
  return (
    <div>

      <div className="container" id="portBox">
        <div className="row">
          <div className="col-md-8" id="portBox">
            <h1>Contact Me</h1>
            <hr />
            <ul>
              <li><a href="mailto:rcsskier@mac.com?Subject=Hello%20Ryan" target="_top">Email Me</a></li>
              <p></p>
              <li>
                <a href="https://www.linkedin.com/in/ryan-siverson-695b5a32/" target="new">LinkedIn</a>
              </li>
              <p></p>
              <li>
                <a href="https://github.com/rysiphoto" target="new">GitHub Repository</a>
              </li>
              <p></p>
              <li>

                <a rel="noopener noreferrer" href="https://www.dropbox.com/s/7ir4vrzibese7lk/RCS-Resume-2020.pdf?dl=0" target="_blank">Download Resume PDF</a>
              </li>

            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;