import axios from 'axios'
import { stores } from 'stores'

let URL = process.env.NODE_ENV !== 'production' ? 'http://13.124.19.19' : 'http://13.124.19.19'

const axiosApi = (url, method = 'GET', data, options = {}) => {
  data = method.toUpperCase() === 'GET' ? { params: { ...data } } : { data }

  const defaultConfing = {
    url: URL + url,
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  const config = {
    ...defaultConfing,
    ...data,
    ...options,
  }
  return axios(config).then((response) => {
    const { data } = response
    return response
  })
}

export default axiosApi
