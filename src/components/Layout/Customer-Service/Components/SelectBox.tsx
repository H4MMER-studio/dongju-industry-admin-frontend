import React from 'react';
import styled from 'styled-components';

interface SelectBoxProps {
  type: string;
}

const SelectBoxLayout = styled.div``;

const Type = styled.div`
  font-size: 15px;
  color: #383838;
  margin-bottom: 4px;
`;

const SelectBox: React.FC<SelectBoxProps> = ({ type }) => {
  return (
    <SelectBoxLayout>
      <Type>{type}</Type>
    </SelectBoxLayout>
  );
};

export default SelectBox;
