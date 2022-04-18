export interface ICertificationInitialState {
  certificationList: ICertificationList;
}

export interface ICertificationList {
  data: ICertification[];
  size: number;
}

export interface ICertification {
  type: string;
}

export type ICertificationMenuType =
  | 'license'
  | 'core-certification'
  | 'patent'
  | 'test-result';

export interface ICertification {
  certification_content: string | null;
  certification_end_date: string | null;
  certification_images: ICertificationImage[];
  certification_organization: string | null;
  certification_start_date: string | null;
  certification_title: string | null;
  certification_type: ICertificationMenuType;
  created_at: string | null;
  deleted_at: string | null;
  updated_at: string | null;
  _id: string;
}

export interface ICertificationImage {
  type: 'image';
  name: string;
  url: string;
}
