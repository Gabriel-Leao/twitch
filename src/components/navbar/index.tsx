import Logo from 'public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Fragment } from 'react'
// import { useSession, signIn, signOut } from 'next-auth/react'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10'>
      {/* Left Side */}
      <div className='flex grow items-center justify-start'>
        <Link href='/'>
          <Image
            src={Logo}
            alt='Twitch logo'
            width='36'
            height='36'
            className='cursor-pointer z-10'
          />
        </Link>
        <p className='p-4'>Seguindo</p>
        <p className='p-4'>Procurar</p>
        <div className='p-4'>
          <Menu
            as='div'
            className='relative text-left'>
            <div
              className='flex hover:bg-opacity-10 hover:bg-[#fff] p-2 rounded-lg'
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
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}>
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}>
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}>
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {/* Middle */}
      <div className='hidden md:flex grow-[2] items-center justify-center'>
        <div className='text-[#fff] flex justify-center items-center max-w-[400px] m-auto gap-[1px]'>
          <div>
            <input
              type='text'
              className='bg-[#FFFFFF33] py-1 px-6 rounded-l border-transparent focus:border-[#9147ff] focus:bg-[#000] border-solid border-2 hover:border-[1px] hover:border-[#848494] focus:outline-none placeholder:text-gray-300 placeholder:text-start'
              placeholder='Pesquisa'
            />
          </div>
          <div className='bg-[#FFFFFF26] py-2 px-2 rounded-r hover:bg-[#FFFFFF33]'>
            <BsSearch size={20} />
          </div>
        </div>
      </div>
      {/* Right Side */}
    </div>
  )
}

export default Navbar
