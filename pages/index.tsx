import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <Head><title>Theia Intelligence</title></Head>
      <h1 className="text-5xl font-bold mb-4">🌐 Welcome to Theia Intelligence</h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        Ask Theia about economic trends, financial insights, or real-time market data powered by GPT-4 + live APIs.
      </p>
      <div className="bg-gray-100 rounded-lg p-4 text-left max-w-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-2">💬 Try asking:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>“What’s the outlook for oil prices this quarter?”</li>
          <li>“Summarize global inflation trends.”</li>
          <li>“What’s the latest from the JSE or NSE?”</li>
        </ul>
      </div>
    </div>
  )
}
