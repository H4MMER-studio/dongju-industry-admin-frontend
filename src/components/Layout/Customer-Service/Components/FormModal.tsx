import React from 'react';
import styled from 'styled-components';
import { Widgets } from '@/components';
import useResize from '@/hooks/useResize';
import { IInquiry } from '@/interfaces';
import InputBox from './InputBox';
import { Icon } from 'public/image';
import { ComponentsUtil } from '@/components/Util';

interface Iprops {
  inquiry: IInquiry;
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

const FormModal: React.FC<Iprops> = ({ inquiry, closeForm }) => {
  const { width } = useResize();

  const setModalStyle = () => {
    if (width <= 1023) {
      return { width: '100%', margin: 0, height: '100%', maxHeight: 'none' };
    }
  };

  return (
    <Widgets.Layout.ModalLayout onClose={() => {}} paperStyle={setModalStyle()}>
      <FormLayout>
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
                <InputBox
                  type="회사명"
                  placeholder="회사명을 입력해주세요"
                  value={inquiry?.inquiry_company_name ?? '-'}
                />
              </InputBoxLayout>
              <InputBox
                type="제목"
                placeholder="제목을 입력해주세요"
                value={inquiry?.inquiry_title ?? '-'}
              />
            </Layout>
            <Layout>
              <InputBoxLayout>
                <InputBox
                  type="담당자 성함"
                  placeholder="성함을 입력해 주세요"
                  value={inquiry?.inquiry_person_name ?? '-'}
                />
              </InputBoxLayout>
              <InputBox
                type="연락처"
                placeholder="연락처를 입력해 주세요"
                value={inquiry?.inquiry_phone_number ?? '-'}
              />
            </Layout>
            <Layout>
              <InputBoxLayout>
                <InputBox
                  type="e-mail"
                  placeholder="e-mail을 입력해주세요"
                  value={inquiry?.inquiry_email ?? '-'}
                />
              </InputBoxLayout>
              <InputBox
                type="제품명"
                placeholder="회사명을 입력해주세요"
                value={
                  inquiry?.inquiry_product_type
                    ? ComponentsUtil.getProductName(
                        inquiry?.inquiry_product_type
                      )
                    : '-'
                }
              />
            </Layout>
            <TextAreaLayout>
              <TextAreaLabel>상세내용</TextAreaLabel>
              <TextArea value={inquiry?.inquiry_content ?? '-'} disabled />
            </TextAreaLayout>
          </ContentsLayout>
          <ButtonLayout>
            <SendEmail href={`mailto:${inquiry.inquiry_email}`}>
              답변하기
            </SendEmail>
          </ButtonLayout>
        </EstimateFormLayout>
      </FormLayout>
    </Widgets.Layout.ModalLayout>
  );
};

export default FormModal;

const FormLayout = styled.div`
  width: 720px;
  background-color: #fff;
  padding: 20px;

  @media (max-width: 1023px) {
    width: 100%;
    padding-top: 84px;
  }
`;

const ButtonLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SendEmail = styled.a`
  background-color: #2979ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 12px 16px;
  font-size: 18px;
  color: #fff;
`;
