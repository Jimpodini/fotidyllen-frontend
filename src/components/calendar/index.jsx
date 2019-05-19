import React from 'react';
import moment from 'moment';
import 'moment/locale/sv'; // without this line it didn't work
import './calendar.css';

moment.locale('sv');

export default class Calendar extends React.Component {
	state = {
		//dateObject: moment(),
		today: moment(),
		selection: false
		//selectedDay: 0
	};
	weekdayshort = moment.weekdaysShort();

	componentDidMount() {
		console.log('mounted');
	}

	dateToFormat = (day) => {
		const { selectedDate } = this.props;
		const yearNumber = selectedDate.format('YYYY');
		const monthNumber = selectedDate.format('MM');
		const dayNumber = day > 9 ? day : '0' + day;
		return `${yearNumber}-${monthNumber}-${dayNumber}`;
	};

	firstDayOfMonth = () => {
		const { selectedDate } = this.props;
		const firstDay = moment(selectedDate).startOf('month').format('d');
		return firstDay;
	};

	daysInMonth = () => {
		const { selectedDate } = this.props;
		return moment(selectedDate).daysInMonth();
	};

	currentDay = () => {
		return this.state.today.format('D');
	};

	month = () => {
		return this.props.selectedDate.format('MMMM');
	};

	currentMonth = () => {
		return this.state.today.format('MMMM');
	};

	nextMonth = () => {
		const { selectedDate, onSelect } = this.props;
		let dateObjectNextMonth = moment(selectedDate).set('month', selectedDate.month() + 1);
		onSelect(dateObjectNextMonth);
	};

	previousMonth = () => {
		const { selectedDate, onSelect } = this.props;
		let dateObjectPreviousMonth = moment(selectedDate).set('month', selectedDate.month() - 1);
		onSelect(dateObjectPreviousMonth);
	};

	year = () => {
		return this.props.selectedDate.format('Y');
	};

	currentYear = () => {
		return this.state.today.format('Y');
	};

	nextYear = () => {
		const { selectedDate, onSelect } = this.props;
		let dateObjectNextYear = moment(selectedDate).set('year', selectedDate.year() + 1);
		onSelect(dateObjectNextYear);
	};

	previousYear = () => {
		const { selectedDate, onSelect } = this.props;
		let dateObjectPreviousYear = moment(selectedDate).set('year', selectedDate.year() - 1);
		onSelect(dateObjectPreviousYear);
	};

	onDayClick = (e, d) => {
		const { selectedDate, onSelect } = this.props;

		let dateObjectSelectedDate = moment(selectedDate).date(d);

		onSelect(dateObjectSelectedDate);
	};

	render() {
		console.log(this.props.datesWithBookings);
		const { selection } = this.state;
		const { selectedDate, datesWithBookings } = this.props;

		console.log(selectedDate.format('YYYY-MM-DD'));

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
			const dateWithBooking = datesWithBookings.includes(this.dateToFormat(d)) ? 'dateWithBooking' : '';
			let selectedDay = selectedDate.format('D') == d ? 'selectedDay' : '';
			daysInMonth.push(
				<td key={d} className={`calendar-day ${currentDay} ${selectedDay} ${dateWithBooking}`}>
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
				<div className="row mb-2">
					<button className="col btn btn-primary" onClick={() => this.previousMonth()}>
						<i class="fas fa-arrow-left" />
					</button>
					<div className="col text-center my-auto">{this.month()}</div>
					<button className="col btn btn-primary" onClick={() => this.nextMonth()}>
						<i class="fas fa-arrow-right" />
					</button>
				</div>
				<div className="row mb-2">
					<button className="col btn btn-primary" onClick={() => this.previousYear()}>
						<i class="fas fa-arrow-left" />
					</button>
					<div className="col text-center my-auto">{this.year()}</div>
					<button className="col btn btn-primary" onClick={() => this.nextYear()}>
						<i class="fas fa-arrow-right" />
					</button>
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
