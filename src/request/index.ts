import axios from 'axios'

const http = axios.create({
  baseURL:'json',
  timeout: 10000
})



 export default http