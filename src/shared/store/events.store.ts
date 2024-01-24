import { createEvent, createStore, sample } from 'effector';

import { EventForChangeType, EventsType } from '../type/event.interface';

export const $events = createStore<EventsType>({});
export const $selectedEvent = createStore<EventForChangeType>({});
export const $visibleDeleteBtn = createStore<boolean>(true);

export const setEvent = createEvent<string>();
export const deleteEvent = createEvent<EventForChangeType>();
export const changeSelectedEvent = createEvent<EventForChangeType>();
export const updateVisibleDeleteBtn = createEvent<boolean>();

$events.on(setEvent, (state, payload) => {
  const newState = { ...state };
  const key = new Date(payload).getDay();
  const value = new Date(payload).getHours();

  newState[key] = Object.hasOwn(newState, key) ? [...newState[key], value] : [value];

  return newState;
});

$events.on(deleteEvent, (state, payload) => {
  const newState = { ...state };

  for (const key in state) {
    if (Object.keys(payload)[0] === key) {
      newState[key] = newState[key].filter((el) => payload[key] !== el);
    }
  }

  return newState;
});

$selectedEvent.on(changeSelectedEvent, (_, payload) => payload);
$visibleDeleteBtn.on(updateVisibleDeleteBtn, (_, payload) => payload);

sample({
  clock: [$selectedEvent, deleteEvent],
  fn: ([selectedEvent, events]) => {
    const [selectedKey, selectedValue] = Object.entries(selectedEvent)[0];
    let isHiddenBtn = true;

    for (const key in events) {
      if (key === selectedKey && (events as EventsType)[key].includes(selectedValue)) {
        isHiddenBtn = false;
      }
    }

    return isHiddenBtn;
  },
  source: [$selectedEvent, $events],
  target: updateVisibleDeleteBtn,
});
