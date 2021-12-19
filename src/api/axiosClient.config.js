import axios from 'axios'
export const API_KEY = 'access_key=22b243952928eebee23407c97388af4e'
export default axios.create({
  baseURL: `http://api.mediastack.com/v1`,
  headers: {
    'content-type': 'application/json',
  },
})
