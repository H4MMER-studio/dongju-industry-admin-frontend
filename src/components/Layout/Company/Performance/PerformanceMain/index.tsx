import React, { useState } from 'react';
import * as S from './index.style';
import { useGetStore } from '@/hooks';
import { useDispatch } from 'react-redux';
import { performanceActions } from '@/store';
import { Images } from 'public/image';
import { IconDownArrowSmall, IconSearch, IconDownArrowGray } from '@svg';
import { IPostDelivery, ISelectedInfo } from '@/interfaces';
import PerformanceItem from './PerformanceItem';

interface IProps {
  page: number;
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
  onClickPageHandler(page: number): void;
  onClickDeleteDelivery(id: string | number): void;
  onClickPatchDelivery(id: string | number, info: IPostDelivery): void;
}

const PerformanceMain: React.FC<IProps> = ({
  page,
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
  onClickPageHandler,
  onClickDeleteDelivery,
  onClickPatchDelivery,
}) => {
  const [selectedRow, setSelectedRow] = useState<string | number | null>(null);
  const { selectedInfo, deliveryList } = useGetStore.performance();
  const dispatch = useDispatch();

  const onClickSetSelectedInfo = (info: ISelectedInfo | null) => {
    dispatch(performanceActions.setSelectedInfo(info));
  };

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
          {deliveryList?.list?.map((info) => (
            <PerformanceItem
              key={info._id}
              deliveryInfo={info}
              selectedInfo={selectedInfo}
              selectedRow={selectedRow}
              onClickDeleteDelivery={onClickDeleteDelivery}
              onClickPatchDelivery={onClickPatchDelivery}
              onClickSetSelectedInfo={onClickSetSelectedInfo}
              selectedRowHandler={(id: string | number | null) =>
                setSelectedRow(id)
              }
            />
          ))}
        </div>
      </S.TableContainer>
      <S.PageNationLayout>
        <S.ArrowIcon
          onClick={() => {
            if (page !== 1) {
              onClickPageHandler(page - 1);
            }
          }}
          src={Images.PagenationLeft}
          style={{ marginRight: 20 }}
        />
        {Array(Math.round(deliveryList.size / 10))
          .fill(0)
          .map((_, index) => (
            <S.PageNumber
              isSelected={page === index + 1}
              onClick={() => onClickPageHandler(index + 1)}
            >
              {index + 1}
            </S.PageNumber>
          ))}

        <S.ArrowIcon
          onClick={() => {
            if (page !== Math.round(deliveryList.size / 10)) {
              onClickPageHandler(page + 1);
            }
          }}
          src={Images.PagenationRight}
          style={{ marginLeft: 8 }}
        />
      </S.PageNationLayout>
    </S.Container>
  );
};

export default PerformanceMain;
