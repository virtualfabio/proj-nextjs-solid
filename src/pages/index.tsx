/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Hello...</h1>
      </main>

      <footer>footer...</footer>
    </div>
  )
}

export default Home
