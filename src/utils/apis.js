import axiosApi from './axios'

export const predictDeath = (data) => {
  return axiosApi('http://13.124.19.19/predict', 'POST', data, {})
}