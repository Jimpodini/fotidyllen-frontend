import React, { Component } from 'react';
import http from '../../services/httpService';
import './slot.css';

class Slot extends Component {
	state = {};

	onBooking = () => {
		this.bookSlot();
	};

	async bookSlot() {
		try {
			const data = await http.put('/slots/22', { test: 'Hej' });
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		const { slot } = this.props;

		return (
			<React.Fragment>
				<li>
					{`${slot.startingTime}-${slot.endTime}`}
					<button className="btn btn-success ml-2" onClick={() => this.onBooking()}>
						Book
					</button>
				</li>
			</React.Fragment>
		);
	}
}

export default Slot;
