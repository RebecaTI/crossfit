'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./MapComponent'), { ssr: false });

const FindUs = () => {
  return (
    <div className="bg-black p-5 h-[400px] w-full flex ">
      <Map />
      <div>
        <h1 className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil delectus possimus ea architecto a eligendi deleniti harum fugiat aliquid, voluptatum ullam sint! Autem beatae ad quisquam quidem facilis maxime nemo.</h1>
      </div>
    </div>
  );
};

export default FindUs;
