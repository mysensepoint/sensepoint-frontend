'use client'

import { useState } from 'react'

export default function GraphQLPlayground() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const executeQuery = async () => {
    if (!query.trim()) return
    
    setLoading(true)
    try {
      const response = await fetch('https://sensepoint.me/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })
      const data = await response.json()
      setResult(JSON.stringify(data, null, 2))
    } catch (error) {
      setResult(`Error: ${error}`)
    }
    setLoading(false)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">GraphQL Playground</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Query</label>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-64 p-3 border rounded-md font-mono text-sm"
            placeholder="Enter your GraphQL query here..."
          />
          <button
            onClick={executeQuery}
            disabled={loading}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Executing...' : 'Execute Query'}
          </button>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Result</label>
          <pre className="w-full h-64 p-3 border rounded-md bg-gray-50 overflow-auto text-sm">
            {result || 'Execute a query to see results...'}
          </pre>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-md">
        <h3 className="font-medium mb-2">Example Queries:</h3>
        <div className="text-sm space-y-1">
          <div>• Introspection: <code>{'{ __schema { types { name } } }'}</code></div>
          <div>• Schema info: <code>{'{ __type(name: "Query") { fields { name } } }'}</code></div>
        </div>
      </div>
    </div>
  )
}