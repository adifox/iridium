import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const url = 'https://gorest.co.in/public-api/posts'

async function getPosts() {
  try {
    return await axios.get(url)
  } catch (error) {
    return error
  }
}

export async function getStaticProps() {
  const result = await getPosts()

  return {
    props: {
      posts: result.data,
    },
  }
}

export default function Article({ posts }) {
  const data = posts?.data
  // const [data, setData] = useState()

  const router = useRouter()
  const pageId = router.query
  console.log('ROUTER:', router)
  console.log('PAGE ID:', pageId)
  return (
    <div>
      <h1>This is the article main side</h1>
      {posts?.code === 200 ? (
        <h3>{`We have right now, ${data.length} articles for the first page`}</h3>
      ) : (
        <h3>
          {
            'Some error ocurred, stay put, we are working on it. You may reload the page.'
          }
        </h3>
      )}
    </div>
  )
}
