import React from "react";

function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1>Portfolio</h1>
          <hr />


          <div class="row row-cols-1 row-cols-md-3">

            <div class="col mb-4">
              <div class="card h-100">
                <img src="assets/Github.png" class="card-img-top" alt="GitHub Repository" />
                <div class="card-body">
                  <h5 class="card-title">GitHub Repository</h5>
                  <p><a href="https://github.com/rysiphoto" target="_blank">GitHub Repository</a></p>

                </div>
              </div>
            </div>

            <div class="col mb-4">
              <div class="card h-100">
                <img src="assets/BF_screenshot.png" class="card-img-top" alt="Boozy Food" />
                <div class="card-body">
                  <h5 class="card-title">Boozy Food</h5>
                  <p><a href="https://kimberlitompkins.github.io/project1/" target="_blank">Public
                                        Site</a></p>
                  <p><a href="https://github.com/KimberliTompkins/project1" target="_blank">GitHub
                                        Site</a></p>
                </div>
              </div>
            </div>

            <div class="col mb-4">
              <div class="card h-100">
                <img src="assets/notetaker.png" class="card-img-top" alt="Note Taker" />
                <div class="card-body">
                  <h5 class="card-title">Note Taker</h5>
                  <p><a href="https://frozen-mountain-67322.herokuapp.com/" target="_blank">Public
                                        Site</a></p>
                  <p><a href="https://github.com/rysiphoto/Note-Taker" target="_blank">GitHub
                                        Site</a></p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src="assets/eattb.png" class="card-img-top" alt="Eat The Burger Screenshot" />
                <div class="card-body">
                  <h5 class="card-title">Eat The Burger</h5>
                  <p><a href="https://fierce-anchorage-76960.herokuapp.com/" target="_blank">Public
                                        Site</a></p>
                  <p><a href="https://github.com/rysiphoto/EatTheBurger" target="_blank">GitHub
                                        Site</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <img src="assets/ale.png" class="card-img-top" alt="Alewery" />
                <div class="card-body">
                  <h5 class="card-title">Alewery</h5>
                  <p><a href="https://mighty-depths-48025.herokuapp.com/" target="_blank">Public
                                        Site</a></p>
                  <p><a href="https://github.com/rysiphoto/Alewery" target="_blank">GitHub
                                        Site</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <img src="assets/mountains.jpg" class="card-img-top" alt="Colorado Mountains" />
                <div class="card-body">
                  <h5 class="card-title">Resume</h5>
                  <p><a href="assets/RCS-Resume-2020.pdf" target="_blank">Download PDF</a></p>
                </div>
              </div>
            </div>

          </div>



        </div>
        <div class="col-md-4">

        </div>
      </div>
    </div>
  );
}

export default Portfolio;