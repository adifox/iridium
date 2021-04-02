const axios = require('axios')
const url = 'https://gorest.co.in/public-api/posts'

async function getPosts() {
  try {
    return await axios.get(url)
  } catch (error) {
    return error
  }
}

export default async (req, res) => {
  const response = await getPosts()
  // console.log('RESPONSE ON THE SERVER:', response)
  res.send(response.data)
  // res.status(200).json({ name: 'John Doe' })
}
