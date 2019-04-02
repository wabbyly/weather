import React from "react";
import '../App.css';

class Form extends React.Component {
	render() {
		return (
			<div className = "flex-v">
			<div className = "flex-item">Zip Code :</div>
			<div className = "flex-item flex-h btwn flex-middle">
				<form onSubmit = {this.props.getWeather}>
					<input type="text" name="zip" placeholder = "enter the zip code"/>
					<button>Update</button>
				</form>
			</div>
			</div>
		);
	}
};

export default Form;