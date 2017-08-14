import React from 'react';


const future_root = {
    color: '#fff',
    backgroundColor: '#3F51B5',
    height: '180px',
    fontSize: '20px',
    textAlign: 'left',
    textIndent: '2em',
    marginTop: '20px',

}

class FutureInfo extends React.Component {

    render() {
        return (
            <div style={future_root}>
                <div style={{paddingTop: '10px'}}>
                    <span style={{fontSize: '20px'}}>未来3小时天气</span>
                </div>
                <div style={{marginTop: '50px', width: '100%', height: '30px'}}>
                    <div style={{float: 'left'}}>
                        <span style={{fontSize: '20px'}}>降水概率: {this.props.rainfall}</span>
                    </div>
                    <div style={{float: 'right'}}>
                        <span style={{fontSize: '20px', marginRight: '200px'}}>{this.props.time}</span>
                    </div>
                </div>
                <div style={{marginTop: '20px', width: '400px', height: '30px'}}>
                    <div style={{float: 'left'}}>
                        <span style={{
                            fontSize: '20px',
                            width: '150px',
                            height: '30px'
                        }}>气温: {this.props.temp}</span>
                    </div>
                    <div style={{float: 'left'}}>
                        <span style={{
                            fontSize: '20px',
                            width: '150px',
                            height: '30px'
                        }}>风向: {this.props.future_wind}</span>
                    </div>
                </div>
            </div>

        )
    }
}

export default FutureInfo;
