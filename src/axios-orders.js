import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-4732b.firebaseio.com/'
});

export default instance;