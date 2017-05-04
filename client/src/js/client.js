import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
} from 'react-router-dom';

import Layout from "./pages/Layout"

const app = document.getElementById('app');
ReactDOM.render(
    <Router>
        <div>
            <Layout name="mayank"/>
        </div>
    </Router>
    , app);