import React from 'react';


class CommonIndex extends React.Component {
    render() {
        return (
            <div style={this.props.root_style}>
                <div style={{height:'60px',width:'400px',paddingTop:'20px'}}>
                    <div style={{float: 'left',width:'50px',height:'60px'}}>
                        <img src={this.props.pic} style={{width:'40px',height:'40px'}}/>
                    </div>
                    <div style={{float: 'left'}}>
                        <span style={{fontSize: '20px'}}>{this.props.blef}</span>
                    </div>
                </div>
                    <span style={{marginLeft:'40px',fontSize: '20px', marginRight: '200px', width: '900px'}}>
                        {this.props.des}</span>
            </div>

        )
    }
}

export default CommonIndex;