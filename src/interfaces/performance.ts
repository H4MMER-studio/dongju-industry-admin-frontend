export interface IPerformanceInitialState {
  selectedInfo: ISelectedInfo | null;
}

export interface ISelectedInfo {
  id: number;
  shipName: string;
  name: string;
  count: number;
  year: number | string;
  month: number | string;
  etc: string;
}
