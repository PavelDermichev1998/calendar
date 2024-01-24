import cc from 'classcat';

import { useCalendarTime } from './model/use-calendar-time';

export const CalendarTime = () => {
  const { events, onClickHandler } = useCalendarTime();

  return (
    <div className='py-4 pl-2'>
      {Array.from({ length: 25 }).map((_, indexTime) => (
        <div key={indexTime} className='relative'>
          <div
            className={cc([
              'absolute bottom-[30px]',
              { '!-bottom-[10px]': indexTime === 24 },
            ])}
          >
            {`${indexTime.toString().length === 1 ? '0' + indexTime : indexTime}:00`}
          </div>
          <div className='grid w-full grid-cols-7 pl-10 [&>*:not(:first-child)]:border-l'>
            {Array.from({ length: 7 }).map((_, indexWeek) => (
              <span
                key={indexWeek}
                className={cc([
                  'flex items-center justify-center border-b border-border_neutral',
                  { 'border-t': indexTime === 0 },
                  { hidden: indexTime === 24 },
                  { 'bg-blue': events[indexWeek]?.includes(indexTime) },
                ])}
              >
                <button
                  className={cc([
                    'h-10 w-full ',
                    { 'focus:bg-hover_blue': events[indexWeek]?.includes(indexTime) },
                  ])}
                  onClick={() => onClickHandler(indexTime, indexWeek)}
                />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
