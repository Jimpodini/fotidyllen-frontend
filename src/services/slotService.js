import http from './httpService';

const apiEndpoint = '/slots';

export function createSlot({ startingTime, endTime, date }) {
	http.post(apiEndpoint, { startingTime, endTime, date });
}

export default {
	createSlot
};
