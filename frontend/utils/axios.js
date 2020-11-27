import axios from 'axios'

const axiosOnSteroids = axios.create({baseURL: 'http://localhost:3001'})

export default axiosOnSteroids
