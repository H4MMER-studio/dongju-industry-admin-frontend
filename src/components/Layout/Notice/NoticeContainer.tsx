import React, { useEffect } from "react";
import styled from "styled-components";
import * as NoticeComponents from "./components";
import { useDispatch } from "react-redux";
import { noticeActions, certificationActions } from "@/store";
import { useGetStore } from "@/hooks";

interface IProps {
    clickNoticeItem: (id: string) => void;
    clickAddNotice: () => void;
}

const NoticeContainerLayout = styled.div`
    width: 100%;
    height: 100%;
    padding: 32px;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-right: 28px;
`;

const ListLayout = styled.div``;

const TitleLayout = styled.div`
    display: flex;
    align-items: center;
`;

const AddContentsTextButton = styled.div`
    font-size: 17px;
    color: #2979ff;
    cursor: pointer;
    font-weight: 600;
`;

const NoticeContainer: React.FC<IProps> = ({ clickNoticeItem, clickAddNotice }) => {
    const dispatch = useDispatch();
    const { noticeList } = useGetStore.notice();

    useEffect(() => {
        dispatch(noticeActions.getNoticeList({ value: "notification", skip: 0, limit: 10, sort: "created-at desc" }));
        dispatch(certificationActions.getCertificationList());
    }, []);

    return (
        <NoticeContainerLayout>
            <TitleLayout>
                <Title>공지사항</Title>
                <AddContentsTextButton onClick={clickAddNotice}>게시물 작성</AddContentsTextButton>
            </TitleLayout>
            <NoticeComponents.NoticeListTable />
        </NoticeContainerLayout>
    );
};

export default NoticeContainer;
