import axios from 'axios'
import { stores } from 'stores'

let URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080' : 'http://localhost:8080'

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
    return data
  })
}

export default axiosApi
