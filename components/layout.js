import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'

function layout({ children }) {
  return (
    <div>
        <Head>
          <title>Next.js</title>
        </Head>
        <Navbar/>
        { children }
        <Footer/>
    </div>
  )
}

export default layout