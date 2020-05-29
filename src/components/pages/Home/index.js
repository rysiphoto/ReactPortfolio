import React from "react";
import "./style.css";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8" id="aboutBox">
          <h1>About Me</h1>
          <hr />
          <img src="assets/Headshot.jpg" id="photo" className="rounded float-left" height="150px" width="150px"
            alt="Ryan Siverson" />
          <p>
            I am a student at Denver University, currently enrolled in their twelve week Full Stack Web
            Development program. I am always willing and eager to learn new stills and trades to accomplish goals and conquer a problem that presents itself.
            While staying home during the COVID-19 pandemic, I have almost completed a 12 week coding bootcamp, learned to work on my Jeep, fixed a small
            engine and learned to weld. Some of these are not the most computer related ventures, but
             it shows I am able to see a problem or new venture and learn how to tackle it with success.</p>
          <p>
            On my <a href="/portfolio">Portfolio</a> page, I have added a link to my updated resume, first
                    group project, two class assignments
                    and my GitHub repository. If you would like to contact me, check out the <a
              href="/contact">Contact</a> page!
                </p>


        </div>

      </div>
    </div>
  );
}

export default Home;
