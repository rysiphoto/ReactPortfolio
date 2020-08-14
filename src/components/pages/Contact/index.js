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
              <li><a href="mailto:rcsskier@mac.com?Subject=Hello%20Ryan" target="_top">Email</a></li>
              <p></p>
              <li><a href="https://www.linkedin.com/in/ryan-siverson-695b5a32/" target="new">LinkedIn</a></li>

            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;