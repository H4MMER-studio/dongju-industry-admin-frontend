import React from 'react';
import styled from 'styled-components';
import { device } from '@/styles';

interface IProps {
  value: string;
  state: 'active' | 'default';
  cssStyle?: string;
  onClick(): void;
}

const Primary: React.FC<IProps> = (props) => {
  return (
    <PrimaryButton
      state={props.state}
      cssStyle={props.cssStyle}
      onClick={props.onClick}
    >
      {props.value}
    </PrimaryButton>
  );
};

export default Primary;

interface PrimaryButtonProps {
  state: 'active' | 'default';
  cssStyle?: string;
}

const PrimaryButton = styled.button<PrimaryButtonProps>`
  padding: 6px 12px;
  border-radius: 18px;
  background-color: ${(props) => (props.state === 'active' ? '#2979FF' : '')};
  color: ${(props) => (props.state === 'active' ? '#fff' : '#000')};
  font-size: 18px;
  line-height: 24px;
  &:active {
    background-color: #2979ff;
    color: white;
  }

  @media ${device.laptop} {
    &:hover {
      background-color: #2979ff;
      color: white;
    }
  }
  ${({ cssStyle }) => cssStyle}
`;
