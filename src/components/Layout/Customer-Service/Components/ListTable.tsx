import React,{useState, ReactNode} from "react";
import styled from "styled-components";
import FormModal from "./FormModal"

const ListTableLayout = styled.div``;

const ListTableEle = styled.table`
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #777777;
    border-bottom: 1px solid #777777;
`;

interface TableHeaderProps {
    minWidth: number;
}

const TableHeader = styled.th<TableHeaderProps>`
    min-width: ${(props) => props.minWidth}px;
    text-align: left;
    font-size: 15px;
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

    /* &:hover {
        background-color: #f5f5f5;
    } */
`;

const TableData = styled.td`
    padding-left: 16px;
    color: #383838;
    font-weight: 400;
    font-size: 15px;
`;

const ListTable: React.FC = () => {
    const [form, setForm] = useState<ReactNode | null>(null)

    const clickItem = () => {
        setForm(<FormModal closeForm={()=>{setForm(null)}} />)
    }


    return (
        <>
            {form}
            <ListTableLayout>
                <ListTableEle>
                    <TableHeader minWidth={120}>날짜</TableHeader>
                    <TableHeader minWidth={120}>분류</TableHeader>
                    <TableHeader minWidth={357}>제목</TableHeader>
                    <TableHeader minWidth={140}>회사명</TableHeader>
                    <TableHeader minWidth={120}>담당자 성함</TableHeader>
                    <TableHeader minWidth={120}>상태</TableHeader>
                    {TEST_DATE.map((d, i) => (
                        <TableRow key={i} onClick={() => {clickItem()}}>
                            <TableData>{d.date}</TableData>
                            <TableData>{d.date}</TableData>
                            <TableData>{d.date}</TableData>
                            <TableData>{d.date}</TableData>
                            <TableData>{d.date}</TableData>
                            <TableData>{d.date}</TableData>
                        </TableRow>
                    ))}
                </ListTableEle>
            </ListTableLayout>
        </>
    );
};

export default ListTable;

const TEST_DATE = [
    { date: "2012.2", type: "A/S문의", title: "공기조화기가 박살났어요 큰일이네용" },
    { date: "2012.2", type: "A/S문의", title: "공기조화기가 박살났어요 큰일이네용" },
    { date: "2012.2", type: "A/S문의", title: "공기조화기가 박살났어요 큰일이네용" },
    { date: "2012.2", type: "A/S문의", title: "공기조화기가 박살났어요 큰일이네용" },
    { date: "2012.2", type: "A/S문의", title: "공기조화기가 박살났어요 큰일이네용" },
    { date: "2012.2", type: "A/S문의", title: "공기조화기가 박살났어요 큰일이네용" },
];
