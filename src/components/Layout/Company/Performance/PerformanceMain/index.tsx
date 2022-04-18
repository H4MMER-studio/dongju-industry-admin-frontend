import React, { useState } from 'react';
import * as S from './index.style';
import { useGetStore } from '@/hooks';
import { useDispatch } from 'react-redux';
import { performanceActions } from '@/store';
import { Images } from 'public/image';
import { IconDownArrowSmall, IconSearch, IconDownArrowGray } from '@svg';

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
}) => {
  const [selectedRow, setSelectedRow] = useState<string | number | null>(null);
  const { selectedInfo, deliveryList } = useGetStore.performance();
  const dispatch = useDispatch();

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
          {deliveryList?.list?.map(
            ({
              _id,
              delivery_amount,
              delivery_month,
              delivery_year,
              delivery_product,
              delivery_supplier,
              delivery_reference,
            }) => (
              <S.ContentWrapper
                key={_id}
                onMouseEnter={() => setSelectedRow(_id)}
              >
                {selectedInfo?.id === _id ? (
                  <>
                    <S.InputBox
                      containerStyle={'margin-left: 12px;'}
                      defaultValue={selectedInfo.shipName}
                      width={1}
                    />
                    <S.InputBox defaultValue={selectedInfo.name} />
                    <S.InputBox width={0.2} defaultValue={selectedInfo.count} />
                    <S.SelectBox width={0.2}>
                      {selectedInfo.year}
                      <IconDownArrowGray />
                    </S.SelectBox>
                    <S.SelectBox width={0.2}>
                      {selectedInfo.month}
                      <IconDownArrowGray />
                    </S.SelectBox>
                    <S.InputBox width={0.74} defaultValue={selectedInfo.etc} />
                  </>
                ) : (
                  <>
                    <S.LongContent>{delivery_supplier}</S.LongContent>
                    <S.LongContent>{delivery_product}</S.LongContent>
                    <S.ShortContent>{delivery_amount}</S.ShortContent>
                    <S.ShortContent>
                      {delivery_year}.{delivery_month}
                    </S.ShortContent>
                    <S.LongContent>{delivery_reference}</S.LongContent>
                  </>
                )}
                {selectedInfo?.id === _id ? (
                  <S.ModifyButtonWrapper>
                    <S.ModifyButton
                      onClick={() => {
                        setSelectedRow(null);
                        dispatch(performanceActions.setSelectedInfo(null));
                      }}
                    >
                      취소
                    </S.ModifyButton>
                    <S.ModifyButton
                      color="blue"
                      onClick={() => {
                        alert('저장 완료');
                        dispatch(performanceActions.setSelectedInfo(null));
                      }}
                    >
                      저장
                    </S.ModifyButton>
                  </S.ModifyButtonWrapper>
                ) : (
                  selectedRow === _id && (
                    <S.ModifyButtonWrapper>
                      <S.ModifyButton>삭제</S.ModifyButton>
                      <S.ModifyButton
                        color="blue"
                        onClick={() =>
                          dispatch(
                            performanceActions.setSelectedInfo({
                              id: _id,
                              shipName: delivery_supplier,
                              name: delivery_product,
                              count: delivery_amount,
                              year: delivery_year,
                              month: delivery_month,
                              etc: delivery_reference,
                            })
                          )
                        }
                      >
                        수정
                      </S.ModifyButton>
                    </S.ModifyButtonWrapper>
                  )
                )}
              </S.ContentWrapper>
            )
          )}
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
