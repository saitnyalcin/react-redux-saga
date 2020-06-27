import { TYPES } from '../types';

// Action Creators
export const requestDog = () => {
  return { type: TYPES.REQUESTED_DOG };
};

export const requestDogSuccess = data => {
  return {
    type: TYPES.REQUESTED_DOG_SUCCEEDED,
    url: data.message,
    message: 'Fetching is successfull'
  };
};

export const requestDogError = () => {
  return { type: TYPES.REQUESTED_DOG_FAILED };
};

export const fetchDog = () => {
  return { type: TYPES.FETCHED_DOG };
};
