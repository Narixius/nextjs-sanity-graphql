import Head from 'next/head'
import Layout from 'components/layout'
import { apolloClient } from 'lib/graphql'
import { useQuery } from '@apollo/client'
import { AllPosts } from 'lib/queries'
import { getClient } from 'lib/graphql.server'

export default function Index() {
	const { allPost } = useQuery(AllPosts).data

	return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example</title>
        </Head>
        {
					JSON.stringify(allPost, null, 2)
				}
      </Layout>
    </>
  )
}

export async function getStaticProps({preview}) {
	await getClient(preview).query({
    query: AllPosts,
  })

  return {
    props: {
			initialQuery: apolloClient.cache.extract(),
   },
  }
}
