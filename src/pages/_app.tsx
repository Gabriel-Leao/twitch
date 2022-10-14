import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Navbar from '../components/navbar'
import { I_app } from '../interfaces'

function MyApp({ Session, Component, pageProps }: I_app) {
  return (
    <SessionProvider session={Session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
