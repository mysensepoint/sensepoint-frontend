'use client'

import { useQuery, gql } from '@apollo/client'
import client from '../../lib/apollo-client'
import { ApolloProvider } from '@apollo/client'

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
`

function PostList() {
  const { loading, error, data } = useQuery(GET_POSTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>WordPress Posts</h1>
      {data.posts.nodes.map((post: { id: string; title: string; content: string }) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
      ))}
    </div>
  )
}

export default function TestPage() {
  return (
    <ApolloProvider client={client}>
      <PostList />
    </ApolloProvider>
  )
}