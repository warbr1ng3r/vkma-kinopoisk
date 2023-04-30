import { OMDbResponse, OMDbSearchListResponse } from '#shared/api/types';

import { axiosClient } from './axiosClient';

export const fetchByID = (id: string) =>
  axiosClient.get<OMDbResponse>('', {
    params: {
      plot: 'full',
      i: id
    }
  });

export const fetchBySearchTerm = (title: string) =>
  axiosClient.get<OMDbSearchListResponse>('', {
    params: {
      s: title
    }
  });
