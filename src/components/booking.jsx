import React, { Component } from 'react';
import Calendar from './calendar';
import SlotsList from './slots/slotsList';

class Booking extends Component {
	state = { selectedDate: '' };

	selectDate = (date) => {
		this.setState({ selectedDate: date }, () => console.log('state', this.state.selectedDate));
	};

	render() {
		return (
			<React.Fragment>
				<Calendar onSelect={this.selectDate} />
				<SlotsList date={this.state.selectedDate} />
			</React.Fragment>
		);
	}
}

export default Booking;
