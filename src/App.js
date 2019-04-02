import React from "react";
import Form from "./component/Form";
import Weather from "./component/Weather";
import './App.css';


class App extends React.Component {
	state = {
		city : "New York",
		icon : "10d",
		description : "Scattered Thundershowers",
		temperature : 16,
		min : 6,
		max : 22,
		error : undefined
	}
	getWeather = async (e) => {
		e.preventDefault();
		const zipCode = e.target.elements.zip.value;
		const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=709847967f5e54b97308c1b2cae4dee5&units=metric`);
		const data = await api_call.json();
		if (zipCode) {
			console.log(data);
			this.setState({
				city : data.name,
				icon : data.weather[0].icon,
				description : data.weather[0].description,
				temperature : data.main.temp,
				min : data.main.temp_min,
				max : data.main.temp_max,
				error : ""
			});
		}
		else {
			this.setState({
				city : undefined,
				icon : undefined,
				description : undefined,
				temperature : undefined,
				min : undefined,
				max : undefined,
				error : "Please enter the zip code"
			});
		}
	}
	render () {
		return (
			<div className = "fullscreen flex-v flex-middle">
				<div className = "flex-item">
					<div className = "flex-item weather">
						<Weather
						city = {this.state.city}
						icon = {this.state.icon}
						description = {this.state.description}
						temperature = {this.state.temperature}
						min = {this.state.min}
						max = {this.state.max}
						error = {this.state.error}
						/>
					</div>
					<div className = "flex-item flex-v flex-center">
						<Form getWeather = {this.getWeather}/>
					</div>
				</div>
			</div>
		); 
	}
};

export default App;