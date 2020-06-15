import Head from 'next/head'
import App from '../layouts/App';
import React, { ReactNode } from 'react';

export default function Home(): ReactNode {
  return (
    <div className="container">
      <Head>
        <title>HackerNews Reader</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900' rel='stylesheet' type='text/css'></link>
      </Head>

      <main>
        <App />
      </main>

      <footer>
      </footer>

      <style jsx global>{`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        a {
          color: inherit;
          text-decoration: inherit;
        }

        html {
          font-family: Roboto, sans serif
        }

        body {
          background-color: rgb(238, 238, 238);
        }
      `}</style>
    </div>
  )
}
