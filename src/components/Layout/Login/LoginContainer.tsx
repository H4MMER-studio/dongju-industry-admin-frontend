import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';

interface IProps {
  currentIdPw: { id: string; pw: string };
  onClickSubmit(): void;
  onChangeSetCurrentIdPw(type: 'id' | 'pw', value: string): void;
}

const STDContainer = styled.article`
  width: 100%;
  height: 100%;
  background: url('/image/main_page/main_company.png') no-repeat center;
  background-size: cover;
`;

const STDRightLoginBar = styled.div`
  ${mixins.flexSet('center', 'center', 'column')}
  width: 480px;
  height: 100%;
  margin-left: auto;
  background-color: white;
  border-radius: 30px 0px 0px 30px;
`;

const STDLogoImage = styled.img`
  width: 182px;
  margin-bottom: 72px;
`;

const STDInputBox = styled.input<{ marginBottom?: number }>`
  width: 360px;
  height: 48px;
  padding: 0 16px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 36}px;
  background: #efefef;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  font-size: 18px;
`;

const STDSubmitButton = styled.button`
  ${mixins.flexSet()}
  width: 360px;
  height: 52px;
  background: #2979ff;
  border-radius: 12px;
  color: white;
  font-size: 18px;
`;

const LoginContainer: React.FC<IProps> = ({
  currentIdPw,
  onClickSubmit,
  onChangeSetCurrentIdPw,
}) => {
  return (
    <STDContainer>
      <STDRightLoginBar>
        <STDLogoImage src="/image/main_nav/header_logo.png" />
        <STDInputBox
          placeholder="아이디"
          value={currentIdPw.id}
          onKeyUp={(e) => e.key === 'Enter' && onClickSubmit()}
          onChange={(e) => onChangeSetCurrentIdPw('id', e.target.value)}
        />
        <STDInputBox
          placeholder="비밀번호"
          marginBottom={48}
          type="password"
          value={currentIdPw.pw}
          onKeyUp={(e) => e.key === 'Enter' && onClickSubmit()}
          onChange={(e) => onChangeSetCurrentIdPw('pw', e.target.value)}
        />
        <STDSubmitButton onClick={onClickSubmit}>로그인</STDSubmitButton>
      </STDRightLoginBar>
    </STDContainer>
  );
};

export default LoginContainer;
