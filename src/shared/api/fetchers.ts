import { OMDbResponse, OMDbSearchListResponse } from '#shared/api/types';
import { generateRandomID } from '#shared/helpers/generateRandomID';

import { axiosClient } from './axiosClient';

export const fetchByRandomID = () =>
  axiosClient.get<OMDbResponse>('', {
    params: {
      plot: 'full',
      i: generateRandomID()
    }
  });

export const fetchByID = (id: string) =>
  axiosClient.get<OMDbResponse>('', {
    params: {
      plot: 'full',
      i: id
    }
  });
export const fetchByTitle = (title: string) =>
  axiosClient.get<OMDbResponse>('', {
    params: {
      plot: 'full',
      t: title
    }
  });

export const fetchBySearchTerm = (title: string) =>
  axiosClient.get<OMDbSearchListResponse>('', {
    params: {
      s: title
    }
  });
