import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/index';
import { Route, Redirect, Switch } from 'react-router-dom';
import Booking from './components/booking';
import LandingPage from './components/landingPage';
import NotFound from './components/notFound';
import Login from './components/login';
import auth from './services/authService';
import CreateSlotForm from './components/createSlotForm';
import ProtectedRoute from './components/protectedRoute';

class App extends Component {
	state = {};

	componentDidMount() {
		const user = auth.getCurrentUser();
		this.setState({ user }, () => console.log(this.state.user));
	}

	render() {
		const { user } = this.state;
		return (
			<React.Fragment>
				<Navbar user={user} />
				<main className="container my-5 d-flex justify-content-center">
					<Switch>
						<Route path="/home" component={LandingPage} />
						<Route path="/login" component={Login} />
						<Route path="/booking" component={Booking} />
						<Route path="/not-found" component={NotFound} />
						<ProtectedRoute path="/create" component={CreateSlotForm} />
						<Redirect from="/" exact to="/home" />
						<Redirect to="/not-found" />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
