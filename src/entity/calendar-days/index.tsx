import Image from 'next/image';

import cc from 'classcat';
import { useUnit } from 'effector-react';

import { DAYS } from './const';
import { $day, setDay } from './model/day-store';

export const CalendarDays = () => {
  const [setDayEv, dayStore] = useUnit([setDay, $day]);

  return (
    <div className='bg-content_secondary py-2 pl-10'>
      <div className='grid grid-cols-7 text-center'>
        {DAYS.map((el, index) => (
          <div key={index}>
            <p className='text-[10px]'>{el.weekday}</p>
            <button
              key={index}
              className={cc([
                'm-auto h-8 w-8 text-[16px]',
                { 'rounded-full bg-red text-white': dayStore === index },
              ])}
              onClick={() => setDayEv(index)}
            >
              {el.day}
            </button>
          </div>
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
