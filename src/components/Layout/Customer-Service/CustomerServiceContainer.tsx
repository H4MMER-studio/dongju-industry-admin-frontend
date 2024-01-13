import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as CustomerServiceComponents from './Components';
import { Images } from 'public/image';
import useResize from '@/hooks/useResize';
import { useDispatch } from 'react-redux';
import { inquiryActions } from '@/store/module/inquiry';
import { Widgets } from '@/components';
import { useGetStore } from '@/hooks';

interface Iprops {
  questionType: 'estimate' | 'A/S' | 'ETC';
  clickContact: (type: 'estimate' | 'A/S' | 'ETC') => void;
  closeForm: () => void;
}

const CustomerServiceContainerLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const CustomerServiceSearchBar = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  overflow: hidden;
  width: 339px;
  height: 48px;
  background: #ffffff;
  margin-bottom: 12px;
`;

const CenterLayout = styled.div`
  width: calc(100% - 108px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const CustomerServiceContainer: React.FC<Iprops> = ({
  questionType,
  clickContact,
  closeForm,
}) => {
  const [skip, setSkip] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [option, setOption] = useState<string>('inquiry_company_name');
  const { width } = useResize();
  const dispatch = useDispatch();
  const { inqueries } = useGetStore.inquiry();

  useEffect(() => {
    if (searchKeyword) {
      setSkip(1);
      setLimit(10);
      dispatch(
        inquiryActions.getInquiries({
          skip: 1,
          limit: 10,
          sort: 'created-at desc',
          field: option as 'inquiry_company_name' | 'inquiry_person_name',
          value: searchKeyword,
        })
      );
    } else {
      dispatch(
        inquiryActions.getInquiries({
          skip: skip,
          limit: limit,
          sort: 'created-at desc',
        })
      );
    }
  }, [skip, searchKeyword]);

  return (
    <CustomerServiceContainerLayout>
      <Title>문의</Title>
      <CustomerServiceSearchBar>
        <CustomerServiceComponents.SearchBar
          searchKeyword={searchKeyword}
          options={OPTIONS}
          onChangeSearch={setSearchKeyword}
          onClickOption={setOption}
        />
      </CustomerServiceSearchBar>
      <CustomerServiceComponents.ListTable />
      <CenterLayout>
        <Widgets.Pagination.BasicPagination
          total={
            Number.isInteger(inqueries.size / 10)
              ? inqueries.data.length / 10
              : Math.floor(inqueries.size / 10) + 1
          }
          clickPage={(page) => {
            setSkip(page * 10 - 9);
            setLimit(page * 10);
          }}
        />
      </CenterLayout>
    </CustomerServiceContainerLayout>
  );
};

export default CustomerServiceContainer;

const OPTIONS = [
  { name: '회사명', field: 'inquiry_company_name' },
  { name: '담당자', field: 'inquiry_person_name' },
];
