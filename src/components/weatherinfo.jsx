import React from 'react';

const weather_root = {
    color: '#fff',
    backgroundColor: '#2e8b57',
    height: '220px',
    fontSize: '20px',
    textAlign: 'left',
    textIndent: '2em',
    marginTop: '20px',

}

const weather_date = {
    height: '20px',
    marginTop: '10px'
}

const weather_tmp = {
    marginTop: '20px',
    height: '50px',
    // overflow:'hidden'
}
const weather_info = {
    marginTop: '20px',
    height: '140px',
}


class WeatherInfo extends React.Component {

    render() {
        return (
            <div style={weather_root}>
                <div style={weather_date}>
                    <p style={{float: 'left', marginTop: '10px', height: '10px'}}>今天 {this.props.today_date}</p>
                    <p style={{float: 'right', marginTop: '10px', height: '10px',marginRight:'100px'}}>最近更新 {this.props.recent_update}</p>
                    <i></i>
                </div>

                <div style={weather_tmp}>
                    <div style={{float: 'left'}}>
                        <span style={{color: 'white', fontSize: '30px', float: 'left'}}>{this.props.info_temp} °</span>
                        {/*<img src={this.props.temp_pic} style={{height: '40px', width: '50px', float: 'left'}}/>*/}
                    </div>

                    <div style={{float: 'right', marginRight: '200px'}}>
                        <div>
                            <span style={{fontSize: '15px'}}>高： {this.props.high_temp} °</span>
                        </div>
                        <div>
                            <span style={{fontSize: '15px'}}>低： {this.props.low_temp} °</span>
                        </div>
                    </div>
                </div>

                <div style={weather_info}>
                    <div style={{float: 'left',width:'500px'}}>
                        <div style={{width: '500px',height:'30px'}}>
                            <div style={{float: 'left'}}>
                                <span style={{fontSize: '20px'}}>{this.props.cloth}</span>
                            </div>
                            <div style={{float: 'left'}}>
                                <span style={{fontSize: '20px'}}>{this.props.condition}</span>
                            </div>
                        </div>
                        <div style={{width: '500px',height:'60px'}}>
                            <div style={{float: 'left'}}>
                                <div>
                                    <span style={{fontSize: '15px'}}>{this.props.pm}</span>
                                </div>
                                <div>
                                    <span style={{fontSize: '15px'}}>PM2.5</span>
                                </div>
                            </div>
                            <div style={{float: 'left'}}>
                                <div>
                                    <span style={{fontSize: '15px'}}>{this.props.hum}</span>
                                </div>
                                <div>
                                    <span style={{fontSize: '15px'}}>湿度</span>
                                </div>
                            </div>
                            <div style={{float: 'left'}}>
                                <div>
                                    <span style={{fontSize: '15px'}}>{this.props.wind}</span>
                                </div>
                                <div>
                                    <span style={{fontSize: '15px'}}>风向</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{float: 'right', marginRight: '200px',marginTop:'70px'}}>详细</div>
                </div>

            </div>

        )
    }
}

//导出组件
export default WeatherInfo;