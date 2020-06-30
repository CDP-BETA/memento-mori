import axiosApi from './axios'

export const predictDeath = (data) => {
  return axiosApi('/predict', 'POST', data, {})
}