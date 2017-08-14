import React, {Component} from 'react';
import $ from 'jquery'

const city_info_root = {
    color: '#fff',
    backgroundColor: '#E5644C',
    height: '100px',
    fontSize: '20px',
    textAlign: 'left',
    textIndent: '2em',
    marginTop: '20px',
    padding:'20px',
    marginLeft:'10px',
    marginRight:'10px'
}

const CityInfo = React.createClass({

    getInitialState:function () {

        return {name:'成都',
                weather:'天气阵雨',
                tmp:'气温：14°',
                hum:'温度：66%'};
    },

    componentDidMount: function() {
        this.serverRequest = $.get('https://free-api.heweather.com/v5/weather?key=93d476b872724a9681a642dce28c6523&&city=成都',
            function (result) {
                var weather= result.HeWeather5;
                this.setState({
                    name: weather[0].basic.city,
                    weather:weather[0].daily_forecast[0].cond.txt_n,
                    tmp:weather[0].now.tmp + "°",
                    hum:weather[0].now.hum + "%",
                });
            }.bind(this));
    },

    render:function () {
        return(
            <div style={city_info_root}>
                <div>
                    <div style={{float:'left',width:'150px',height:'30px'}}>
                        <span style={{fontSize:'20px'}}>{this.state.name}</span>
                    </div>
                    <div style={{float:'right',width:'150px',height:'30px'}}>
                        <span style={{fontSize:'20px'}}>{this.state.weather}</span>
                    </div>
                </div>
                <div style={{marginTop:'70px',width:'100%',height:'30px'}}>
                    <div style={{float:'left',width:'150px',height:'30px'}}>
                        <span style={{fontSize:'20px'}}>{this.state.tmp}</span>
                    </div>
                    <div style={{float:'left',width:'150px',height:'30px'}}>
                        <span style={{fontSize:'20px'}}>{this.state.hum}</span>
                    </div>
                    <div style={{float:'right',width:'150px',height:'30px'}}>

                    </div>
                </div>
            </div>
        )
    }
})

export default CityInfo