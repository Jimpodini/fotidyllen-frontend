import React, { Component } from 'react';
import { login } from '../services/authService';

class Login extends Component {
	state = {
		data: {
			email: '',
			password: ''
		}
	};

	handleChange = ({ currentTarget }) => {
		const data = { ...this.state.data };
		data[currentTarget.name] = currentTarget.value;
		this.setState({ data });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state.data;

		try {
			await login(email, password);
			window.location = '/';
		} catch (ex) {
			console.log(ex);
		}
	};

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input
							onChange={this.handleChange}
							name="email"
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input
							onChange={this.handleChange}
							name="password"
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</React.Fragment>
		);
	}
}

export default Login;
