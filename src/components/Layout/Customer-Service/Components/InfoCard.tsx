import React from 'react';
import styled from 'styled-components';

interface Iprops {
  backgroundImageSrc: string;
}

const InfoCard: React.FC<Iprops> = ({ backgroundImageSrc }) => {
  return (
    <InfoCardLayout
      style={{ backgroundImage: `url(${backgroundImageSrc})` }}
    ></InfoCardLayout>
  );
};

export default InfoCard;

const InfoCardLayout = styled.div`
  position: relative;
  width: 270px;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px;
  border-radius: 20px;
`;
