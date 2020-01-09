import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
//import 

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              // i dont have a good looking picture right now but later add it on 
              src=""
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1> Diego Garcia</h1>
              <h1>Full Stack Web Developer</h1>
              

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | React Redux| NodeJS | Express | MongoDB | MongoDB Atlas   </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/diego-garcia-19a997167/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/DiegoG19" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>


        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
