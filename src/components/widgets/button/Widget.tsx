import React from 'react';
import styled from 'styled-components';

interface IProps {
  value: string;
  state: 'active' | 'default';
}

const Widget: React.FC<IProps> = (props) => {
  return <WidgetButton state={props.state}>{props.value}</WidgetButton>;
};

export default Widget;

interface WidgetProps {
  state: 'active' | 'default';
}

const WidgetButton = styled.button<WidgetProps>`
  padding: 12px 4px;
  background-color: ${(props) =>
    props.state === 'active' ? '#FFFFFF' : '#383838'};
  color: ${(props) => (props.state === 'active' ? '#555555' : '#F5F5F5')};
  font-size: 16px;

  &:hover {
    background-color: #949494;
    color: #f5f5f5;
  }
`;
