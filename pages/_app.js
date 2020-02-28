import React from 'react'
import App from 'next/app'
import Link from 'next/link'
import '../vendor/tailwind.css'

class Application extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <header className='max-w-screen-sm py-2 m-4 border-b'>
          <nav>
            <ul className='flex'>
              <li className='mr-4'>
                <Link href='/'>
                  <a className='underline hover:text-black'>Home</a>
                </Link>
              </li>
              <li className=''>
                <a href='https://patreon.com/codyspring' className='underline hover:text-black'>Support</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className='max-w-screen-sm m-4 mb-12'>
          <Component {...pageProps} />
        </main>
        <footer className='max-w-screen-sm py-2 m-4 mt-auto text-sm'>
          v0.1.0
        </footer>
      </React.Fragment>
    )
  }
}

export default Application