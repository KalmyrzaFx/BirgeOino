import axios from 'axios';

let serverURL = 'http://localhost:8081';

if (process.env.NODE_ENV === 'production') {
    serverURL = 'https://birgeoino.onrender.com/';
}

const instance = axios.create({
    baseURL: serverURL
});

// Check if there is a JWT token in localStorage
const jwtToken = localStorage.getItem('jwtToken');

// If a JWT token exists, set it in the Authorization header
if (jwtToken) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
}

export default instance;
