import React from 'react';

class HomeInfo extends React.Component{

  render() {
    return (
      <div>
          <div className="homeInfoContainer container font1 col s12 m7 l7 ">

              <br/>
              <div>
                  <h3 className="center" id="innervate">Innervate</h3><br/>
                  <p className="lgText">Providing patients, family, and caregivers impacted by neurological disorders a venue to create future innovations and guide neuroscience research </p>

                  <div className="card horizontal" id="heyhey">
                      <div className="card-image">
                          <p className="material-icons"><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/552563-200.png"></img></p>
                      </div>
                      <div className="card-stacked">
                          <div className="card-content">
                              <h5 className="subtitle"> Have a Voice</h5>
                          </div>
                      </div>
                  </div>

                  <div className="card horizontal" id="heyhey">
                    <div className="card-image">
                      <p className="material-icons"><img src="https://openclipart.org/image/2400px/svg_to_png/231209/Power-Fist-bw-2015060409.png"></img></p>
                    </div>
                      <div className="card-stacked">
                          <div className="card-content">
                              <h5 className="subtitle"> Make an Impact</h5>
                          </div>
                      </div>
                  </div>

                  <div className="card horizontal" id="heyhey">
                      <div className="card-image">
                          <p className="material-icons"><img src="https://cdn3.iconfinder.com/data/icons/abstract-1/512/Inspiration_B-512.png"></img></p>
                      </div>
                      <div className="card-stacked">
                          <div className="card-content">
                              <h5 className="subtitle">Find Inspiration</h5>
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
