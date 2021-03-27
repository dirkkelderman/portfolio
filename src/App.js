import './App.css';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/home/HomePage';
import Projects from './components/projects/ProjectsList';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { Route, Switch, Redirect, withRouter, Link } from "react-router-dom";
import AboutIcon from './components/about/abouticon.svg'
import ProjectIcon from './components/projects/projectsicon.svg'
import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project3 from './components/projects/Project3';

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Component } from 'react';
import "./pageTransitions/slideTransitions.scss"

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       prevDepth: this.getPathDept(this.props.location)
//     };
//   }

//   componentWillReceiveProps() {
//     this.setState({prevDepth: this.getPathDept(this.props.location)}) 
//   }

//   getPathDept(location) {
//     let pathArr = location.pathname.split("/");
//     pathArr = pathArr.filter(n => n !== "")
//     return pathArr.length
//   }

//   render() {
//     const { location } = this.props
//     const currentKey = location.pathname.split("/")[1] || "/";
//     const timeout = {enter: 800, exit: 400};

//   return (
    
//     <TransitionGroup component="div" className="App">

//     <NavBar />
    
//     <CSSTransition key={currentKey} timeout={timeout} className="pageSlider" mountOnEnter={false} unmountOnExit={true}>    
//       <div className={this.getPathDept(location) - this.state.prevDepth >= 0 ? "left" : "right"}>
//       <Switch location={ location }>
//         <Route exact path='/' component={HomePage} />
//         <Route  path='/about' component={About} />
//         <Route  path='/projects' component={Projects} />
//         <Route  path='/contact' component={Contact} />
//         <Route  path='/project1' component={Project1} />
//         <Route  path='/project2' component={Project2} />
//         <Route  path='/project3' component={Project3} />
//       </Switch>
//       </div>
//     </CSSTransition>

//       <Footer />
//     </TransitionGroup>
//   );
// }
// }

// export default withRouter(App);

// import React, { Component } from "react";
// import "./App.css";
// import HomePage from "./pages/homePage";
// import { Switch, Route, withRouter } from "react-router-dom";
// import AboutPage from "./pages/aboutPage";

// import { TransitionGroup, CSSTransition } from "react-transition-group";

// import "./pageTransitions/slideTransition.scss";

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    prevDepth: this.getPathDepth(this.props.location)
  };
}

componentWillReceiveProps() {
  this.setState({ prevDepth: this.getPathDepth(this.props.location) });
}

getPathDepth(location) {
  let pathArr = location.pathname.split("/");
  pathArr = pathArr.filter(n => n !== "");
  return pathArr.length;
}

  render() {
    const { location } = this.props;

    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 800, exit: 400 };

    return (
      <TransitionGroup component="div" className="App">
      <NavBar />
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit={true}
        >
<div
  className={
    this.getPathDepth(location) - this.state.prevDepth >= 0
      ? "left"
      : "right"
  }
>
  <Switch location={location}>
    <Route path="/" exact component={HomePage} />
    <Route path="/about" exact component={About} />
    <Route path='/projects' component={Projects} />
    <Route  path='/contact' component={Contact} />
    <Route  path='/project1' component={Project1} />
    <Route  path='/project2' component={Project2} />
    <Route  path='/project3' component={Project3} />
  </Switch>
</div>
        </CSSTransition>
        <Footer />
      </TransitionGroup>
    );
  }
}

export default withRouter(App);
