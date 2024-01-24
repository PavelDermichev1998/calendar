import { CalendarDays } from 'entity/calendar-days';

import { useHeader } from './model/use-header';

export const Header = () => {
  const { addEventHandler } = useHeader();

  return (
    <div className='sticky top-0 z-[10] bg-white'>
      <header className='flex items-center justify-between p-4'>
        <div>Interview Calendar</div>
        <button className='text-red text-[30px]' onClick={addEventHandler}>
          +
        </button>
      </header>
      <CalendarDays />
    </div>
  );
};
