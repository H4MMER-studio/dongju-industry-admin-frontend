import React from 'react';
import * as S from './index.style';
import { IconDownArrowGray } from '@svg';
import { AddInfo } from '../index';

interface IProps {
  addInfo: AddInfo;
  addInfoHandler(type: keyof AddInfo, value: string | number): void;
  onClickAddButton(): void;
}

const AddPerformance: React.FC<IProps> = ({
  addInfo,
  addInfoHandler,
  onClickAddButton,
}) => {
  const {
    delivery_amount,
    delivery_month,
    delivery_product,
    delivery_reference,
    delivery_supplier,
    delivery_year,
  } = addInfo;
  const currentYear = new Date().getFullYear();
  const latestYear = Array(40)
    .fill(0)
    .map((_, index) => currentYear - index);
  const monthList = Array(12)
    .fill(0)
    .map((_, index) => index + 1);

  return (
    <S.Container>
      <h1>납품실적 추가</h1>
      <S.AddContainer>
        <S.ItemWrapper>
          <S.SubTitle>납품처</S.SubTitle>
          <S.InputBox
            width={333}
            placeholder="납품처"
            onChange={(e) =>
              addInfoHandler('delivery_supplier', e.target.value)
            }
            value={delivery_supplier}
          />
        </S.ItemWrapper>
        <S.ItemWrapper>
          <S.SubTitle>품명 및 규격</S.SubTitle>
          <S.InputBox
            width={333}
            placeholder="품명 및 규격"
            onChange={(e) => addInfoHandler('delivery_product', e.target.value)}
            value={delivery_product}
          />
        </S.ItemWrapper>
        <S.ItemWrapper>
          <S.SubTitle>수량</S.SubTitle>
          <S.InputBox
            width={100}
            type="number"
            placeholder="수량"
            value={delivery_amount}
            onChange={(e) => addInfoHandler('delivery_amount', e.target.value)}
          />
        </S.ItemWrapper>
        <S.ItemWrapper>
          <S.SubTitle>날짜(연)</S.SubTitle>
          <S.SelectBox width={100}>
            <select
              className="inputStyle"
              placeholder="날짜"
              onChange={(e) => addInfoHandler('delivery_year', e.target.value)}
              value={delivery_year}
            >
              {latestYear.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
            <IconDownArrowGray className="svgStyle" />
          </S.SelectBox>
        </S.ItemWrapper>
        <S.ItemWrapper>
          <S.SubTitle>날짜(월)</S.SubTitle>
          <S.SelectBox width={100}>
            <select
              className="inputStyle"
              placeholder="날짜"
              onChange={(e) => addInfoHandler('delivery_month', e.target.value)}
              value={delivery_month}
            >
              {monthList.map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>
            <IconDownArrowGray className="svgStyle" />
          </S.SelectBox>
        </S.ItemWrapper>
        <S.ItemWrapper>
          <S.SubTitle>비고</S.SubTitle>
          <S.InputBox
            width={146}
            placeholder="비고"
            value={delivery_reference}
            onChange={(e) =>
              addInfoHandler('delivery_reference', e.target.value)
            }
          />
        </S.ItemWrapper>
      </S.AddContainer>
      <S.AddButton>
        <button onClick={onClickAddButton}>추가</button>
      </S.AddButton>
    </S.Container>
  );
};

export default AddPerformance;
