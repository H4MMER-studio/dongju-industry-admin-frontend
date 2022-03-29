import React from 'react';
import styled from 'styled-components';

interface IProps {
  value: string;
  state: 'active' | 'default';
}

const Secondary: React.FC<IProps> = (props) => {
  return <SecondaryButton state={props.state}>{props.value}</SecondaryButton>;
};

export default Secondary;

interface SecondaryProps {
  state: 'active' | 'default';
}

const SecondaryButton = styled.button<SecondaryProps>`
  padding: 5px 10px;
  border-radius: 18px;
  background-color: ${(props) => (props.state === 'active' ? '#2979FF' : '')};
  color: ${(props) => (props.state === 'active' ? '#fff' : '#fff')};
  font-size: 16px;
`;
