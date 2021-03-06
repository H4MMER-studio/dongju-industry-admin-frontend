import React from 'react';
import styled from 'styled-components';

interface Iprops {
  title: string;
  onChange: (value: string) => void;
}

const InputFormLayout = styled.div``;

const Title = styled.div`
  font-size: 15px;
  color: #777777;
  margin-bottom: 4px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 48px;
  background-color: #fcfcfc;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  color: #383838;
  padding: 0 16px;
`;

const InputForm: React.VFC<Iprops> = ({ title, onChange }) => {
  return (
    <InputFormLayout>
      <Title>{title}</Title>
      <InputBox onChange={(e) => onChange(e.target.value)} />
    </InputFormLayout>
  );
};

export default InputForm;
