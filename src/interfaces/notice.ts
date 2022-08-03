export interface INotificationInitialState {
    noticeList: PageNation<INotice>;
    archiveList: PageNation<INotice>;
    noticeDetail: INotice | null;
}

export interface INotice {
    _id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    notice_type: NoticeType;
    notice_title: string;
    notice_content: string;
    notice_images: INoticeImage[];
    notice_files: INoticeFile[];
}

export interface INoticeImage {
    name: string;
    url: string;
}

export interface INoticeFile {
    name: string;
    url: string;
}

export type NoticeType = "archive" | "notification";

export interface IGetNoticeParams {
    value: NoticeType;
    //페이지네이션 시작
    skip: number;
    //페이지네이션 종료
    limit: number;
    sort: "created-at desc";
}

export interface PageNation<T> {
    data: T[];
    size: number;
}
