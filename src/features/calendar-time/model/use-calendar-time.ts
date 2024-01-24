import { useUnit } from 'effector-react';
import { $events, changeSelectedEvent } from 'shared/store/events-store';

export const useCalendarTime = () => {
  const [events, changeSelectedEventEv] = useUnit([$events, changeSelectedEvent]);
  const onClickHandler = (indexTime: number, indexWeek: number) => {
    changeSelectedEventEv({ [indexWeek]: indexTime });
  };

  return {
    events,
    onClickHandler,
  };
};
