//首页.jsx

import Manage from '../Manage.js'
import List from './list.jsx'
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


// var FontAwesome = require('react-fontawesome');

const styles = {
	color:'#fff',
	backgroundColor:'#2e8b57',
    height:'60px',
    lineHeight:'60px',
    fontSize:'20px',
    textAlign:'left',
    textIndent:'2em'
}

class header extends React.Component {
    render() {
        return (
            <Router>
                <div style={styles}>

                    <a href={this.props.site} style={{marginRight:'2em',float:'right'}}>
                        <Link to="/manage">
                        <img src={this.props.pic} style={{ height: '60px',
                            width: '60px'}} alt="add"/> </Link>
                    </a>
                    <div style={{float:'left'}}>
                        <img src={this.props.back} style={styles}/>
                    </div>
                    <div>
                        {this.props.name}

                    </div>
                    <i></i>
                </div>

            </Router>

        )
    }
}

//导出组件
export default header;