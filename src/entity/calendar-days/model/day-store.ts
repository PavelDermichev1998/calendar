import { createEvent, createStore } from 'effector';

export const setDay = createEvent<number>();

export const $day = createStore<number>(0).on(setDay, (_, payload) => payload);
