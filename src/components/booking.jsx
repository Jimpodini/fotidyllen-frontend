import React, { Component } from 'react';
import Calendar from './calendar';
import SlotsList from './slots/slotsList';
import moment from 'moment';
import http from '../services/httpService';

class Booking extends Component {
	state = { selectedDate: moment(), slots: [], datesWithBookings: [] };

	async componentDidMount() {
		const slots = await this.getSlots();
		let datesWithBookings = [];
		slots.data.map((slot) => (datesWithBookings = [ ...datesWithBookings, slot.date ]));
		this.setState({ slots: slots.data, datesWithBookings });
	}

	async getSlots() {
		try {
			const data = http.get('/slots');
			return data;
		} catch (err) {
			console.log(err);
		}
	}

	selectDate = (date) => {
		this.setState({ selectedDate: date }, () => console.log('state', this.state.selectedDate));
	};

	render() {
		return (
			<React.Fragment>
				<Calendar
					datesWithBookings={this.state.datesWithBookings}
					selectedDate={this.state.selectedDate}
					onSelect={this.selectDate}
				/>
				<SlotsList date={this.state.selectedDate.format('YYYY-MM-DD')} />
			</React.Fragment>
		);
	}
}

export default Booking;
