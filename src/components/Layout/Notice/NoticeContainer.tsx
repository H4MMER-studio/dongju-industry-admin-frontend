import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as NoticeComponents from './components';
import { Widgets } from '@/components';
import { useDispatch } from 'react-redux';
import { noticeActions } from '@/store';
import { useGetStore } from '@/hooks';

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

const CenterLayout = styled.div`
  width: calc(100% - 108px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const NoticeContainer: React.FC<IProps> = ({
  clickNoticeItem,
  clickAddNotice,
}) => {
  const [skip, setSkip] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();
  const { noticeList } = useGetStore.notice();

  useEffect(() => {
    dispatch(
      noticeActions.getNoticeList({
        value: 'notification',
        skip,
        limit,
        sort: 'created-at desc',
      })
    );
  }, [skip]);

  return (
    <NoticeContainerLayout>
      <TitleLayout>
        <Title>공지사항</Title>
        <AddContentsTextButton onClick={clickAddNotice}>
          게시물 작성
        </AddContentsTextButton>
      </TitleLayout>
      <FlexRightLayout>
        <SelectorLayout>
          <Widgets.Select.Selector
            options={[{ name: '최신순', field: '최신순' }]}
          />
        </SelectorLayout>
      </FlexRightLayout>
      <NoticeComponents.NoticeListTable
        noticeList={noticeList.data}
        skip={skip}
        limit={limit}
      />
      <CenterLayout>
        <Widgets.Pagination.BasicPagination
          total={
            Number.isInteger(noticeList.size / 10)
              ? noticeList.data.length / 10
              : Math.floor(noticeList.size / 10) + 1
          }
          clickPage={(page) => {
            setSkip(page * 10 - 9);
            setLimit(page * 10);
          }}
        />
      </CenterLayout>
    </NoticeContainerLayout>
  );
};

export default NoticeContainer;
