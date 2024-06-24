import React from 'react';
import Flowchart from '../../components/Flowchart';

export const Mapping: React.FC = () => {
  return (
    <div className='flex flex-row h-screen'>
      <main className='w-full'>
        <div className='flex'>
          <div className='h-screen w-full flex'>
            <Flowchart />
          </div>
        </div>
      </main>
    </div>
  );
};