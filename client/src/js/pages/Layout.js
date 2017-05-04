/**
 * Created by ttnd on 20/4/17.
 */
import React from "react";
import {Link, Route} from "react-router-dom";

import Featured from './Featured';
import Archives from './Archives';
import About from "./About";
import Setting from "./Setting";


//statefull component
/*
export default class Layout extends React.Component {

    render(){
        return (
            <div class="clearfix wrapper">
                <div class="nav">
                    <ul>
                        <li><Link to="/archives">archives</Link></li>
                        <li><Link to="/featured">Featured</Link>
                        </li>
                        <li><Link to="/setting">Setting</Link></li>
                        <li><Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>


                <Route path="/featured" component={Featured}></Route>
                <Route path="/Archives" component={Archives}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/setting" component={Setting}></Route>



            </div>
        )
    }
}
*/


//stateless component
export default (props) => (
    <div className="clearfix wrapper">
        <div className="nav">
            <ul>
                <li><Link to="/archives">archives</Link></li>
                <li><Link to="/featured">Featured</Link>
                </li>
                <li><Link to="/setting">Setting</Link></li>
                <li><Link to="/about">About</Link>
                </li>
                <li><Link to="/about">{props.name}</Link>
                </li>
            </ul>

        </div>


        <Route path="/featured" component={Featured}></Route>
        <Route path="/Archives" component={Archives}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/setting" component={Setting}></Route>
    </div>
)
