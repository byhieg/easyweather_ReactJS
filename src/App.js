import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import add from './ic_add_white_24dp.png'
import back from './ic_keyboard_arrow_right_white_24dp.png'
import Manage from "./Manage"
import Content from "./components/content.jsx"
import Province from './province'


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const styles = {
    color:'#fff',
    backgroundColor:'#2e8b57',
    height:'60px',
    lineHeight:'60px',
    fontSize:'20px',
    textAlign:'left',
    textIndent:'2em',
    marginTop:'10px',
    marginLeft:'10px',
    marginRight:'10px'
}

const App = React.createClass({

    getInitialState: function() {
        return {cityName: '成都',
        pic:add,
        link:'/manage'};
    },

    handleChange: function(event) {
        this.setState({cityName:'城市管理'});
        this.setState({link:'/manage'})
        this.setState({pic:back})
        if (this.state.link = '/manage'){
            this.setState({link:'/province'})
        }

    },
    render:function () {
        return (
            <Router>
                <div>
                    <div style={styles}>
                        <a href={this.props.site} style={{marginRight:'2em',float:'right'}}>
                            <Link to={this.state.link}>
                                <img src={this.state.pic} style={{ height: '60px',
                                    width: '60px'}} alt="add" onClick={this.handleChange}/> </Link>
                        </a>
                        <div style={{float:'left'}}>
                            <img src={this.props.back} style={styles}/>
                        </div>
                        <div>
                            {this.state.cityName}
                        </div>
                        <i></i>
                    </div>

                    <div>
                        <Route path="/manage" component={Manage}/>
                        <Route path="/province" component={Province}/>
                        <Route exact path="/" component={Content}/>
                    </div>
                </div>
            </Router>
        );
    }
});


export default App;
