import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as CustomerServiceComponents from './Components';
import { Images } from 'public/image';
import useResize from '@/hooks/useResize';
import { useDispatch } from 'react-redux';
import { inquiryActions } from '@/store/module/inquiry';

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

const CustomerServiceContainer: React.FC<Iprops> = ({
  questionType,
  clickContact,
  closeForm,
}) => {
  const { width } = useResize();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('문의 가져오기');
    dispatch(
      inquiryActions.getInquiries({
        skip: 1,
        limit: 30,
        sort: 'created-at desc',
      })
    );
  }, []);

  return (
    <CustomerServiceContainerLayout>
      <Title>문의</Title>
      <CustomerServiceSearchBar>
        <CustomerServiceComponents.SearchBar options={OPTIONS} />
      </CustomerServiceSearchBar>
      <CustomerServiceComponents.ListTable />
    </CustomerServiceContainerLayout>
  );
};

export default CustomerServiceContainer;

const OPTIONS = [{ name: '납품처', value: '납품처' }];
