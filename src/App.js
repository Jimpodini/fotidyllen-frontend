import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Therapist from './components/Therapist';
import img_maria from './images/maria.jpg';
import Calendar from './components/calendar';
import SlotsList from './components/slots/slotsList';
import Booking from './components/booking';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Booking />

			<div className="container my-5 d-flex justify-content-center">
				<div className="row">
					<Therapist img={img_maria} />
					<Therapist img={img_maria} />
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
