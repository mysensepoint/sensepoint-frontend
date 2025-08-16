"use client";

import { useQuery, gql } from '@apollo/client';
import { useParams } from 'next/navigation';
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

export default function SenseArchiveContent() {
  const { postId } = useParams();
  const { loading, error, data } = useQuery(NEW_QUERY, { client });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const post = data?.posts?.edges?.find((edge: any) => edge.node.id === postId)?.node;

  if (!post) {
    return (<div>해당 포스트를 찾을 수 없습니다.</div>);
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 700, margin: '0 auto', background: '#fafbfc', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: '#222', fontWeight: 700 }}>{post.title}</h1>
      <p style={{ color: '#555', marginBottom: '2rem', fontSize: '1rem' }}>작성자: {post.author?.node?.name}</p>
      <div className="markdown-body" style={{ color: '#222', fontSize: '1.08rem', lineHeight: 1.8 }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <style jsx>{`
        .markdown-body h1, .markdown-body h2, .markdown-body h3 {
          color: #222;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .markdown-body p {
          margin: 1rem 0;
        }
        .markdown-body hr {
          border: none;
          border-top: 1.5px solid #e5e7eb;
          margin: 2rem 0;
        }
        .markdown-body ul, .markdown-body ol {
          margin: 1rem 0 1rem 2rem;
        }
        .markdown-body blockquote {
          border-left: 4px solid #e5e7eb;
          background: #f6f8fa;
          padding: 0.5rem 1rem;
          color: #555;
          margin: 1.5rem 0;
        }
        .markdown-body code {
          background: #f6f8fa;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.97em;
        }
        .markdown-body pre {
          background: #f6f8fa;
          padding: 1rem;
          border-radius: 8px;
          overflow-x: auto;
        }
        .markdown-body img {
          max-width: 100%;
          border-radius: 8px;
          margin: 1rem 0;
        }
      `}</style>
    </div>
  );
}
