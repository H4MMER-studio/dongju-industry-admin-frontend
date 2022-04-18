import styled from 'styled-components';
import { mixins } from '@/styles';

export const Container = styled.article`
  width: 100%;
`;

export const FilterWrapper = styled.div`
  ${mixins.flexSet('space-between')}
  margin-bottom: 12px;
  margin-right: 10%;

  @media (max-width: 1682px) {
    margin-right: 12%;
  }

  @media (max-width: 1024px) {
    ${mixins.flexSet('center', 'flex-end', 'column')}
    margin-right: 0;
  }
`;

export const SearchBox = styled.div`
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

export const DeliveryBox = styled.div`
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

export const SearchWrapper = styled.div`
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

export const OrderButton = styled.div`
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

export const TableContainer = styled.div`
  margin-right: 10%;
  border-top: 1px solid #777777;
  border-bottom: 1px solid #777777;
  background: white;
  margin-bottom: 24px;

  @media (max-width: 1682px) {
    margin-right: 12%;
  }

  @media (max-width: 1023px) {
    margin-right: 0;
  }
`;

export const TitleWrapper = styled.div`
  ${mixins.flexSet('unset')}
  height: 44px;
  border-bottom: 1px solid #c8c8c8;
`;

export const LongTitle = styled.div`
  flex: 1;
  padding: 12px 12px 12px 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

export const ShortTitle = styled.div`
  flex: 0.45;
  max-width: 120px;
  padding: 12px 12px 12px 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

export const ContentWrapper = styled.div`
  ${mixins.flexSet('unset')}
  position: relative;
  height: 49px;
`;

export const LongContent = styled.div`
  flex: 1;
  padding: 12px 12px 12px 16px;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
`;

export const ShortContent = styled.div`
  flex: 0.45;
  max-width: 120px;
  padding: 12px 12px 12px 16px;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
`;

export const DeliverySelectBox = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  z-index: 100;
  min-width: 100px;
  padding: 18px 22px;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
`;

export const DeliverySelectText = styled.p<{ isSelected?: boolean }>`
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

export const DeliverySearchTextBox = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 18px 22px;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
`;

export const DeliverySearchText = styled.p`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SelectOrderBox = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  padding: 18px 22px;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
`;

type inputBoxProps = {
  width?: number;
  containerStyle?: string;
};

export const InputBox = styled.input<inputBoxProps>`
  flex: ${({ width }) => width ?? 1};
  min-width: 40px;
  height: 40px;
  padding: 0 16px;
  margin-right: 12px;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  color: #383838;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 8px;
  background: #fcfcfc;
  ${({ containerStyle }) => containerStyle}
`;

type selectBoxProps = {
  width?: number;
  isValueOn?: false;
  containerStyle?: string;
};

export const SelectBox = styled.div<selectBoxProps>`
  ${mixins.flexSet('space-between')}
  flex: ${({ width }) => width ?? 1};
  height: 40px;
  padding: 0 16px;
  margin-right: 12px;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  color: ${({ isValueOn }) => (!isValueOn ? '#777777' : '#383838')};
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 8px;
  background: #fcfcfc;
  cursor: pointer;

  svg {
    width: 12px;
  }

  ${({ containerStyle }) => containerStyle}
`;

export const ModifyButtonWrapper = styled.div`
  ${mixins.flexSet()}
  position: absolute;
  right: -100px;
`;

export const ModifyButton = styled.button<{ color?: string }>`
  margin-right: 8px;
  padding: 8px;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: ${({ color }) => color ?? 'red'};

  &:last-child {
    margin-right: 0;
  }
`;

export const PageNationLayout = styled.div`
  ${mixins.flexSet()}
  padding-bottom: 36px;
`;

export const ArrowIcon = styled.img`
  cursor: pointer;
`;

export const PageNumber = styled.div<{ isSelected: boolean }>`
  ${mixins.flexSet()}
  width: 32px;
  height: 32px;
  background-color: ${(props) => (props.isSelected ? '#2979ff' : 'none')};
  border-radius: 8px;
  color: ${(props) => (props.isSelected ? '#fff' : '#383838')};
  margin-right: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isSelected ? 'none' : '#DFDFDF')};
  }
`;
