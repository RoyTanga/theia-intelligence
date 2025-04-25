import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TheiaAssistant from '../components/chatbot/TheiaAssistant'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <TheiaAssistant />
    </>
  )
}

export default MyApp
