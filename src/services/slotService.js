import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/slots';

export function createSlot({ startingTime, endTime, date }) {
	http.post(apiEndpoint, { startingTime, endTime, date });
}

export default {
	createSlot
};
