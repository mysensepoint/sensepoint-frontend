'use client';

import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

// WordPress GraphQL 연결 설정
const client = new ApolloClient({
  uri: 'https://wordpress-1487973-5667932.cloudwaysapps.com/graphql',
  cache: new InMemoryCache(),
});

// WordPress 글 가져오는 쿼리
const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        title
        content
        date
      }
    }
  }
`;

// 글 목록 표시 컴포넌트
function PostList() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Sense Point Blog</h1>
      {data.posts.nodes.map((post: any, index: number) => (
        <div key={index} style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <p><small>Published: {new Date(post.date).toLocaleDateString()}</small></p>
        </div>
      ))}
    </div>
  );
}

// 메인 페이지
export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main style={{ padding: '20px' }}>
        <PostList />
      </main>
    </ApolloProvider>
  );
}