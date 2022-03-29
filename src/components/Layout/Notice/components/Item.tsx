import React from 'react';
import styled from 'styled-components';

interface Iprops {
  title: string;
  date: string;
  clickNoticeItem: () => void;
}

const Item: React.FC<Iprops> = ({ title, date, clickNoticeItem }) => {
  return (
    <ItemLayout onClick={clickNoticeItem}>
      <Left>
        <NoticeText>NOTICE</NoticeText>
        <NoticeTitle>{title}</NoticeTitle>
      </Left>
      <DateText>{date}</DateText>
    </ItemLayout>
  );
};

export default Item;

const ItemLayout = styled.div`
  width: 100%;
  height: 64px;
  background: #383838;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #555555;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const NoticeText = styled.div`
  color: #448aff;
  font-size: 16px;
  font-weight: 600;
  margin-right: 14px;
`;

const NoticeTitle = styled.div`
  color: #c8c8c8;
`;

const DateText = styled.div`
  font-size: 14px;
  font-weight: 400px;
  color: #c8c8c8;
`;
