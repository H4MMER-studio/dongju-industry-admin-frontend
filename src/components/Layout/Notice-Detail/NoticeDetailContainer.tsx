import React from 'react';
import styled from 'styled-components';
import * as NoticeDetailComponents from './components';
import { Icon } from 'public/image';

const NoticeDetailContainer: React.FC = () => {
  return (
    <NoticeDetailContainerLayout>
      <Header>
        <Title>타이틀을 입력해 주세요</Title>
        <WriterLayout>
          <Writer>작성자: {`글쓴이`}</Writer>
          <DateText>2020.01.20</DateText>
        </WriterLayout>
      </Header>
      <ContentsContainer>{'내용 입니다.'}</ContentsContainer>
      <SubText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim praesent
        velit turpis aenean vestibulum id lectus urna, in. Urna risus nulla
        nulla condimentum lorem nunc. Lectus in lobortis tellus tincidunt. At
        libero ultrices lorem sed felis gravida commodo eget integer.
      </SubText>
      <AttachedFileLayout>
        <NoticeDetailComponents.AttachedFile />
      </AttachedFileLayout>
      <CopyLinkLayout>
        <ButtonLayout>
          <Text>링크복사</Text>
          <Icon.ShareIcon />
        </ButtonLayout>
      </CopyLinkLayout>
      <Border />
    </NoticeDetailContainerLayout>
  );
};

export default NoticeDetailContainer;

const NoticeDetailContainerLayout = styled.div`
  width: 100%;
  padding: 16px 32px 20px;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const WriterLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Writer = styled.div`
  color: #b7b7b7;
  font-size: 15px;
  font-weight: 400;
`;

const DateText = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #b7b7b7;
`;

const Header = styled.header`
  margin-bottom: 16px;
`;

const ContentsContainer = styled.div`
  width: 100%;
  min-height: 480px;
  background-color: #777777;
  margin-bottom: 12px;
`;

const SubText = styled.div`
  font-size: 17px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 24px;
`;

const AttachedFileLayout = styled.div`
  margin-bottom: 40px;
`;

const CopyLinkLayout = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 13px;
  color: #c8c8c8;
  margin-right: 4.13px;
`;

const ButtonLayout = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: #383838;
`;
