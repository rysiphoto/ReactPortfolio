import React from "react";
import "./style.css";
import BF_screenshot from "../../../assets/BF_screenshot.png";
import eattb from "../../../assets/eattb.png";
import notetaker from "../../../assets/notetaker.png";
import CheapTravel from "../../../assets/CheapTravel.jpg";
import ale from "../../../assets/ale.png";

function Portfolio() {
  return (
    <div className="container" id="portBox">
      <div className="row">
        <div className="col-md-10" id="portBox">
          <h1>Portfolio</h1>
          <hr />


          <div className="row row-cols-1 row-cols-md-2">

            {/* <div className="col mb-4">
              <div className="card h-100">
                <img src={GitHub} id="photo" className="card-img-top" alt="GitHub Repository" />
                <div className="card-body">
                  <h5 className="card-title">GitHub Repository</h5>
                  <p><a rel="noopener noreferrer" href="https://github.com/rysiphoto" target="_blank">GitHub Repository</a></p>

                </div>
              </div>
            </div> */}

            <div className="col mb-4" id="cardBorder">
              <div className="card h-100">
                <img src={BF_screenshot} id="photo" className="card-img-top" alt="Boozy Food" />
                <div className="card-body">
                  <h6 className="card-title">
                    <b>
                      Boozy Food
                      </b>
                       - This site was inspired by not having easy access to a grocery store while COVID-19 was disrupting the supply chain in grocery stores. The Spoontacular API would generate several recipes based on up to three food items you have at your disposal. On the left-hand side, we added a random drink generator to give you inspiration for a drink of your choice you'd like to make. The color palette consists of warm tones.
                  </h6>
                  <div class="card-title">
                    <a rel="noopener noreferrer" href="https://kimberlitompkins.github.io/project1/" target="_blank">Public
                                        Site</a>
                  </div>
                  <div class="card-title">
                    <a rel="noopener noreferrer" href="https://github.com/rysiphoto/Boozy-Food" target="_blank">GitHub
                                        Site</a>
                  </div>
                  <div class="card-title">
                    <b>Technology used:</b> HTML, JavaScript, CSS, Bulma UI, External APIs, jQuery
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-4" id="cardBorder">
              <div className="card h-100">
                <img src={notetaker} id="photo" className="card-img-top" alt="Note Taker" />
                <div className="card-body">
                  <h6 className="card-title">
                    <hr />
                    <b>
                      Note Taker
                      </b>
                       - Allows you to add and remove tasks and a description of that task through the interface.
                        </h6>
                  <div class="card-title">
                    <a rel="noopener noreferrer" href="https://frozen-mountain-67322.herokuapp.com/" target="_blank">Public
                                        Site</a>
                  </div>
                  <div class="card-title">
                    <a rel="noopener noreferrer" href="https://github.com/rysiphoto/Note-Taker" target="_blank">GitHub
                                        Site</a>
                  </div>
                  <div class="card-title">
                    <b>Technology used:</b> HTML, JavaScript, CSS, Express, JSON, Async, Node, routes, Heroku deployment
                  </div>
                </div>

              </div>
            </div>
            <div className="col mb-4" id="cardBorder">
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

            <div class="col mb-4" id="cardBorder">
              <div class="card h-100">
                <img src={ale} id="photo" class="card-img-top" alt="Alewery" />
                <div class="card-body">
                  <h6 className="card-title">
                    <hr />
                    <b>
                      Alewery
                      </b>
                       - I’m a BREWERY who wants to SECURELY create and log into a web-based resource where I can add and update the selection of beers I’m currently offering to Colorado Front Range taproom customers.
                       As a BREWERY, I want to be able to add and update the beers I’m serving to the app’s database.
                       I want to store my address, email, and phone number.
                        </h6>
                  <div class="card-title">
                    <a rel="noopener noreferrer" href="https://mighty-depths-48025.herokuapp.com/" target="_blank">Public
                                        Site</a>
                  </div>
                  <div class="card-title">
                    <a rel="noopener noreferrer" href="https://github.com/rysiphoto/Alewery" target="_blank">GitHub
                                        Site</a>
                  </div>
                  <div class="card-title">
                    <b>Technology used:</b> Node.js, Express, Express-Session, Sequelize, JavaScript, HTML, CSS, PUG, MySQL, BCRYPT, BCRYPTJS, Passport, and Route creation
                  </div>
                </div>

              </div>
            </div>

            <div class="col mb-4" id="cardBorder">
              <div class="card h-100">
                <img src={CheapTravel} id="photo" class="card-img-top" alt="CheapTravel" />
                <div class="card-body">
                  <h6 class="card-title">
                    <b>
                      Cheap Travel
                      </b>
                       - Finding a cheap getaway right now is paramount at a time like this. It's also incredibly helpful to find reviews and tips for vacation destinations, along with finding the best deals! That is why we created this site. A React built site that allows you to log in using Auto0 and leave reviews of inexpensive trips you have taken to inspire others. A travel API has been implemented to search for cheap travel as well.
                  </h6>

                  <div class="card-title">
                    <a rel="noopener noreferrer" href="https://desolate-citadel-71436.herokuapp.com/" target="_blank">Public
                                        Site</a>
                  </div>
                  <div class="card-title">
                    <a rel="noopener noreferrer" href="https://github.com/rysiphoto/Cheap-Travel" target="_blank">GitHub
                                        Site</a>
                  </div>
                  <div class="card-title">
                    <b>Technology used:</b> JavaScript, MonogoDB, React, Auth0, Express, REST, MERN, Mongoose, Semantic UI, HTML, CSS, API, Route creation
                  </div>
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