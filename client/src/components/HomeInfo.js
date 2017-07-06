import React from 'react';

class HomeInfo extends React.Component{

  render() {
    return (
      <div>
          <div className="homeInfoContainer container font1 col s12 m7 l7 ">

              <br/>
              <div>
                  <p className="lgText">Providing patients, family, and caregivers impacted by neurological disorders a venue to create future innovations and guide neuroscience research </p>

                  <div className="card horizontal" id="heyhey">
                      <div className="card-image">
                          <p className="material-icons"><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/552563-200.png"></img></p>
                      </div>
                      <div className="card-stacked frontDiv">
                          <div className="card-content">
                              <h5 className="subtitle"> Ideas are Proposed </h5>
                          </div>
                      </div>
                  </div>

                  <div className="card horizontal" id="heyhey">
                    <div className="card-image">
                      <p className="material-icons"><img src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Glasses-3-icon.png"></img></p>
                    </div>
                      <div className=" card-stacked frontDiv">
                          <div className="card-content">
                              <h5 className="subtitle"> Solutions are Reviewed </h5>
                          </div>
                      </div>
                  </div>

                  <div className="card horizontal" id="heyhey">
                      <div className="card-image">
                          <p className="material-icons"><img src="https://cdn3.iconfinder.com/data/icons/abstract-1/512/Inspiration_B-512.png"></img></p>
                      </div>
                      <div className="card-stacked frontDiv">
                          <div className="card-content">
                              <h5 className="subtitle"> Challenges are Solved </h5>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
    );
  }
}

export default HomeInfo
