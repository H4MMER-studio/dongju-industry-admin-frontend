import styled from 'styled-components';
import { mixins } from '@/styles';

export const Container = styled.article`
  margin-right: 10%;

  h1 {
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    color: #383838;
  }

  @media (max-width: 1682px) {
    margin-right: 12%;
  }

  @media (max-width: 1023px) {
    margin-right: 0;
  }
`;

export const AddContainer = styled.div`
  ${mixins.flexSet('flex-start')}
  padding: 24px;
  margin-bottom: 12px;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 13px;
  overflow-x: auto;
`;

export const AddButton = styled.div`
  ${mixins.flexSet('flex-end')}
  margin-bottom: 48px;

  button {
    width: 90px;
    height: 48px;
    background: #2979ff;
    border-radius: 8px;
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    color: white;
  }
`;

export const ItemWrapper = styled.div<{ marginRight?: number }>`
  margin-right: ${({ marginRight }) => marginRight ?? 16}px;
`;

export const SubTitle = styled.h4`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
`;

export const InputBox = styled.input<{ width?: number }>`
  width: ${({ width }) => width ?? 100}px;
  height: 48px;
  padding: 0 16px;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  color: #383838;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 8px;
  background: #fcfcfc;
`;

type selectBoxProps = {
  width?: number;
  isValueOn?: false;
};

export const SelectBox = styled.div<selectBoxProps>`
  ${mixins.flexSet('space-between')}
  position: relative;
  width: ${({ width }) => width ?? 100}px;
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
`;
