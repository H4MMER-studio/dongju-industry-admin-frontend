import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';

const STDContainer = styled.footer`
  ${mixins.flexSet('space-between')}
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 24px 28px;

  @media (max-width: 1023px) {
    ${mixins.flexSet('flex-start', 'flex-start', 'column')}
    position: static;
    margin-top: 24px;
  }
`;

const STDLogo = styled.img`
  width: 240px;

  @media (max-width: 1023px) {
    margin-bottom: 24px;
  }
`;

const STDCompanyInfoBox = styled.div`
  ${mixins.flexSet()}

  >div {
    margin-right: 24px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 1023px) {
    ${mixins.flexSet('flex-start', 'flex-start', 'column')}

    >div {
      margin: 0 0 12px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const STDCompanyInfoText = styled.p<{ cssStyle?: string }>`
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 18px;
  color: #949494;

  b {
    font-weight: bold;
  }

  @media (max-width: 1023px) {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${({ cssStyle }) => cssStyle}
`;

const Footer: React.FC = () => {
  return (
    <STDContainer>
      <STDLogo src="/image/footer_logo.png" />
      <STDCompanyInfoBox>
        <div>
          <STDCompanyInfoText>
            <b>본사</b> : 경기도 화성시 남양읍 주석로 228-6, 1층
          </STDCompanyInfoText>
          <STDCompanyInfoText cssStyle={'margin-bottom: 0;'}>
            <b>대표</b> : 전춘식
          </STDCompanyInfoText>
        </div>
        <div>
          <STDCompanyInfoText>
            <b>전화</b> : 032-579-8272
          </STDCompanyInfoText>
          <STDCompanyInfoText cssStyle={'margin-bottom: 0;'}>
            <b>사업자등록번호</b> : 137-86-16792
          </STDCompanyInfoText>
        </div>
        <div>
          <STDCompanyInfoText>
            <b>팩스</b> : 031-357-7462
          </STDCompanyInfoText>
          <STDCompanyInfoText cssStyle={'margin-bottom: 0;'}>
            <b>E-mail</b> : dongju91@hanmail.net
          </STDCompanyInfoText>
        </div>
      </STDCompanyInfoBox>
    </STDContainer>
  );
};

export default Footer;
