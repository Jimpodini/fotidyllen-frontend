import http from './httpService';
import jwtDecode from 'jwt-decode';

const apiEndpoint = '/auth';
const tokenKey = 'token';

export async function login(email, password) {
	const token = await http.post(apiEndpoint, { email, password });
	localStorage.setItem(tokenKey, token.data);
}

export function getCurrentUser() {
	try {
		const token = localStorage.getItem(tokenKey);
		return jwtDecode(token);
	} catch (ex) {
		return null;
	}
}

export default {
	login,
	getCurrentUser
};
