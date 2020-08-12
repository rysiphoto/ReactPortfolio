import React from "react";
import "./style.css";
import Headshot from "../../../assets/Headshot.jpg";
import Background from "../../../assets/bg.jpg";


function Home() {
  return (
    <div className="container" styles={{ backgroundImage: `url(${Background})` }}>
      <div className="row">
        <div className="col-md-8" id="aboutBox">
          <h1>About Me</h1>
          <hr />
          <img src={Headshot} id="photo" className="rounded float-left" height="150px" width="150px"
            alt="Ryan Siverson" />
          <p>
            I am a recent graduate of University of Denver's full time Full Stack Web Development boot camp. I am
            always willing and eager to learn new skills and trades to accomplish goals and conquer a problem that
            presents itself.
            While staying home during the COVID-19 pandemic, I have completed an intense 12 week coding boot camp,
            learned to work on my Jeep, fix a small engine, planted two gardens and learned to weld.
            Some of these are not the most computer-related ventures, but it shows I am able to see a
             problem or new venture and learn how to tackle it with success.</p>
          <p>
            On my <a href="/portfolio">Portfolio</a> page, I have added a link to my updated resume, first two
                    group projects, two class assignments
                    and my GitHub repository. If you would like to contact me, check out my <a
              href="/contact">Contact</a> page!
                </p>


        </div>

      </div>
    </ div>
  );
}

export default Home;
