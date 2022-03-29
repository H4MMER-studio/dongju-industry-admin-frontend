import { useSelector } from 'react-redux';
import { selectHomeState } from '@/store';

function useGetRootState() {
  const rootState = useSelector((rootState) => rootState);
  return rootState;
}

export const useGetStore = {
  home: () => selectHomeState(useGetRootState().home),
};

export * from './useResize';
