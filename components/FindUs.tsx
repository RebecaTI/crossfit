'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./MapComponent'), { ssr: false });

const FindUs = () => {
  return (
    <div className="bg-black p-5 h-[400px] w-full">
      <Map />
    </div>
  );
};

export default FindUs;
