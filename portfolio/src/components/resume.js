import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src=""
                //later added when i take a professional pictures
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Diego Garcia</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>This is a basic resume that display my information.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(972) 834-5516</p>
            <h5>Email</h5>
            <p>gd369234@gmail.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2017}
              schoolName="North Central Texas College"
              schoolDescription="Basic Courses Associate Degree"
               />

               <Education
                 startYear={2019}
                 endYear={2019}
                 schoolName="SMU"
                 schoolDescription="SMU Coding Bootcamp"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={20017}
              endYear={2018}
              jobName="Boulder Winnelson"
              jobDescription="Wearhouse associate and general work"
              />

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Home Depot "
                jobDescription="Over night wearhouse employee"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
