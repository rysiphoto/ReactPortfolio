import React from "react";
import "./style.css";
import GitHub from "../../../assets/Github.png";
import BF_screenshot from "../../../assets/BF_screenshot.png";
import eattb from "../../../assets/eattb.png";
import notetaker from "../../../assets/notetaker.png";
import mountains from "../../../assets/mountains.jpg";
import ale from "../../../assets/ale.png";

function Portfolio() {
  return (
    <div className="container" id="portBox">
      <div className="row">
        <div className="col-md-8" id="portBox">
          <h1>Portfolio</h1>
          <hr />


          <div className="row row-cols-1 row-cols-md-3">

            <div className="col mb-4">
              <div className="card h-100">
                <img src={GitHub} id="photo" className="card-img-top" alt="GitHub Repository" />
                <div className="card-body">
                  <h5 className="card-title">GitHub Repository</h5>
                  <p><a rel="noopener noreferrer" href="https://github.com/rysiphoto" target="_blank">GitHub Repository</a></p>

                </div>
              </div>
            </div>

            <div className="col mb-4">
              <div className="card h-100">
                <img src={BF_screenshot} id="photo" className="card-img-top" alt="Boozy Food" />
                <div className="card-body">
                  <h5 className="card-title">Boozy Food</h5>
                  <p><a rel="noopener noreferrer" href="https://kimberlitompkins.github.io/project1/" target="_blank">Public
                                        Site</a></p>
                  <p><a rel="noopener noreferrer" href="https://github.com/rysiphoto/Boozy-Food" target="_blank">GitHub
                                        Site</a></p>
                </div>
              </div>
            </div>

            <div className="col mb-4">
              <div className="card h-100">
                <img src={notetaker} id="photo" className="card-img-top" alt="Note Taker" />
                <div className="card-body">
                  <h5 className="card-title">Note Taker</h5>
                  <p><a rel="noopener noreferrer" href="https://frozen-mountain-67322.herokuapp.com/" target="_blank">Public
                                        Site</a></p>
                  <p><a rel="noopener noreferrer" href="https://github.com/rysiphoto/Note-Taker" target="_blank">GitHub
                                        Site</a></p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card h-100">
                <img src={eattb} id="photo" class="card-img-top" alt="Eat The Burger Screenshot" />
                <div class="card-body">
                  <h5 class="card-title">Eat The Burger</h5>
                  <p><a rel="noopener noreferrer" href="https://fierce-anchorage-76960.herokuapp.com/" target="_blank">Public
                                        Site</a></p>
                  <p><a rel="noopener noreferrer" href="https://github.com/rysiphoto/EatTheBurger" target="_blank">GitHub
                                        Site</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <img src={ale} id="photo" class="card-img-top" alt="Alewery" />
                <div class="card-body">
                  <h5 class="card-title">Alewery</h5>
                  <p><a rel="noopener noreferrer" href="https://mighty-depths-48025.herokuapp.com/" target="_blank">Public
                                        Site</a></p>
                  <p><a rel="noopener noreferrer" href="https://github.com/rysiphoto/Alewery" target="_blank">GitHub
                                        Site</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <img src={mountains} id="photo" class="card-img-top" alt="Colorado Mountains" />
                <div class="card-body">
                  <h5 class="card-title">Resume</h5>
                  <p><a rel="noopener noreferrer" href="assets/RCS-Resume-2020.pdf" target="_blank">Download PDF</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <p>
                <br />
                <br />
                <br />
              </p>
            </div>



          </div>

        </div>
      </div>
    </div>

  );
}

export default Portfolio;