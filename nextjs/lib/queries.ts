import { gql } from "@apollo/client"

export const AllPosts = gql`
	query {
		allPost {
			title
			slug {
				current
			}
			contentRaw
			excerpt
			coverImage {
				asset {
					url
					originalFilename
					source{
						id
						url
					}
					path
					uploadId
					assetId
					size
					mimeType
					extension
					sha1hash
				}
			}
			date
			author{
				name
				picture {
					asset {
						url
						originalFilename
						source{
							id
							url
						}
						path
						uploadId
						assetId
						size
						mimeType
						extension
						sha1hash
					}
				}
			}
		}
	}`

export const GetPostBySlug = gql`
	query Post($slug: String!){
		allPost(where:{
    	slug: {current: { eq: $slug }}
  	}) {
			title
			slug {
				current
			}
			contentRaw
			excerpt
			coverImage {
				asset {
					url
					originalFilename
					source{
						id
						url
					}
					path
					uploadId
					assetId
					size
					mimeType
					extension
					sha1hash
				}
			}
			date
			author{
				name
				picture {
					asset {
						url
						originalFilename
						source{
							id
							url
						}
						path
						uploadId
						assetId
						size
						mimeType
						extension
						sha1hash
					}
				}
			}
		}
	}`
