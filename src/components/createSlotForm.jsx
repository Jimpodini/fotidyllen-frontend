import React, { Component } from 'react';
import auth from '../services/authService';
import slot from '../services/slotService';

class CreateSlotForm extends Component {
	state = { data: { startingTime: '', endTime: '', date: '' } };

	handleChange = ({ currentTarget }) => {
		const data = { ...this.state.data };
		data[currentTarget.name] = currentTarget.value;
		this.setState({ data }, () => console.log(data));
	};

	handleSubmit = async (e) => {
		//e.preventDefault();
		try {
			console.log(this.state.data);
			await slot.createSlot(this.state.data);
		} catch (ex) {
			console.log(ex);
		}
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="startingTime">Start:</label>
					<input
						onChange={this.handleChange}
						name="startingTime"
						type="text"
						className="form-control"
						placeholder="HH:MM"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="endTime">Slut:</label>
					<input
						onChange={this.handleChange}
						name="endTime"
						type="text"
						className="form-control"
						placeholder="HH:MM"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="date">Datum:</label>
					<input
						onChange={this.handleChange}
						name="date"
						type="text"
						className="form-control"
						placeholder="YYYY-MM-DD"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Lägg till tid
				</button>
			</form>
		);
	}
}

export default CreateSlotForm;
