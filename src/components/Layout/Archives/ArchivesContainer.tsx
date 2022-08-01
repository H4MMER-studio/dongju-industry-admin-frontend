import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { noticeActions } from "@/store";
import { useGetStore } from "@/hooks";
import * as Archives from "./components";

const ArchivesContainerLayout = styled.div`
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

const ArchivesContainer: React.FC = () => {
    const dispatch = useDispatch();
    const { archiveList } = useGetStore.notice();

    useEffect(() => {
        dispatch(noticeActions.getNoticeList({ value: "archive", skip: 1, limit: 30, sort: "created-at desc" }));
    }, []);

    console.log("자료실 데이터", archiveList);

    return (
        <ArchivesContainerLayout>
            <TitleLayout>
                <Title>공지사항</Title>
                <AddContentsTextButton>게시물 작성</AddContentsTextButton>
            </TitleLayout>
            <Archives.ArchiveListTable list={archiveList.data} />
        </ArchivesContainerLayout>
    );
};

export default ArchivesContainer;
