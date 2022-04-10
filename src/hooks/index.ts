import { useSelector } from 'react-redux';
import { selectHomeState, selectPerformanceState } from '@/store';

function useGetRootState() {
  const rootState = useSelector((rootState) => rootState);
  return rootState;
}

export const useGetStore = {
  home: () => selectHomeState(useGetRootState().home),
  performance: () => selectPerformanceState(useGetRootState().performance),
};

export * from './useResize';
