import Image from 'next/image'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Fragment, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Logo from 'public/logo.png'
import MenuOptions from '../menuOptions'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const { data: session } = useSession()

  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10'>
      {/* Left Side */}
      <div className='flex grow items-center justify-start'>
        <Link href='/'>
          <Image
            src={Logo}
            alt='Twitch logo'
            width='24'
            height='28'
            className='cursor-pointer z-10'
          />
        </Link>
        {session && (
          <p className='p-4 hover:text-[#bf94ff] font-bold cursor-pointer'>
            Seguindo
          </p>
        )}

        <p className='p-4 hover:text-[#bf94ff] font-bold cursor-pointer'>
          Procurar
        </p>

        <div className='p-4'>
          <Menu
            as='div'
            className='relative text-left'>
            <div
              className='flex hover:bg-opacity-10 hover:bg-[#fff] p-2 rounded-md'
              title='Mais'>
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'>
              <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className='text-gray-400 block px-4 py-2 cursor-text'>
                        GERAL
                      </a>
                    )}
                  </Menu.Item>

                  {MenuOptions.geralItens.map((item, key) => (
                    <Menu.Item key={key}>
                      {({ active }) => (
                        <a
                          href={item.link}
                          target='_blank'
                          rel='noreferrer'
                          className={classNames(
                            active
                              ? 'bg-gray-500 text-[#fff] rounded-md'
                              : 'text-gray-200',
                            'block px-4 py-2 text-sm'
                          )}>
                          {item.title}
                        </a>
                      )}
                    </Menu.Item>
                  ))}

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className='text-gray-400 block px-4 py-2 cursor-text'>
                        AJUDA E JURÍDICO
                      </a>
                    )}
                  </Menu.Item>

                  {MenuOptions.helpItens.map((item, key) => (
                    <Menu.Item key={key}>
                      {({ active }) => (
                        <a
                          href={item.link}
                          target='_blank'
                          rel='noreferrer'
                          className={classNames(
                            active
                              ? 'bg-gray-500 text-[#fff] rounded-md'
                              : 'text-gray-200',
                            'block px-4 py-2 text-sm'
                          )}>
                          {item.title}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* Middle */}
      <div className='hidden md:flex grow-[2] items-center justify-center'>
        <div className='text-[#fff] flex justify-between items-center max-w-[400px] w-full mx-auto gap-[1px]'>
          <div className='w-full'>
            <input
              type='text'
              className='bg-[#FFFFFF33] w-full py-1 px-1 rounded-l border-transparent focus:border-[#9147ff] focus:bg-[#000] border-solid border-2 hover:border-[1px] hover:border-[#ffffff33] focus:outline-none placeholder:text-gray-300 placeholder:text-start'
              placeholder='Buscar'
            />
          </div>
          <div className='bg-[#FFFFFF26] py-2 px-2 rounded-r hover:bg-[#FFFFFF33]'>
            <BsSearch size={20} />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='hidden md:flex grow items-center justify-end'>
        {session && (
          <>
            <div className='cursor-pointer mr-1 flex items-center py-2 px-2 hover:bg-opacity-10 hover:bg-[#fff] rounded-md'>
              <svg
                width='20'
                height='20'
                version='1.1'
                viewBox='0 0 20 20'
                x='0px'
                y='0px'
                className='ScIconSVG-sc-1bgeryd-1 ifdSJl'
                fill='#fff'>
                <g>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z'></path>
                </g>
              </svg>
            </div>

            <div className='cursor-pointer mr-1 flex items-center py-2 px-2 hover:bg-opacity-10 hover:bg-[#fff] rounded-md'>
              <svg
                width='20'
                height='20'
                version='1.1'
                viewBox='0 0 20 20'
                x='0px'
                y='0px'
                className='ScIconSVG-sc-1bgeryd-1 ifdSJl'
                fill='#fff'>
                <g>
                  <path
                    fill-rule='evenodd'
                    d='M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 001 1h2a1 1 0 001-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0111 11H9a3.001 3.001 0 01-2.83-2H4v6h12V9z'
                    clip-rule='evenodd'></path>
                </g>
              </svg>
            </div>

            <div className='cursor-pointer mr-1 flex items-center py-2 px-2 hover:bg-opacity-10 hover:bg-[#fff] rounded-md'>
              <svg
                width='20'
                height='20'
                version='1.1'
                viewBox='0 0 20 20'
                x='0px'
                y='0px'
                className='ScIconSVG-sc-1bgeryd-1 ifdSJl'
                fill='#fff'>
                <g>
                  <path
                    fill-rule='evenodd'
                    d='M7.828 13L10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2l-3 3z'
                    clip-rule='evenodd'></path>
                </g>
              </svg>
            </div>

            <button className='flex items-center bg-[#1f1f23] hover:bg-[#3b3b44] px-3 py-1 rounded-md mr-1 text-sm'>
              <svg
                width='20'
                height='20'
                version='1.1'
                viewBox='0 0 20 20'
                x='0px'
                y='0px'
                className='ScIconSVG-sc-1bgeryd-1 ifdSJl text-[#fff]'
                fill='#fff'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z'></path>
              </svg>
              Comprar bits
            </button>
          </>
        )}

        <div className='flex items-center gap-2'>
          {session == null && (
            <>
              <Link href='/account'>
                <button className='px-4 py-1 rounded-md font-bold bg-[#FFFFFF26] hover:bg-[#FFFFFF33] h-[30px] items-center'>
                  Entrar
                </button>
              </Link>
              <Link href='/account'>
                <button className='px-4 py-1 rounded-md font-bold bg-[#9147ff] hover:bg-[#772ce8] h-[30px] items-center'>
                  Cadastrar-se
                </button>
              </Link>
            </>
          )}

          <div>
            {session ? (
              <div>
                <Menu
                  as='div'
                  className='relative text-left py-1 px-1'>
                  <Menu.Button>
                    <Image
                      alt='/'
                      src={session.user?.image}
                      height={30}
                      width={30}
                      className='rounded-full cursor-pointer'
                    />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'>
                    <Menu.Items className='origin-top-right left-[-190px] absolute w-56 px-4 py-2 mt-4 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                      <div>
                        <Menu.Item>
                          {({ active }) => (
                            // eslint-disable-next-line @next/next/no-html-link-for-pages
                            <button
                              onClick={() => signOut()}
                              className={classNames(
                                active
                                  ? 'bg-[#1f1f23] text-[#fff] rounded-md'
                                  : 'text-gray-200',
                                'flex items-center px-4 py-1 w-full'
                              )}>
                              <BiLogOut className='mr-1' /> Sair
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ) : (
              <div>
                <Menu
                  as='div'
                  className='relative text-left'>
                  <Menu.Button className='flex items-center py-1 px-1 hover:bg-opacity-10 hover:bg-[#fff] rounded-md'>
                    <BsPerson size={25} />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'>
                    <Menu.Items className='origin-top-right left-[-190px] absolute w-56 px-4 py-2 mt-4 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                      <div>
                        <Menu.Item>
                          {({ active }) => (
                            // eslint-disable-next-line @next/next/no-html-link-for-pages
                            <a
                              href='/account'
                              className={classNames(
                                active
                                  ? 'bg-[#1f1f23] text-[#fff] rounded-md'
                                  : 'text-gray-200',
                                'flex items-center px-4 py-1'
                              )}>
                              <BiLogIn className='mr-1' /> Entrar
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hamburger menu */}
      <div className='block md:hidden z-20 cursor-pointer'>
        {nav ? (
          <AiOutlineClose
            size={25}
            onClick={handleNav}
          />
        ) : (
          <AiOutlineMenu
            size={25}
            onClick={handleNav}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-500'
            : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-500'
        }>
        <ul className='text-center'>
          <li
            className='py-4 text-3xl font-bold'
            onClick={handleNav}>
            <Link href='/'>Home</Link>
          </li>

          <li
            className='py-4 text-3xl font-bold'
            onClick={handleNav}>
            <Link href='/'>Live Channels</Link>
          </li>

          <li
            className='py-4 text-3xl font-bold'
            onClick={handleNav}>
            <Link href='/'>Top Categories</Link>
          </li>

          <li
            className='py-4 text-3xl font-bold'
            onClick={handleNav}>
            <Link href='/account'>Account</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
