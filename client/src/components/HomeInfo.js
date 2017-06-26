import React from 'react';
import { Link } from 'react-router-dom';

class HomeInfo extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <div className="homeInfo font1 col s12 m6 l6">

        <br/>
        <div className="smMargin">
          <h4 className="center"> Neruological Patient Initiative</h4>
          <p className="lgText">Providing patients, family, and caregivers impacted by neurological disorders a venue to create future innovations and guide neuroscience research </p>

            <div className="card horizontal">

              <div className="card-image">
                <p className="material-icons">image </p>
              </div>

              <div className="card-stacked">
                <div className="card-content">
                  <h5 className="subtitle"> Have a Voice</h5>
                  <p>We are interested in learning about the challenges you face everyday.  Our goal is to find solutions to these challenges through a network of professional and aspiring scientists, engineers, programmers, students, and makers.</p>
                </div>
              </div>
            </div>

            <div className="card horizontal">

              <div className="card-stacked">
                <div className="card-content">
                  <h5 className="subtitle"> Make an Impact</h5>
                  <p>We are interested in learning about the challenges you face everyday.  Our goal is to find solutions to these challenges through a network of professional and aspiring scientists, engineers, programmers, students, and makers.</p>
                </div>
              </div>

              <div className="card-image">
              <p className="material-icons">image </p>
              </div>
            </div>

        <div className="card horizontal">

          <div className="card-image">
            <p className="material-icons">image </p>
          </div>

          <div className="card-stacked">
            <div className="card-content">
              <h5 className="subtitle"> Find Inspiration</h5>
              <p>We are interested in learning about the challenges you face everyday.  Our goal is to find solutions to these challenges through a network of professional and aspiring scientists, engineers, programmers, students, and makers.</p>
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
