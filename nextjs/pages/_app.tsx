import { ApolloProvider } from '@apollo/client'
import { ExitPreviewBar } from 'components/ExitPreviewBar'
import { apolloClient } from 'lib/graphql'

export default function App({ Component, pageProps }) {

	if(pageProps.initialQuery){
		apolloClient.cache.restore(pageProps.initialQuery)
	}

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
			<ExitPreviewBar preview={pageProps.preview} />
    </ApolloProvider>
  )
}
