import React, { useState } from 'react';
import * as S from './index.style';
import { IconDownArrowSmall, IconSearch, IconDownArrowGray } from '@svg';

interface IProps {
  searchText: string;
  selectedOrder: string;
  modalOnAt: string;
  selectedSearchTitle: string;
  orderModalOn: boolean;
  onClickSetModalOnAt(name: string): void;
  orderModalHandler(onOff: boolean): void;
  onClickSetSelectedOrder(type: string): void;
  onChangeSearchText(text: string): void;
  onClickSetSelectedSearchTitle(type: string): void;
}

const PerformanceMain: React.FC<IProps> = ({
  searchText,
  selectedOrder,
  modalOnAt,
  selectedSearchTitle,
  orderModalOn,
  onClickSetModalOnAt,
  orderModalHandler,
  onClickSetSelectedOrder,
  onChangeSearchText,
  onClickSetSelectedSearchTitle,
}) => {
  const [selectedRow, setSelectedRow] = useState<string | number | null>(null);

  return (
    <S.Container>
      <S.FilterWrapper>
        <S.SearchBox>
          <S.DeliveryBox
            onClick={(e) => {
              e.stopPropagation();
              onClickSetModalOnAt(
                modalOnAt === 'searchTitle' ? '' : 'searchTitle'
              );
            }}
          >
            {selectedSearchTitle}
            <div>
              <IconDownArrowSmall />
              <p />
            </div>
          </S.DeliveryBox>
          <S.SearchWrapper>
            <input
              onClick={(e) => {
                e.stopPropagation();
                onClickSetModalOnAt('searchText');
              }}
              value={searchText}
              onChange={(e) => onChangeSearchText(e.target.value)}
              placeholder="검색어를 입력하세요."
            />
            <IconSearch />
          </S.SearchWrapper>
          {modalOnAt === 'searchTitle' && (
            <S.DeliverySelectBox onClick={(e) => e.stopPropagation()}>
              <S.DeliverySelectText
                isSelected={selectedSearchTitle === '납품처'}
                onClick={() => onClickSetSelectedSearchTitle('납품처')}
              >
                납품처
              </S.DeliverySelectText>
              <S.DeliverySelectText
                isSelected={selectedSearchTitle === '품명'}
                onClick={() => onClickSetSelectedSearchTitle('품명')}
              >
                품명
              </S.DeliverySelectText>
            </S.DeliverySelectBox>
          )}
          {modalOnAt === 'searchText' && (
            <S.DeliverySearchTextBox onClick={(e) => e.stopPropagation()}>
              {['예시1', '예시2', '예시3', '예시4'].map((text) => (
                <S.DeliverySearchText
                  key={text}
                  onClick={() => {
                    onChangeSearchText(text);
                    onClickSetModalOnAt('');
                  }}
                >
                  {text}
                </S.DeliverySearchText>
              ))}
            </S.DeliverySearchTextBox>
          )}
        </S.SearchBox>
        <S.OrderButton
          onClick={(e) => {
            e.stopPropagation();
            orderModalHandler(orderModalOn ? false : true);
          }}
        >
          {selectedOrder === 'new' ? '최신순' : '오래된순'}
          <IconDownArrowGray />
          {orderModalOn && (
            <S.SelectOrderBox onClick={(e) => e.stopPropagation()}>
              <S.DeliverySelectText
                isSelected={selectedOrder === 'new'}
                onClick={(e) => {
                  onClickSetSelectedOrder('new');
                  orderModalHandler(false);
                }}
              >
                최신순
              </S.DeliverySelectText>
              <S.DeliverySelectText
                isSelected={selectedOrder === 'old'}
                onClick={(e) => {
                  onClickSetSelectedOrder('old');
                  orderModalHandler(false);
                }}
              >
                오래된순
              </S.DeliverySelectText>
            </S.SelectOrderBox>
          )}
        </S.OrderButton>
      </S.FilterWrapper>
      <S.TableContainer>
        <S.TitleWrapper>
          <S.LongTitle>납품처</S.LongTitle>
          <S.LongTitle>품명 및 규격</S.LongTitle>
          <S.ShortTitle>수량</S.ShortTitle>
          <S.ShortTitle>날짜</S.ShortTitle>
          <S.LongTitle>비고</S.LongTitle>
        </S.TitleWrapper>
        <div>
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <S.ContentWrapper
                key={index}
                onMouseEnter={() => setSelectedRow(index)}
              >
                <S.LongContent>(주)세진에스.이</S.LongContent>
                <S.LongContent>COOK FAN</S.LongContent>
                <S.ShortContent>3</S.ShortContent>
                <S.ShortContent>2012.2</S.ShortContent>
                <S.LongContent>연세대학교</S.LongContent>
                {selectedRow === index && (
                  <S.ModifyButtonWrapper>
                    <S.ModifyButton>삭제</S.ModifyButton>
                    <S.ModifyButton color="blue">수정</S.ModifyButton>
                  </S.ModifyButtonWrapper>
                )}
              </S.ContentWrapper>
            ))}
        </div>
      </S.TableContainer>
    </S.Container>
  );
};

export default PerformanceMain;
