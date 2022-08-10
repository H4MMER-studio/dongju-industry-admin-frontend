import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { INotice } from "@/interfaces";
import { noticeActions } from "@/store";
import { useDispatch } from "react-redux";
import { useGetStore } from "@/hooks";
import { useRouter } from "next/router";

const NoticeListTableLayout = styled.div`
    position: relative;
`;

const NoticeListTableEle = styled.table`
    width: 100%;
`;

interface TableHeaderProps {
    isSetStyle: Boolean;
}

const TableHeader = styled.th<TableHeaderProps>`
    text-align: left;
    height: 44px;
    line-height: 44px;
    padding-left: 16px;
    border-top: ${(props) => (props.isSetStyle ? "1px solid #777777" : "none")};
    border-bottom: ${(props) => (props.isSetStyle ? "1px solid #c8c8c8" : "none")};
    background-color: ${(props) => (props.isSetStyle ? "#fff" : "none")};
    font-size: 15px;
`;

interface TableRowProps {
    isLast?: Boolean;
}

const TableRow = styled.tr<TableRowProps>`
    height: 49px;
    cursor: pointer;

    /* &:hover {
        background-color: #f5f5f5;
    } */
`;

interface TableDataProps {
    isSetStyle: Boolean;
    isLast?: Boolean;
}

const TableData = styled.td<TableDataProps>`
    padding-left: 16px;
    color: #383838;
    font-weight: 400;
    font-size: 15px;
    background-color: ${(props) => (props.isSetStyle ? "#fff" : "none")};
    border-bottom: ${(props) => (props.isLast ? "1px solid #c8c8c8" : "none")};
`;

const ControlButtonLayout = styled.div`
    display: flex;
    width: 100%;
`;

const DeleteButton = styled.div`
    font-size: 15px;
    color: #ff334b;
    font-weight: 600;
    margin-right: 8px;
`;

const EditButton = styled.div`
    font-size: 15px;
    color: #2979ff;
    font-weight: 600;
`;

const NoticeListTable: React.FC = () => {
    const router = useRouter();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const dispatch = useDispatch();
    const { noticeList } = useGetStore.notice();

    useEffect(() => {
        dispatch(noticeActions.getNoticeList({ value: "notification", skip: 1, limit: 30, sort: "created-at desc" }));
    }, []);

    const clickNotice = (noticeId: string) => {
        router.push(`/notice/notice/detail/${noticeId}`);
    };

    return (
        <NoticeListTableLayout>
            <NoticeListTableEle>
                <TableHeader isSetStyle>날짜</TableHeader>
                <TableHeader isSetStyle>분류</TableHeader>
                <TableHeader isSetStyle>제목</TableHeader>
                {noticeList.data.map((notice, i) => {
                    return (
                        <TableRow
                            key={i}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => clickNotice(notice._id)}>
                            <TableData style={{ width: 120 }} isSetStyle isLast={noticeList.data.length - 1 === i}>
                                {notice.created_at}
                            </TableData>
                            <TableData style={{ width: 146 }} isSetStyle isLast={noticeList.data.length - 1 === i}>
                                {notice.notice_type}
                            </TableData>
                            <TableData isSetStyle isLast={noticeList.data.length - 1 === i}>
                                {notice.notice_title}
                            </TableData>
                            <TableData isSetStyle={false} style={{ width: 108 }}>
                                {hoveredIndex === i && (
                                    <ControlButtonLayout>
                                        <DeleteButton>삭제</DeleteButton>
                                        <EditButton>수정</EditButton>
                                    </ControlButtonLayout>
                                )}
                            </TableData>
                        </TableRow>
                    );
                })}
            </NoticeListTableEle>
        </NoticeListTableLayout>
    );
};

export default NoticeListTable;
