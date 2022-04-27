import styled from 'styled-components';
import { mixins } from '@/styles';

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
  position: relative;
  height: 40px;
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

  .inputStyle {
    ${mixins.flexSet('flex-start')}
    width: 100%;
    height: 48px;
    padding: 0 16px;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    border: none;
    color: #383838;
  }

  .svgStyle {
    position: absolute;
    right: 16px;
    width: 12px;
    pointer-events: none;
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
