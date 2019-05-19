import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import './navbar.css';

export default class Navbar extends Component {
	render() {
		const { user } = this.props;

		return (
			<nav className="navbar navbar-expand-lg navbar-light">
				<Link className="navbar-brand" to="/">
					<img src={logo} />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				{!user && (
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<NavLink className="nav-item nav-link" to="/login">
								Login
							</NavLink>
						</div>
					</div>
				)}
				{user && (
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<NavLink className="nav-item nav-link" to="/create">
								Skapa tid
							</NavLink>
						</div>
					</div>
				)}
			</nav>
		);
	}
}
