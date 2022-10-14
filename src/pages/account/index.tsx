import { useSession, signIn, signOut } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'

const Account = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
        Logado como {session.user?.name} <br />
        <button onClick={() => signOut()}>Sair</button>
      </div>
    )
  }
  return (
    <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
      <h2 className='text-3xl font-bold'>Entrar</h2>
      <button
        onClick={() => signIn('github')}
        className='flex items-center justify-center p-3 bg-gray-600 border-gray-600 my-2'>
        <FaGithub className='mr-2' /> Entrar com
        <span className='font-bold pl-1'>Github</span>
      </button>
    </div>
  )
}

export default Account
