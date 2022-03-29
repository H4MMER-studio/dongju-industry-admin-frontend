import React from 'react';
import styled from 'styled-components';

interface InputBoxProps {
  type: string;
  placeholder: string;
}

const InputBoxLayout = styled.div`
  width: 332px;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const Type = styled.div`
  font-size: 15px;
  color: #383838;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 17px;
  display: flex;
  align-items: center;
`;

const InputBox: React.FC<InputBoxProps> = ({ type, placeholder }) => {
  return (
    <InputBoxLayout>
      <Type>{type}</Type>
      <Input placeholder={placeholder} />
    </InputBoxLayout>
  );
};

export default InputBox;
