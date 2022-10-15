import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const Account = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
        <h2 className='text-2xl font-bold'>Bem-vindo, {session.user?.name}!</h2>
        <div className='pb-4 m-auto'>
          <Image
            src={session.user?.image}
            alt='user avatar vindo do github ou google'
            height='100'
            width='100'
            className='rounded-full'
          />
        </div>
        <button
          className='flex items-center justify-center p-3 bg-[#9147ff] border border-gray-600 rounded-full'
          onClick={() => signOut()}>
          Sair
        </button>
      </div>
    )
  }

  return (
    <div className='flex flex-col pt-[100px] max-w-[400px] w-full mx-auto p-4'>
      <h2 className='text-3xl font-bold text-center'>Entrar com:</h2>

      <button
        onClick={() => signIn('github')}
        className=' flex justify-center items-center p-3 bg-gray-600 border-gray-600 my-2 rounded-full hover:bg-gray-500'>
        <FaGithub
          className='mr-2'
          size={25}
        />
        Entrar com o Github
      </button>

      <button
        onClick={() => signIn('google')}
        className='flex justify-center items-center p-3 bg-blue-500 border-blue-500 my-2 rounded-full hover:bg-blue-400'>
        <FaGoogle
          className='mr-2'
          size={25}
        />
        Entrar com o Google
      </button>
    </div>
  )
}

export default Account
