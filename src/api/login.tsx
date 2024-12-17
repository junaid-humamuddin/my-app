import API from "./config";
export const loginApi = (signin:any) => API.post('login' , signin);
export const detailsApi = () => API.get('details');