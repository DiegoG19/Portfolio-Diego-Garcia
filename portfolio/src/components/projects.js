import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Project #1</CardTitle>
            <CardText>
            This site is for all craft beer lovers in Dallas! Created with google maps api, and making use of a substantial amount of collected data, this app aims to help users find their favorite beers in Dallas and the breweries where you can find them.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/Nima99/The-Brewers">GitHub</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} > Project #2</CardTitle>
            <CardText>
              Benchwarmers is a app that lets our users make a fantasy team by showing them stats from a api that shows current stats for the best picks.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/fred-h-nguyen/Benchwarmer">GitHub</Button>
              <Button colored a href="https://project-2-track-app.herokuapp.com">Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} > Project #3</CardTitle>
            <CardText>
              This project was a solo project that gives my users the top games being viewed by current viewers and save them to favorites.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/DiegoG19/Topshots">GitHub</Button>
              <Button colored>Demo</Button>
            {/*currently down later fix it  */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


           {/* Course Work 1 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} > Friend Finder</CardTitle>
            <CardText>
             This is one of my course work that i worked on during my bootcamp. This application is a simple friend finder thats shows the dogs the you match with by answering the question.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/DiegoG19/Friend-Finder-">GitHub</Button>
              <Button colored a href="https://polar-dusk-00701.herokuapp.com/">Demo</Button>
           
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


           {/* Course work 2*/}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Liri Bot</CardTitle>
            <CardText>
              This is a application that lets the user find songs by a api that collects data to show where they are playing at.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/DiegoG19/Liri-bot">GitHub</Button>
              
           
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


           {/* Course Work 3*/}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} > Bamazon</CardTitle>
            <CardText>
              This app is a in store experience that lets buy and restock the store called Bamazon.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/DiegoG19/Bamazon">GitHub</Button>
              
              {/*this is in video*/}
            
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>Course work</h1></div>
        
      )
      // later add the course work here instead of having it in one place 
    
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Main Projects</Tab>
          <Tab>Course Work</Tab>
         
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
