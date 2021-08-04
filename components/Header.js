import Image from 'next/image';
import logo from '../images/logo.png';
import HeaderIcon from './HeaderIcon';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  ViewGridIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
const Header = () => {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center lg:px-5 shadow-md'>
      {/* Left */}
      <div className='flex items-center'>
        <Image layout='fixed' src={logo} width={60} height={40} alt='logo' />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            type='text'
            className='hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none'
            name=''
            id=''
            placeholder='Search Facebook'
          />
        </div>
      </div>
      {/* Center */}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        <p className='font-semibold pr-3 whitespace-normal'>Felix Le</p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </div>
  );
};

export default Header;
