import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burgerbuilder-f43c0.firebaseio.com/'
})

export default instance
