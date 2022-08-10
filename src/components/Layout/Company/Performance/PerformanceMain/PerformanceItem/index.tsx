import React, { useState } from 'react';
import * as S from './index.style';
import { IDeliveryList, IPostDelivery, ISelectedInfo } from '@/interfaces';
import { IconDownArrowGray } from '@svg';
import { AddInfo } from '../../index';

interface IProps {
  selectedRow: string | number | null;
  deliveryInfo: IDeliveryList;
  selectedInfo: ISelectedInfo | null;
  onChangeSearchText(text: string): void;
  onClickPageHandler(page: number): void;
  onClickDeleteDelivery(id: string | number): void;
  onClickPatchDelivery(id: string | number, info: IPostDelivery): void;
  selectedRowHandler(id: string | number | null): void;
  onClickSetSelectedInfo(info: ISelectedInfo | null): void;
}

const PerformanceItem: React.FC<IProps> = ({
  selectedRow,
  deliveryInfo,
  selectedInfo,
  onChangeSearchText,
  onClickPageHandler,
  onClickDeleteDelivery,
  onClickPatchDelivery,
  selectedRowHandler,
  onClickSetSelectedInfo,
}) => {
  const {
    _id,
    delivery_product,
    delivery_amount,
    delivery_year,
    delivery_month,
    delivery_supplier,
    delivery_reference,
  } = deliveryInfo;

  const [patchInfo, setPatchInfo] = useState<AddInfo>({
    delivery_supplier: '',
    delivery_product: '',
    delivery_amount: '',
    delivery_year: '2022',
    delivery_month: '4',
    delivery_reference: '',
  });
  const currentYear = new Date().getFullYear();
  const latestYear = Array(40)
    .fill(0)
    .map((_, index) => currentYear - index);
  const monthList = Array(12)
    .fill(0)
    .map((_, index) => index + 1);

  const patchInfoHandler = (type: keyof AddInfo, value: string | number) => {
    setPatchInfo((data) => {
      return { ...data, [type]: value };
    });
  };

  return (
    <S.ContentWrapper key={_id} onMouseEnter={() => selectedRowHandler(_id)}>
      {selectedInfo?.id === _id ? (
        <>
          <S.InputBox
            containerStyle={'margin-left: 12px;'}
            value={patchInfo.delivery_supplier}
            onChange={(e) =>
              patchInfoHandler('delivery_supplier', e.target.value)
            }
            width={1}
          />
          <S.InputBox
            value={patchInfo.delivery_product}
            onChange={(e) =>
              patchInfoHandler('delivery_product', e.target.value)
            }
          />
          <S.InputBox
            width={0.2}
            value={patchInfo.delivery_amount}
            onChange={(e) =>
              patchInfoHandler('delivery_amount', e.target.value)
            }
          />
          <S.SelectBox width={0.3}>
            <select
              className='inputStyle'
              placeholder='날짜'
              onChange={(e) =>
                patchInfoHandler('delivery_year', e.target.value)
              }
              value={patchInfo.delivery_year}
            >
              {latestYear.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
            <IconDownArrowGray className='svgStyle' />
          </S.SelectBox>
          <S.SelectBox width={0.3}>
            <select
              className='inputStyle'
              placeholder='날짜'
              onChange={(e) =>
                patchInfoHandler('delivery_month', e.target.value)
              }
              value={patchInfo.delivery_month}
            >
              {monthList.map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>
            <IconDownArrowGray className='svgStyle' />
          </S.SelectBox>
          <S.InputBox
            width={0.74}
            value={patchInfo.delivery_reference}
            onChange={(e) =>
              patchInfoHandler('delivery_reference', e.target.value)
            }
          />
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
              selectedRowHandler(null);
              onClickSetSelectedInfo(null);
            }}
          >
            취소
          </S.ModifyButton>
          <S.ModifyButton
            color='blue'
            onClick={() => {
              onClickPatchDelivery(_id, patchInfo);
              onClickSetSelectedInfo(null);
              onChangeSearchText('');
              onClickPageHandler(1);
            }}
          >
            저장
          </S.ModifyButton>
        </S.ModifyButtonWrapper>
      ) : (
        selectedRow === _id && (
          <S.ModifyButtonWrapper>
            <S.ModifyButton
              onClick={() => {
                if (window.confirm('정말로 삭제하시겠습니까?')) {
                  onClickDeleteDelivery(_id);
                } else {
                  alert('삭제 취소');
                }
              }}
            >
              삭제
            </S.ModifyButton>
            <S.ModifyButton
              color='blue'
              onClick={() => {
                onClickSetSelectedInfo({
                  id: _id,
                  shipName: delivery_supplier,
                  name: delivery_product,
                  count: delivery_amount,
                  year: delivery_year,
                  month: delivery_month,
                  etc: delivery_reference,
                });
                setPatchInfo({
                  delivery_supplier,
                  delivery_product,
                  delivery_amount,
                  delivery_year,
                  delivery_month,
                  delivery_reference,
                });
              }}
            >
              수정
            </S.ModifyButton>
          </S.ModifyButtonWrapper>
        )
      )}
    </S.ContentWrapper>
  );
};

export default PerformanceItem;
