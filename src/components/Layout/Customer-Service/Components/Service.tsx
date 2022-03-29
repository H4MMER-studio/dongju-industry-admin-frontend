import React from 'react';
import styled from 'styled-components';
import { Widgets } from '@/components';

interface Iprops {
  title: string;
  infoMessage: string;
  backgroundImageSrc: string;
  clickContact: () => void;
}

const Service: React.FC<Iprops> = ({
  backgroundImageSrc,
  title,
  infoMessage,
  clickContact,
}) => {
  return (
    <ServiceLayout style={{ backgroundImage: `url(${backgroundImageSrc})` }}>
      <Title>{title}</Title>
      <InfoMessage>{infoMessage}</InfoMessage>
      <ButtonLayout>
        <Widgets.Button.Primary
          value="문의하기"
          state={'active'}
          onClick={clickContact}
        />
      </ButtonLayout>
    </ServiceLayout>
  );
};

export default Service;

const ServiceLayout = styled.div`
  position: relative;
  width: 270px;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px;
  border-radius: 20px;

  @media (max-width: 1023px) {
    width: 100%;
    height: 160px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 8px;
`;

const InfoMessage = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: 400;
`;

const ButtonLayout = styled.div`
  position: absolute;
  bottom: 24px;
`;
