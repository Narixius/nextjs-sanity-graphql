import { getClient } from 'lib/graphql.server'
import { GetPostBySlug } from '../../lib/queries'

export default async function preview(req, res) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' })
  }

	// Check if the post with the given `slug` exists
  const post = await getClient(true).query({
    query: GetPostBySlug,
		variables:{
			slug: req.query.slug
		}
  })

  // If the slug doesn't exist prevent preview mode from being enabled
  if (post.error || post.data.allPost.length === 0) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/posts/${post.data.allPost[0].slug.current}` })
  res.end()
}
