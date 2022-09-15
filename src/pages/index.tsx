import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitch UI</title>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Este site é um clone, não é a twitch de verdade'
        />
        <meta name='keywords' content='Twitch, twitch, live, livestream' />
        <meta name='author' content='Gabriel Leão' />
        <link rel='icon' href='favicon.ico' />
      </Head>
    </div>
  )
}

export default Home
