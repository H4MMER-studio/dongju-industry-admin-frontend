import React from 'react';
import styled from 'styled-components';
import { Icon } from 'public/image';
import InputBox from './InputBox';

interface Iprops {
  closeForm: () => void;
}

const EstimateFormLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #000;
`;

const CloseIconLayout = styled.div`
  cursor: pointer;
`;

const ContentsLayout = styled.div``;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;

  &:nth-last-child(1) {
    margin-bottom: 26px;
  }

  @media (max-width: 1023px) {
    display: block;
    margin-bottom: 22px;
  }
`;

const InputBoxLayout = styled.div`
  margin-right: 16px;

  @media (max-width: 1023px) {
    margin-right: 0px;
    margin-bottom: 22px;
  }
`;

const TextAreaLayout = styled.div``;

const TextAreaLabel = styled.div`
  color: #383838;
  font-size: 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 328px;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 17px;
`;

const EstimateForm: React.FC<Iprops> = ({ closeForm }) => {
  return (
    <EstimateFormLayout>
      <Header>
        <Title>고객문의</Title>
        <CloseIconLayout onClick={closeForm}>
          <Icon.CloseIcon />
        </CloseIconLayout>
      </Header>
      <ContentsLayout>
        <Layout>
          <InputBoxLayout>
            <InputBox type="회사명" placeholder="회사명을 입력해주세요" />
          </InputBoxLayout>
          <InputBox type="제목" placeholder="제목을 입력해주세요" />
        </Layout>
        <Layout>
          <InputBoxLayout>
            <InputBox type="담당자 성함" placeholder="성함을 입력해 주세요" />
          </InputBoxLayout>
          <InputBox type="연락처" placeholder="연락처를 입력해 주세요" />
        </Layout>
        <Layout>
          <InputBoxLayout>
            <InputBox type="e-mail" placeholder="e-mail을 입력해주세요" />
          </InputBoxLayout>
          <InputBox type="회사명" placeholder="회사명을 입력해주세요" />
        </Layout>
        <TextAreaLayout>
          <TextAreaLabel>상세내용</TextAreaLabel>
          <TextArea placeholder="상세내용을 입력해 주세요" />
        </TextAreaLayout>
      </ContentsLayout>
    </EstimateFormLayout>
  );
};

export default EstimateForm;
