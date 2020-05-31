import Head from 'next/head'
import App from '../layouts/App';

export default function Home(): React.ReactNode {
  return (
    <div className="container">
      <Head>
        <title>HackerNews Reader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>

      <footer>
      </footer>
    </div>
  )
}
