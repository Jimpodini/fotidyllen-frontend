import React from 'react';
import moment from 'moment';
import 'moment/locale/sv'; // without this line it didn't work
import './calendar.css';

moment.locale('sv');

export default class Calendar extends React.Component {
	state = {
		dateObject: moment(),
		today: moment(),
		selection: false
		//selectedDay: 0
	};
	weekdayshort = moment.weekdaysShort();

	firstDayOfMonth = () => {
		let dateObject = this.state.dateObject;
		let firstDay = moment(dateObject).startOf('month').format('d');
		return firstDay;
	};

	daysInMonth = () => {
		const { dateObject } = this.state;
		return moment(dateObject).daysInMonth();
	};

	currentDay = () => {
		return this.state.today.format('D');
	};

	month = () => {
		return this.state.dateObject.format('MMMM');
	};

	currentMonth = () => {
		return this.state.today.format('MMMM');
	};

	nextMonth = () => {
		const { dateObject } = this.state;
		let dateObjectNextMonth = moment(dateObject).set('month', dateObject.month() + 1);
		this.setState({ dateObject: dateObjectNextMonth });
	};

	previousMonth = () => {
		const { dateObject } = this.state;
		let dateObjectPreviousMonth = moment(dateObject).set('month', dateObject.month() - 1);
		this.setState({ dateObject: dateObjectPreviousMonth });
	};

	year = () => {
		return this.state.dateObject.format('Y');
	};

	currentYear = () => {
		return this.state.today.format('Y');
	};

	nextYear = () => {
		const { dateObject } = this.state;
		let dateObjectNextYear = moment(dateObject).set('year', dateObject.year() + 1);
		this.setState({ dateObject: dateObjectNextYear });
	};

	previousYear = () => {
		const { dateObject } = this.state;
		let dateObjectPreviousYear = moment(dateObject).set('year', dateObject.year() - 1);
		this.setState({ dateObject: dateObjectPreviousYear });
	};

	onDayClick = (e, d) => {
		const { dateObject } = this.state;
		const { onSelect } = this.props;

		let dateObjectSelectedDate = moment(dateObject).date(d);

		this.setState(
			{
				selection: true,
				dateObject: dateObjectSelectedDate
			},
			() => {
				onSelect(dateObjectSelectedDate.format('YYYY-MM-DD'));
			}
		);
	};

	render() {
		const { dateObject, selection } = this.state;

		console.log(this.state.dateObject.format('YYYY-MM-DD'));

		let weekdayshortname = this.weekdayshort.map((day) => {
			return (
				<th key={day} className="week-day">
					{day}
				</th>
			);
		});

		let blanks = [];
		for (let i = 0; i < this.firstDayOfMonth(); i++) {
			blanks.push(
				<td key={'empty-' + i} className="calendar-day empty">
					{''}
				</td>
			);
		}

		let daysInMonth = [];
		for (let d = 1; d <= this.daysInMonth(); d++) {
			let currentDay =
				this.currentDay() == d && this.month() == this.currentMonth() && this.year() == this.currentYear()
					? 'today'
					: '';
			let selectedDay = dateObject.format('D') == d && selection ? 'selectedDay' : '';
			daysInMonth.push(
				<td key={d} className={`calendar-day ${currentDay} ${selectedDay}`}>
					<span
						onClick={(e) => {
							this.onDayClick(e, d);
						}}
					>
						{d}
					</span>
				</td>
			);
		}

		var totalSlots = [ ...blanks, ...daysInMonth ];
		let rows = [];
		let cells = [];

		totalSlots.forEach((row, i) => {
			if (i % 7 !== 0) {
				cells.push(row); // if index not equal 7 that means not go to next week
			} else {
				rows.push(cells); // when reach next week we contain all td in last week to rows
				cells = []; // empty container
				cells.push(row); // in current loop we still push current row to new container
			}
			if (i === totalSlots.length - 1) {
				// when end loop we add remain date
				rows.push(cells);
			}
		});

		let daysinmonth = rows.map((d, i) => {
			return <tr key={'row-' + i}>{d}</tr>;
		});

		return (
			<div>
				<h2>Calendar</h2>
				<div className="month">
					<button onClick={() => this.previousMonth()}>Prev.</button>
					{this.month()}
					<button onClick={() => this.nextMonth()}>Next</button>
				</div>
				<div className="year">
					<button onClick={() => this.previousYear()}>Prev.</button>
					{this.year()}
					<button onClick={() => this.nextYear()}>Next</button>
				</div>
				<table>
					<thead>
						<tr>{weekdayshortname}</tr>
					</thead>
					<tbody>{daysinmonth}</tbody>
				</table>
			</div>
		);
	}
}
