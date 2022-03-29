import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';
import { IconDownArrowSmall, IconSearch, IconDownArrowGray } from '@svg';

const STDContainer = styled.article`
  width: 100%;
`;

const STDFilterWrapper = styled.div`
  ${mixins.flexSet('space-between')}
  margin-bottom: 12px;

  @media (max-width: 1024px) {
    ${mixins.flexSet('center', 'flex-end', 'column')}
  }
`;

const STDSearchBox = styled.div`
  ${mixins.flexSet('flex-start')}
  position: relative;
  height: 48px;
  background: white;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 12px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const STDDeliveryBox = styled.div`
  ${mixins.flexSet('space-between')}
  width: 101px;
  padding: 14px 0 14px 16px;
  cursor: pointer;
  font-size: 17px;
  line-height: 20px;
  color: #949494;

  div {
    ${mixins.flexSet()}

    svg {
      width: 9.33px;
      height: 5.33px;
      margin-right: 15.33px;
    }

    > p {
      width: 1px;
      height: 25px;
      background-color: #c8c8c8;
    }
  }
`;

const STDSearchWrapper = styled.div`
  width: 238px;
  padding: 14px;

  > input {
    width: 185px;
    border: none;
    font-size: 17px;
    line-height: 20px;
    color: #383838;

    &::placeholder {
      color: #c8c8c8;
    }
  }

  svg {
    position: absolute;
    right: 16.74px;
    top: 15px;
    width: 15.59px;
    height: 15.59px;
  }
`;

const STDOrderButton = styled.div`
  ${mixins.flexSet('space-between')}
  position: relative;
  width: 120px;
  height: 48px;
  padding: 0 20.67px 0 14px;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  background: white;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #777777;
  cursor: pointer;

  svg {
    width: 13.33px;
    height: 6.67px;
  }

  @media (max-width: 1024px) {
    width: auto;
    padding: 0;
    background: none;
    border: none;

    svg {
      width: 13.33px;
      height: 6.67px;
      margin-left: 11.33px;
    }
  }
`;

const STDTableContainer = styled.div`
  border-top: 1px solid #777777;
  border-bottom: 1px solid #777777;
  background: white;
`;

const STDTitleWrapper = styled.div`
  ${mixins.flexSet('unset')}
  height: 44px;
  border-bottom: 1px solid #c8c8c8;
`;

const STDLongTitle = styled.div`
  flex: 1;
  padding: 12px 12px 12px 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

const STDShortTitle = styled.div`
  flex: 0.45;
  max-width: 120px;
  padding: 12px 12px 12px 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

const STDContentWrapper = styled.div`
  ${mixins.flexSet('unset')}
  height: 49px;
`;

const STDLongContent = styled.div`
  flex: 1;
  padding: 12px 12px 12px 16px;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
`;

const STDShortContent = styled.div`
  flex: 0.45;
  max-width: 120px;
  padding: 12px 12px 12px 16px;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
`;

const STDDeliverySelectBox = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  min-width: 100px;
  padding: 18px 22px;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
`;

const STDDeliverySelectText = styled.p<{ isSelected?: boolean }>`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: ${({ isSelected }) => (isSelected ? '#383838' : '#949494')};
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

const STDDeliverySearchTextBox = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  padding: 18px 22px;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
`;

const STDDeliverySearchText = styled.p`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

const STDSelectOrderBox = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  padding: 18px 22px;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
`;

const Performance: React.FC = () => {
  const [selectedSearchTitle, setSelectedSearchTitle] = useState('납품처');
  const [modalOnAt, setModalOnAt] = useState('');
  const [searchText, setSearchText] = useState('');
  const [orderModalOn, setOrderModalOn] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState('new');

  useEffect(() => {
    document.onclick = onClickCloseModal;

    return () => {
      document.onmousedown = null;
    };
  }, []);

  const onClickCloseModal = () => {
    setModalOnAt('');
    setOrderModalOn(false);
  };

  return (
    <STDContainer>
      <STDFilterWrapper>
        <STDSearchBox>
          <STDDeliveryBox
            onClick={(e) => {
              e.stopPropagation();
              setModalOnAt(modalOnAt === 'searchTitle' ? '' : 'searchTitle');
            }}
          >
            {selectedSearchTitle}
            <div>
              <IconDownArrowSmall />
              <p />
            </div>
          </STDDeliveryBox>
          <STDSearchWrapper>
            <input
              onClick={(e) => {
                e.stopPropagation();
                setModalOnAt('searchText');
              }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="검색어를 입력하세요."
            />
            <IconSearch />
          </STDSearchWrapper>
          {modalOnAt === 'searchTitle' && (
            <STDDeliverySelectBox onClick={(e) => e.stopPropagation()}>
              <STDDeliverySelectText
                isSelected={selectedSearchTitle === '납품처'}
                onClick={() => setSelectedSearchTitle('납품처')}
              >
                납품처
              </STDDeliverySelectText>
              <STDDeliverySelectText
                isSelected={selectedSearchTitle === '품명'}
                onClick={() => setSelectedSearchTitle('품명')}
              >
                품명
              </STDDeliverySelectText>
            </STDDeliverySelectBox>
          )}
          {modalOnAt === 'searchText' && (
            <STDDeliverySearchTextBox onClick={(e) => e.stopPropagation()}>
              {['예시1', '예시2', '예시3', '예시4'].map((text) => (
                <STDDeliverySearchText
                  key={text}
                  onClick={() => {
                    setSearchText(text);
                    setModalOnAt('');
                  }}
                >
                  {text}
                </STDDeliverySearchText>
              ))}
            </STDDeliverySearchTextBox>
          )}
        </STDSearchBox>
        <STDOrderButton
          onClick={(e) => {
            e.stopPropagation();
            setOrderModalOn(orderModalOn ? false : true);
          }}
        >
          {selectedOrder === 'new' ? '최신순' : '오래된순'}
          <IconDownArrowGray />
          {orderModalOn && (
            <STDSelectOrderBox onClick={(e) => e.stopPropagation()}>
              <STDDeliverySelectText
                isSelected={selectedOrder === 'new'}
                onClick={(e) => {
                  setSelectedOrder('new');
                  setOrderModalOn(false);
                }}
              >
                최신순
              </STDDeliverySelectText>
              <STDDeliverySelectText
                isSelected={selectedOrder === 'old'}
                onClick={(e) => {
                  setSelectedOrder('old');
                  setOrderModalOn(false);
                }}
              >
                오래된순
              </STDDeliverySelectText>
            </STDSelectOrderBox>
          )}
        </STDOrderButton>
      </STDFilterWrapper>
      <STDTableContainer>
        <STDTitleWrapper>
          <STDLongTitle>납품처</STDLongTitle>
          <STDLongTitle>품명 및 규격</STDLongTitle>
          <STDShortTitle>수량</STDShortTitle>
          <STDShortTitle>날짜</STDShortTitle>
          <STDLongTitle>비고</STDLongTitle>
        </STDTitleWrapper>
        <div>
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <STDContentWrapper key={index}>
                <STDLongContent>(주)세진에스.이</STDLongContent>
                <STDLongContent>COOK FAN</STDLongContent>
                <STDShortContent>3</STDShortContent>
                <STDShortContent>2012.2</STDShortContent>
                <STDLongContent>연세대학교</STDLongContent>
              </STDContentWrapper>
            ))}
        </div>
      </STDTableContainer>
    </STDContainer>
  );
};

export default Performance;
