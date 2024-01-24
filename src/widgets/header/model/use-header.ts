import { useUnit } from 'effector-react';
import { setEvent } from 'shared/store/events.store';

export const useHeader = () => {
  const setEventEv = useUnit(setEvent);

  const addEventHandler = () => {
    const target = prompt('Enter event time: YYYY-MM-DD HH:mm:ss');

    target && setEventEv(target);
  };

  return {
    addEventHandler,
  };
};
