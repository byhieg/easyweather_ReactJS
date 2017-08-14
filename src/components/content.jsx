import React, {Component} from 'react';
import '../App.css';
import add from '../ic_add_white_24dp.png'
import WeatherInfo from '../components/weatherinfo'
import FutureInfo from "../components/future";
import SportPic from '../sports.png'
import Cloth from '../cloths.png'
import Cold from '../cold.png'
import CommonIndex from "../components/commonindex";
import $ from 'jquery'

var date = new Date();

var sportColorStyle = {
    backgroundColor: '#E5644C',
    color: '#fff',
    height: '150px',
    fontSize: '20px',
    textAlign: 'left',
    textIndent: '2em',
    marginTop: '20px',
}

var clothColorStyle = {
    backgroundColor: '#88C5CC',
    color: '#fff',
    height: '150px',
    fontSize: '20px',
    textAlign: 'left',
    textIndent: '2em',
    marginTop: '20px',
}

var fluxColorStyle = {
    backgroundColor: '#51B9D6',
    color: '#fff',
    height: '150px',
    fontSize: '20px',
    textAlign: 'left',
    textIndent: '2em',
    marginTop: '20px',
}


const Content = React.createClass({

    getInitialState: function() {
        var date = new Date().toLocaleDateString();
        return {today_date:date,
                update_time:date,
                tmp:'14',
            high_temp:'20',
            low_temp:'10',
            cloth:'较舒适',
            condition:'好',
            pm:'270',
            hum:'潮湿',
            wind:'东南风',
            rainfall:'87%',
            time:date,
            temp:'24',
            future_wind:'微风',
            des_sport:'白天不太热也不太冷，风力不大，相信您在这样的天气条件下，应会感到比较清爽和舒适。',
            des_cloth:'白天不太热也不太冷，风力不大，相信您在这样的天气条件下，应会感到比较清爽和舒适。',
            des_clod:'白天不太热也不太冷，风力不大，相信您在这样的天气条件下，应会感到比较清爽和舒适。'
        };

    },

    componentDidMount: function() {
        this.serverRequest = $.get('https://free-api.heweather.com/v5/weather?key=93d476b872724a9681a642dce28c6523&&city=成都',
            function (result) {
            var weather= result.HeWeather5;
            this.setState({
                update_time: weather[0].basic.update.loc,
                tmp:weather[0].now.tmp,
                high_temp:weather[0].daily_forecast[0].tmp.max,
                low_temp:weather[0].daily_forecast[0].tmp.min,
                cloth:weather[0].daily_forecast[0].tmp.min,
                condition:weather[0].now.cond.txt,
                pm:weather[0].aqi.city.pm25,
                hum:weather[0].now.hum + "%",
                wind:weather[0].now.wind.spd + "km/h",
                rainfall:weather[0].hourly_forecast[0].hum + "%",
                time:weather[0].hourly_forecast[0].date,
                temp:weather[0].hourly_forecast[0].tmp,
                future_wind:weather[0].hourly_forecast[0].wind.dir +
                weather[0].hourly_forecast[0].wind.sc,
                des_sport:weather[0].suggestion.sport.txt,
                des_cloth:weather[0].suggestion.drsg.txt,
                des_flu:weather[0].suggestion.flu.txt

            });
        }.bind(this));
    },

    render:function () {
        return (
            <div>
                <div className="App">
                    <WeatherInfo today_date={this.state.today_date}
                                 recent_update={this.state.update_time}
                                 info_temp={this.state.tmp}
                                 high_temp={this.state.high_temp}
                                 low_temp={this.state.low_temp}
                                 cloth={this.state.cloth}
                                 condition={this.state.condition}
                                 pm={this.state.pm}
                                 hum={this.state.hum}
                                 wind={this.state.wind}/>

                    <FutureInfo rainfall={this.state.rainfall}
                                time={this.state.time}
                                temp={this.state.temp}
                                future_wind={this.state.future_wind}/>

                    <CommonIndex root_style={sportColorStyle}
                                 pic={SportPic}
                                 blef="运动指数"
                                 des={this.state.des_sport}
                    />

                    <CommonIndex root_style={clothColorStyle}
                                 pic={Cloth}
                                 blef="穿衣指数"
                                 des={this.state.des_cloth}
                    />

                    <CommonIndex root_style={fluxColorStyle}
                                 pic={Cold}
                                 blef="感冒指数"
                                 des={this.state.des_clod}
                    />
                </div>
            </div>
        )
    }
})


export default Content;