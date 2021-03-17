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


function App() {
  return (
    <div className="App">
    <NavBar />
    
    <Switch>

    <Route exact path='/' component={HomePage} />
    <Route exact path='/about' component={About} />
    <Route exact path='/projects' component={Projects} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/project1' component={Project1} />
    <Route exact path='/project2' component={Project2} />
    <Route exact path='/project3' component={Project3} />



    </Switch>


      


      <Footer />
    </div>
  );
}

export default App;
