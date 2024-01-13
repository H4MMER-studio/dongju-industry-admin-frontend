export interface InqueryInitialState {
  inqueries: PagiNation<IInquiry>;
}

export interface IGetInqueriesParams {
  //페이지네이션 시작
  skip: number;
  //페이지네이션 종료
  limit: number;
  sort: 'created-at desc';
  field?: 'inquiry_company_name' | 'inquiry_person_name';
  value?: string;
}

export interface IInquiry {
  created_at: string;
  deleted_at: string | null;
  inquiry_company_name: string;
  inquiry_content: string;
  inquiry_email: string;
  inquiry_person_name: string;
  inquiry_phone_number: string;
  inquiry_product_type:
    | 'air-conditioner'
    | 'freeze-protection-damper-coil'
    | 'exhaust-unit'
    | 'bubble-damper'
    | 'fully-sealed-door'
    | 'air-blower';
  inquiry_resolved_status: boolean;
  inquiry_title: string;
  inquiry_type: 'estimate' | 'after-service' | 'etc';
  updated_at: string | null;
}

export interface PagiNation<T> {
  data: T[];
  size: number;
}
