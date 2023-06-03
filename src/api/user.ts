import { TGetCards } from '../types/index';
import { useRequestQuery } from './axiosHooks';

const useAllQuery = () =>
  useRequestQuery<TGetCards, string>({
    url: 'getCards/',
    method: 'get',
  });

// eslint-disable-next-line import/prefer-default-export
export { useAllQuery };
