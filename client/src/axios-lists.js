import axios from 'axios';

let serverURL = 'http://localhost:8081';

const instance = axios.create({
   baseURL: serverURL
});

instance.defaults.headers.common['Authorization'] = `${localStorage.getItem('jwtToken')}`;
export default instance;