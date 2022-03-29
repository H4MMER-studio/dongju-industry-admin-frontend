import React from 'react';
import styled from 'styled-components';
import { Images } from 'public/image';

const WelcomeLayout = styled.main`
  display: flex;

  @media (max-width: 1023px) {
    display: block;
  }
`;

const LeftSection = styled.section`
  width: 608px;
  margin-right: 24px;

  @media (max-width: 1366px) {
    width: 475px;
  }

  @media (max-width: 1023px) {
    width: 100%;

    margin-bottom: 24px;
  }
`;

const RightSection = styled.section`
  width: 608px;

  @media (max-width: 1366px) {
    width: 475px;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const CardLayout = styled.div`
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
  padding: 24px;
  background-color: #fff;
  width: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 32px;
  color: #2979ff;
  margin-bottom: 24px;

  @media (max-width: 1023px) {
    font-size: 28px;
  }
`;

const MainText = styled.div`
  font-size: 19px;
  color: #383838;
  white-space: pre-wrap;
  line-height: 32px;

  @media (max-width: 1023px) {
    font-size: 17px;
  }

  .bold {
    font-weight: 600;
  }
`;

const SignLayout = styled.div`
  position: relative;
  margin-top: 24px;
  height: 56px;
  width: 100%;
`;

const SignText = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  font-size: 19px;
  color: #383838;
`;

const SignImage = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 103px;
  height: 56px;
`;

const Welcome: React.FC = () => {
  return (
    <WelcomeLayout>
      <LeftSection>
        <CardLayout>
          <Title>안녕하십니까</Title>
          <MainText>
            {'고객 여러분 안녕하십니까?\n'}
            <span className="bold">
              {'주식회사 동주산업을 찾아주셔서 감사합니다.\n'}
            </span>
            {'\n'}
            {
              '저희 회사는 1990년 창립이래 공조산업 분야를 비롯하여 동파방지댐퍼코일이 국내에 첫발을 디딘 1998년부터 동파방지댐퍼코일을 제공하며 '
            }
            <span className="bold">
              {
                '국내 최고의 기술력과 경험을 축적하여 왔습니다.\n\n저희는 그러한 기술력과 경험을 바탕으로 여러분의 성공 비지니스에 든든한 파트너로서 앞으로도 최고의 서비스를 제공하고자 합니다.'
              }
            </span>
          </MainText>
        </CardLayout>
      </LeftSection>
      <RightSection>
        <CardLayout>
          <Title>고객과 함께하는 성장</Title>
          <MainText>
            저희 회사는 <span className="bold">'고객과 함께하는 성장'</span>
            이라는 슬로건 아래 끊임없는 경영혁신을 통한 대 고객 서비스 강화와
            내실 경영을 구현하여 고객과 함께 성공할 수 있는 비지니스를 창출해
            나갈 것입니다.
            <span className="bold">
              {'\n\n고객 여러분의 사업번창과 건승을 기원합니다.\n'}
            </span>
          </MainText>
          <SignLayout>
            <SignText>주식회사 동주산업 대표이사 전춘식</SignText>
            <SignImage src={Images.Sign} />
          </SignLayout>
        </CardLayout>
      </RightSection>
    </WelcomeLayout>
  );
};

export default Welcome;
