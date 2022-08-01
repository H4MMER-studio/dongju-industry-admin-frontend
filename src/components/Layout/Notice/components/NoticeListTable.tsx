import React from "react";
import styled from "styled-components";

const NoticeListTableLayout = styled.div``;
const NoticeListTableEle = styled.table`
    width: 100%;
    border-top: 1px solid #777777;
    border-bottom: 1px solid #777777;
    background-color: #fff;
`;
const TableHeader = styled.th`
    text-align: left;
    height: 44px;
    line-height: 44px;
    padding-left: 16px;
    border-bottom: 1px solid #c8c8c8;
`;
const TableRow = styled.tr`
    height: 49px;
    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }
`;

const TableData = styled.td`
    padding-left: 16px;
    color: #383838;
    font-weight: 400;
    font-size: 15px;
`;

const NoticeListTable: React.FC = () => {
    return (
        <NoticeListTableLayout>
            <NoticeListTableEle>
                <TableHeader>날짜</TableHeader>
                <TableHeader>분류</TableHeader>
                <TableHeader>제목</TableHeader>
                {TES_DATE.map((d) => {
                    return (
                        <TableRow>
                            <TableData style={{ width: 120 }}>{d.date}</TableData>
                            <TableData style={{ width: 146 }}>{d.type}</TableData>
                            <TableData>{d.title}</TableData>
                        </TableRow>
                    );
                })}
            </NoticeListTableEle>
        </NoticeListTableLayout>
    );
};

export default NoticeListTable;

const TES_DATE = [
    { date: "2012.2", type: "A/S문의", title: "공기조화기가 박살났어요 큰일이네용" },
    { date: "2012.2", type: "A/S문의", title: "공기조화기가 박살났어요 큰일이네용" },
    { date: "2012.2", type: "A/S문의", title: "공기조화기가 박살났어요 큰일이네용" },
    { date: "2012.2", type: "A/S문의", title: "공기조화기가 박살났어요 큰일이네용" },
    { date: "2012.2", type: "A/S문의", title: "공기조화기가 박살났어요 큰일이네용" },
    { date: "2012.2", type: "A/S문의", title: "공기조화기가 박살났어요 큰일이네용" },
];
