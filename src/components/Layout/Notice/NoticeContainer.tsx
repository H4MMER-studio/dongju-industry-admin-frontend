import React from "react";
import styled from "styled-components";
import * as NoticeComponents from "./components";
import { Widgets } from "@/components";

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
    margin-bottom: 24px;
`;

const AddContentsTextButton = styled.div`
    font-size: 17px;
    color: #2979ff;
    cursor: pointer;
    font-weight: 600;
`;

const FlexRightLayout = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: calc(100% - 109px);
`;

const SelectorLayout = styled.div`
    display: flex;
    align-items: center;
    width: 120px;
    height: 48px;
    background-color: #fff;
    border: 1px solid #dfdfdf;
    border-radius: 12px;
    padding-left: 12px;
    margin-bottom: 12px;

    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
        padding: 0px;
    }

    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
        padding-right: 54px;
        font-size: 17px;
        color: #777777;
    }
`;

const NoticeContainer: React.FC<IProps> = ({ clickNoticeItem, clickAddNotice }) => {
    return (
        <NoticeContainerLayout>
            <TitleLayout>
                <Title>공지사항</Title>
                <AddContentsTextButton onClick={clickAddNotice}>게시물 작성</AddContentsTextButton>
            </TitleLayout>
            <FlexRightLayout>
                <SelectorLayout>
                    <Widgets.Select.Selector options={[{ name: "최신순", value: "최신순" }]} />
                </SelectorLayout>
            </FlexRightLayout>
            <NoticeComponents.NoticeListTable />
        </NoticeContainerLayout>
    );
};

export default NoticeContainer;
