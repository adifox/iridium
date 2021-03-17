import { useRouter } from 'next/router'

export async function getStaticPaths() {
  return {
    paths: [{ params: { articles: 'art1' } }],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  console.log('!!!!!!!!!!!!!!!!!!!IN GET STATIC PROPS:', context.params)
  const res = await fetch('https://gorest.co.in/public-api/posts')
  const data = await res.json()
  console.log('THE FETCHED DATA:', data)
  return {
    props: {
      data,
    },
  }
}

export default function Articles({ data }) {
  console.log('THE PROPS OBJECT', data)
  const router = useRouter()
  const pageId = router.query
  console.log('ROUTES', router)
  console.log('ROUTER IS FALLBACK?', router.isFallback)
  console.log('ROUTER QUERY', router.query)
  return (
    <div>
      <h1>This is one article</h1>
      {router.isFallback ? (
        <h3>{'Loading...'}</h3>
      ) : (
        <h3>{`And this is the dynamic Page ID: ${pageId.articles}`}</h3>
      )}
    </div>
  )
}
