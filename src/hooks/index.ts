import { useSelector } from 'react-redux';
import {
  selectHomeState,
  selectHistoryState,
  selectPerformanceState,
  selectCertificationState,
} from '@/store';

function useGetRootState() {
  const rootState = useSelector((rootState) => rootState);
  return rootState;
}

export const useGetStore = {
  home: () => selectHomeState(useGetRootState().home),
  history: () => selectHistoryState(useGetRootState().history),
  performance: () => selectPerformanceState(useGetRootState().performance),
  certification: () =>
    selectCertificationState(useGetRootState().certification),
};

export * from './useResize';
