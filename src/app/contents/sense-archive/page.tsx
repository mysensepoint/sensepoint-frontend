"use client";

import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import client from '@/lib/apollo-client';

const NEW_QUERY = gql`
  query NewQuery {
    posts {
      edges {
        node {
          id
          content
          author {
            node {
              id
              name
            }
          }
          title
        }
      }
    }
  }
`;

export default function SenseArchiveList() {
  const { loading, error, data } = useQuery(NEW_QUERY, { client });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const posts = data?.posts?.edges || [];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Sense Archive 포스트 리스트</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((edge: any) => (
          <li key={edge.node.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
            <Link href={`/contents/sense-archive/${edge.node.id}`} style={{ textDecoration: 'none', color: '#333' }}>
              <h2>{edge.node.title}</h2>
            </Link>
            <p>작성자: {edge.node.author?.node?.name}</p>
            <div style={{ color: '#666', fontSize: '0.95em' }}>
              {edge.node.content?.slice(0, 100)}...
            </div>
            <Link href={`/contents/sense-archive/${edge.node.id}`} style={{ color: '#0070f3' }}>
              자세히 보기
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
