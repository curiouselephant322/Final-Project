import { atom } from 'recoil'

export const animationState = atom({
  key: 'animationState', // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});