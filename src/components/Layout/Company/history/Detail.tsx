import React from 'react';
import styled from 'styled-components';

const STDDetailLayout = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #c8c8c8;
`;

const YearRange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  height: 40px;
  background-color: #2979ff;
  color: #fff;
  border-radius: 20px;
  font-size: 20px;
  margin-bottom: 24px;
`;

const YearHistoryLayout = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 20px;
  padding: 16px 20px;

  display: flex;
`;

const LeftSection = styled.div`
  .year {
    height: 36px;
    font-weight: bold;
    font-size: 30px;
    color: #448aff;
    display: flex;
    align-items: center;

    @media (max-width: 1023px) {
      font-size: 24px;
    }
  }
`;

const RightSection = styled.div`
  margin-left: 32px;
`;

const MonthHistoryLayout = styled.div`
  .month {
    height: 36px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 19px;
    color: #383838;
    margin-bottom: 4px;

    @media (max-width: 1023px) {
      font-size: 17px;
    }
  }
`;

const DetailContents = styled.div`
  font-size: 19px;
  color: #555555;

  @media (max-width: 1023px) {
    font-size: 17px;
  }
`;

const Detail: React.FC = () => {
  return (
    <STDDetailLayout>
      <YearRange>2010~2019</YearRange>
      <YearHistoryLayout>
        <LeftSection>
          <div className="year">2015</div>
        </LeftSection>
        <RightSection>
          <MonthHistoryLayout>
            <div className="month">1월</div>
            <DetailContents>바이오 크린롱 BSL-3용</DetailContents>
            <DetailContents>완전밀폐형 댐퍼(특허등록)(버블댐퍼)</DetailContents>
          </MonthHistoryLayout>
        </RightSection>
      </YearHistoryLayout>
    </STDDetailLayout>
  );
};

export default Detail;
