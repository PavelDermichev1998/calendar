import Image from 'next/image';

import cc from 'classcat';
import { useUnit } from 'effector-react';

import { DAYS, DAYS_NAMES } from './const';
import { $day, setDay } from './model/day-store';

export const CalendarDays = () => {
  const [setDayEv, dayStore] = useUnit([setDay, $day]);

  return (
    <div className='bg-content_secondary py-2 pl-10'>
      <div className='grid grid-cols-7 text-center'>
        {DAYS_NAMES.map((name, index) => (
          <p key={index} className='text-[10px]'>
            {name}
          </p>
        ))}
      </div>
      <div className='grid grid-cols-7 text-center'>
        {DAYS.map((day, index) => (
          <button
            key={index}
            className={cc([
              'm-auto h-8 w-8 text-[16px]',
              { 'bg-red rounded-full text-white': dayStore === index },
            ])}
            onClick={() => setDayEv(index)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-7 pt-2 text-center'>
        <Image
          priority
          alt='Arrow Left'
          className='m-auto'
          height={8}
          src='/arrow-left.svg'
          width={8}
        />
        <div className='col-span-5 text-[14px]'>March 2019</div>
        <Image
          priority
          alt='Arrow Right'
          className='m-auto'
          height={8}
          src='/arrow-right.svg'
          width={8}
        />
      </div>
    </div>
  );
};
