import axios from 'axios'

export default async function getData () {
  const response = await axios.get('http://localhost:3000/db')
    .then(response => response.data)
    .catch(error => error)
  return await response
}