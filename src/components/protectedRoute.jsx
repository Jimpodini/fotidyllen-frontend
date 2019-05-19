import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../services/authService';

const ProtectedRoute = ({ component: Component }) => {
	return (
		<Route
			render={(props) => {
				if (!auth.getCurrentUser()) return <Redirect from={props.location} to="/login" />;
				return <Component />;
			}}
		/>
	);
};

export default ProtectedRoute;
