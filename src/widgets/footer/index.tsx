import cc from 'classcat';

import { useFooter } from './model/use-footer';

export const Footer = () => {
  const { visibleDeleteBtn, deleteEventHandler } = useFooter();

  return (
    <footer className='sticky bottom-0 flex h-12 w-full items-center justify-center bg-content_secondary'>
      <div className='flex w-full items-center justify-between px-10'>
        <p className='text-red'>Today</p>
        <button
          className={cc(['text-red', { hidden: visibleDeleteBtn }])}
          onClick={deleteEventHandler}
        >
          Delete
        </button>
      </div>
    </footer>
  );
};
