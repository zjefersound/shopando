import axios from 'axios';

const api = axios.create({
    baseURL: 'https://course-javaweb-sb.herokuapp.com'
});

export default api;