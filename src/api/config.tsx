import axios from 'axios';
export const HOST = '/api/';
const API = axios.create({ baseURL: HOST, withCredentials: true });
export default API