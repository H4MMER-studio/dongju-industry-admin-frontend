export interface IHistoryInitialState {
  historyList: IHistoryList[];
}

export interface IHistoryList {
  start_year: string;
  value: IHistory[];
}

export interface IHistory {
  _id: string;
  history_content: string;
  history_month: number;
  history_year: number;
  created_at: string | null;
  deleted_at: string | null;
  updated_at: string | null;
}

export interface IGetHistoryParams {
  isAsc: boolean;
}

export interface IPostHistoryParams {
  history_year: string | number;
  history_month: string | number;
  history_content: string | number;
}

export interface IPatchHistoriesParams {
  data: (Partial<IPostHistoryParams> & { history_id: string | number })[];
}

export interface IDeleteHistories {
  data: (string | number)[];
}
