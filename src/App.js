import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Counter from "./components/counter";
import Gallery from "./components/Gallery";
import About from "./components/About";
import GalleryDetails from "./components/GalleryDetails";
import React from "react";

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand navbar-brand m-2">
                <ul className="navbar-nav">
                    <li><Link className="nav-link" to={"/home"}>Home</Link></li>
                    <li><Link className="nav-link" to={"/counter"}>Counter</Link></li>
                    <li><Link className="nav-link" to={"/about"}>About</Link></li>
                    <li><Link className="nav-link" to={"/gallery"}>Gallery</Link></li>
                </ul>
            </nav>
            <div className="container">
                <Switch>
                    <Route path="/home"/>
                    <Route path="/counter" component={Counter}/>
                    <Route path="/about" component={About}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/details/:id" component={GalleryDetails}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
