import React from 'react';
import styled from 'styled-components';
import * as NoticeComponents from './components';

interface IProps {
  clickNoticeItem: (id: string) => void;
}

const NoticeContainer: React.FC<IProps> = ({ clickNoticeItem }) => {
  return (
    <NoticeContainerLayout>
      <Title>공지사항</Title>
      <ListLayout>
        <NoticeComponents.Item
          title={'IFB동파 방지'}
          date={'2020.01.26'}
          clickNoticeItem={() => clickNoticeItem('id')}
        />
      </ListLayout>
    </NoticeContainerLayout>
  );
};

export default NoticeContainer;

const NoticeContainerLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const ListLayout = styled.div``;
