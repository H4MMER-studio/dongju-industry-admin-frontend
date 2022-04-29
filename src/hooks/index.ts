import { useSelector } from 'react-redux';
import {
  selectHomeState,
  selectHistoryState,
  selectPerformanceState,
} from '@/store';

function useGetRootState() {
  const rootState = useSelector((rootState) => rootState);
  return rootState;
}

export const useGetStore = {
  home: () => selectHomeState(useGetRootState().home),
  history: () => selectHistoryState(useGetRootState().history),
  performance: () => selectPerformanceState(useGetRootState().performance),
};

export * from './useResize';
