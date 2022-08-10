export interface IPerformanceInitialState {
  selectedInfo: ISelectedInfo | null;
  searchList: string[];
  deliveryList: { list: IDeliveryList[]; size: number };
}

export interface ISelectedInfo {
  id: number | string;
  shipName: string;
  name: string;
  count: number;
  year: number | string;
  month: number | string;
  etc: string;
}

export interface IDeliveryList {
  _id: number;
  created_at: string;
  deleted_at: string | null;
  updated_at: string | null;
  delivery_amount: number;
  delivery_month: number;
  delivery_year: number;
  delivery_product: string;
  delivery_reference: string;
  delivery_supplier: string;
}

export interface IGetDeliveryListParams {
  skip: number;
  limit: number;
  isAsc: boolean;
  isSearch: boolean;
  field?: 'delivery_supplier' | 'delivery_product';
  value?: string;
}

export interface IPostDelivery {
  delivery_supplier: string;
  delivery_product: string;
  delivery_amount: number | string;
  delivery_year: number | string;
  delivery_month?: number | string;
  delivery_reference?: string;
}
