import React from "react";
import "./style.css";

function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1>About Me</h1>
          <hr />
          <img src="assets/Headshot.jpg" id="photo" class="rounded float-left" height="150px" width="150px"
            alt="Ryan Siverson" />
          <p>
            I am a student at Denver University, currently enrolled in their twelve week Full Stack Web
            Development program.
                    On my <a href="portfolio.html">Portfolio</a> page, I have added a link to my updated resume, first
                    group project, two class assignments
                    and my GitHub repository. If you would like to contact me, check out the <a
              href="contact.html">Contact</a> page!
                </p>


        </div>
        <div class="col-md-4">

        </div>
      </div>
    </div>
  );
}

export default Home;
