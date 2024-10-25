import axios from 'axios';

const token = localStorage.getItem('token');

const axiosBase = axios.create({
  // baseURL: 'http://localhost:5500/api', // using  local host 
  baseURL:'https://evangadi-forum-deploy-1-sc9r.onrender.com',  // using Render
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});


export default axiosBase;