import axios from 'axios'

export default async function getData () {
  const url = 'https://my-json-server.typicode.com/linefmv/find-employees-db/db'
  const response = await axios.get(url)
    .then(response => response.data)
    .catch(error => error)
  return await response
}