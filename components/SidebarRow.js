import Image from 'next/image';
import React from 'react';

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className='flex p-3'>
      {src && (
        <Image
          className='rounded-full'
          src={src}
          height={30}
          width={30}
          alt='test'
          layout='fixed'
        />
      )}
      {Icon && <Icon className='h-8 w-8 text-blue-500 ' />}

      <p className='hidden sm:inline-flex font-medium pl-2'> {title}</p>
    </div>
  );
};

export default SidebarRow;
