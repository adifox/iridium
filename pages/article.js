import { useRouter } from 'next/router'

export default function Article() {
  const router = useRouter()
  const pageId = router.query
  console.log('ROUTER:', router)
  console.log('PAGE ID:', pageId)
  return (
    <div>
      <h1>
        This is the article main side
      </h1>
      <h3>
        { `And this is the dynamic Page ID: ${pageId.id}` }
      </h3>
    </div>
  )
}