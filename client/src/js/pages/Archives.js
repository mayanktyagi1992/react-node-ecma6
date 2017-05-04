/**
 * Created by ttnd on 25/4/17.
 */

import React from "react";
import {Link , Route} from "react-router-dom";
require("../style/style.css")
import Study from "./Study"
import Research from "./Research"
import Theory from "./Theory"


export default class Archives extends React.Component {
    render(){
        return (
            <div className="archive-container">
                <div>
                <h1>Archives</h1>
                </div>
                <ul>
                    <li><Link to={`${this.props.match.url}/study`}>Study</Link></li>
                    <li><Link to={`${this.props.match.url}/research`}>Research</Link></li>
                    <li><Link to={`${this.props.match.url}/theory`}>Theory</Link></li>
                </ul>
                
                <Route path = {`${this.props.match.url}/study`} component = {Study}/>
                <Route path = {`${this.props.match.url}/research`} component = {Research}/>
                <Route path = {`${this.props.match.url}/theory`} component = {Theory}/>
            </div>
        )
    }
}
