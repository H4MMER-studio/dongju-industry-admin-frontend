import React from 'react';
import styled from 'styled-components';

interface Iprops {
  applyList: string[];
}

const ApplyInfoCardLayout = styled.div`
  width: 100%;
  padding: 24px;
  background: #ffffff;
  border-radius: 12px;
`;
const Title = styled.div`
  color: #2979ff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const UnorderedList = styled.ul`
  list-style: inside;
`;

const List = styled.li`
  font-size: 19px;
`;

const ApplyInfoCard: React.FC<Iprops> = ({ applyList }) => {
  return (
    <ApplyInfoCardLayout>
      <Title>적용</Title>
      <UnorderedList>
        {applyList.map((value) => {
          return <List key={value}>{value}</List>;
        })}
      </UnorderedList>
    </ApplyInfoCardLayout>
  );
};
export default ApplyInfoCard;
