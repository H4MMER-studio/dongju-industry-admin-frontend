import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { noticeActions } from "@/store";
import { useGetStore } from "@/hooks";
import * as Archives from "./components";
import { Widgets } from "@/components";

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

const ArchivesContainer: React.FC = () => {
    const dispatch = useDispatch();
    const { archiveList } = useGetStore.notice();

    useEffect(() => {
        dispatch(noticeActions.getNoticeList({ value: "archive", skip: 1, limit: 30, sort: "created-at desc" }));
    }, []);

    return (
        <ArchivesContainerLayout>
            <TitleLayout>
                <Title>자료실</Title>
                <AddContentsTextButton>게시물 작성</AddContentsTextButton>
            </TitleLayout>
            <FlexRightLayout>
                <SelectorLayout>
                    <Widgets.Select.Selector options={[{ name: "최신순", value: "최신순" }]} />
                </SelectorLayout>
            </FlexRightLayout>
            <Archives.ArchiveListTable list={archiveList.data} />
            {/* <Widgets.Pagination.BasicPagination /> */}
        </ArchivesContainerLayout>
    );
};

export default ArchivesContainer;
