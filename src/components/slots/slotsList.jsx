import React, { Component } from 'react';
import http from '../../services/httpService';

class SlotsList extends Component {
	state = { slots: [], isLoading: true };

	async componentDidMount() {
		const slots = await this.getSlots();
		this.setState({ slots: slots.data, isLoading: false });
	}

	async getSlots() {
		try {
			const data = http.get('/slots');
			return data;
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		let { slots, isLoading } = this.state;
		const { date } = this.props;

		if (!isLoading) {
			slots = slots.filter((slot) => slot.date === date);

			console.log(slots);
		}

		//const availableSlots = slots.filter((slot) => slot.date.equals(date));

		//console.log(availableSlots);
		return (
			<React.Fragment>
				<ol>{slots.map((slot) => <li key={slot._id}>{`${slot.startingTime}-${slot.endTime}`}</li>)}</ol>
			</React.Fragment>
		);
	}
}

export default SlotsList;
