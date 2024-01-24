import { useUnit } from 'effector-react';
import {
  $selectedEvent,
  $visibleDeleteBtn,
  deleteEvent,
} from 'shared/store/events-store';

export const useFooter = () => {
  const [selectedEvent, deleteEventEv, visibleDeleteBtn] = useUnit([
    $selectedEvent,
    deleteEvent,
    $visibleDeleteBtn,
  ]);
  const deleteEventHandler = () => {
    deleteEventEv(selectedEvent);
  };

  return {
    deleteEventHandler,
    visibleDeleteBtn,
  };
};
