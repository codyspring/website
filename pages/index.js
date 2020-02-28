import React from 'react'
import Head from 'next/head'

const Home = () => (
  <React.Fragment>
    <Head>
      <title>Cody Spring</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <p className='mb-8'>My name's Cody Spring and I make things...</p>

    <p className='mb-8'>
      This is the beginning of my website, heavily inspired by minimalistic deign.
      I'm working on a few things, like this site, a card game, and tools for tabletop role playing games.
      More on that later.
    </p>

    <p>
      Oh! I also work for the fine folks over at <a href='https://silkroll.com/' className='underline hover:text-black'>SilkRoll</a> and&nbsp;
      <a href='https://www.upwork.com/o/profiles/users/~01bb04cbcd3a81debb/' className='underline hover:text-black'>freelance</a> a bit on the side.
    </p>
  </React.Fragment>
)

export default Home
