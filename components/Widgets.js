import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';

import story1 from '../images/story1.jpg';
import story2 from '../images/story2.jpg';
import story3 from '../images/story3.jpg';
import story4 from '../images/story4.jpeg';
import story5 from '../images/story5.jpeg';
import Contact from './Contact';

const contacts = [
  {
    name: 'Felix Le',
    src: story1,
  },
  {
    name: 'Giang',
    src: story2,
  },
  {
    name: 'Giang haha',
    src: story3,
  },
  {
    name: 'Giang hoho',
    src: story4,
  },
  {
    name: 'Giang hihi',
    src: story5,
  },
];

export const Widgets = ({}) => {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className=' flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl'>Contact</h2>

        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <SearchIcon className='h-6' />
          <DotsHorizontalIcon className='h-6' />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact
          key={`${contact.name} ${contact.src}`}
          name={contact.name}
          src={contact.src}
        />
      ))}
    </div>
  );
};
