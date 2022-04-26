import axios from 'axios';
const KEY = 'AIzaSyCWgMMd04JtPcawHOKJdRdGY9h0CtOvegc';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
