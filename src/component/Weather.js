import React from "react";
import '../App.css';

class Weather extends React.Component {
	render() {
		return (
			<div className = "flex-v flex-center">
				<div className = "flex-item flex-h flex-center">
					<div className = "flex-main city">{this.props.city}</div>
					<div className = "flex-item icon">
						<img src={(`http://openweathermap.org/img/w/${this.props.icon}.png`)} alt = "weather icon"/>
					</div>
				</div>
				<div className = "flex-item description">{this.props.description}</div>
				<div className = "flex-main temp">{this.props.temperature}&#176;</div>
				<div className = "flex-item flex-h">
					<div className = "flex-item min">{this.props.min}&#176;</div>
					<div className = "flex-item min">{this.props.max}&#176;</div>
				</div>
				{this.props.error && <div className = "flex-item">{this.props.error}</div>}
			</div>
		);
	}
};

export default Weather;