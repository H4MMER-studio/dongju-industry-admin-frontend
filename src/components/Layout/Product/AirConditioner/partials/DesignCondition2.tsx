import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';

const STDContainer = styled.div<{ marginBottom?: number }>`
  width: 100%;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`}
  overflow: scroll;
`;

const STDTableWrapper = styled.table`
  width: 1064px;
  background-color: white;
  border: 1px solid #c8c8c8;
  word-break: keep-all;
  text-align: center;

  tr {
    border-bottom: 1px solid #c8c8c8;
  }

  th {
    padding: 10px 2px;
    font-weight: 600;
    font-size: 15px;
    line-height: 40px;
    border-right: 1px solid #c8c8c8;
    color: white;
    background-color: #777777;
  }
`;

const STDTableRowTitle = styled.td<{ cssStyle?: string }>`
  width: 86px;
  padding: 10px 4px;
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
  color: white;
  background-color: #949494;
  border-right: 1px solid #c8c8c8;
  ${({ cssStyle }) => cssStyle}
`;

const STDTablePrimary = styled.td`
  width: 90.75px;
  padding: 10px 2px;
  font-size: 15px;
  line-height: 25px;
  border-right: 1px solid #c8c8c8;
`;

const DesignCondition2 = () => {
  return (
    <>
      <STDContainer marginBottom={36}>
        <STDTableWrapper>
          <thead>
            <tr>
              <th colSpan={4}>항목</th>
              <th>DJAH 12</th>
              <th>DJAH 14</th>
              <th>DJAH 16</th>
              <th>DJAH 18</th>
              <th>DJAH 20</th>
              <th>DJAH 25</th>
              <th>DJAH 30</th>
              <th>DJAH 35</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <STDTableRowTitle
                cssStyle={'width: 68px; padding: 30px 16px;'}
                rowSpan={8}
              >
                FAN
              </STDTableRowTitle>
              <STDTableRowTitle rowSpan={2} colSpan={2}>
                풍량
              </STDTableRowTitle>
              <STDTableRowTitle>CMH</STDTableRowTitle>
              <STDTablePrimary>7200</STDTablePrimary>
              <STDTablePrimary>8400</STDTablePrimary>
              <STDTablePrimary>9600</STDTablePrimary>
              <STDTablePrimary>10800</STDTablePrimary>
              <STDTablePrimary>12000</STDTablePrimary>
              <STDTablePrimary>15000</STDTablePrimary>
              <STDTablePrimary>18000</STDTablePrimary>
              <STDTablePrimary>21000</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>CMM</STDTableRowTitle>
              <STDTablePrimary>120</STDTablePrimary>
              <STDTablePrimary>140</STDTablePrimary>
              <STDTablePrimary>160</STDTablePrimary>
              <STDTablePrimary>180</STDTablePrimary>
              <STDTablePrimary>200</STDTablePrimary>
              <STDTablePrimary>250</STDTablePrimary>
              <STDTablePrimary>250</STDTablePrimary>
              <STDTablePrimary>350</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle rowSpan={2} cssStyle={'width: 96px;'}>
                정압
              </STDTableRowTitle>
              <STDTableRowTitle>급기</STDTableRowTitle>
              <STDTableRowTitle>mmAq</STDTableRowTitle>
              <STDTablePrimary>100</STDTablePrimary>
              <STDTablePrimary>100</STDTablePrimary>
              <STDTablePrimary>100</STDTablePrimary>
              <STDTablePrimary>100</STDTablePrimary>
              <STDTablePrimary>110</STDTablePrimary>
              <STDTablePrimary>110</STDTablePrimary>
              <STDTablePrimary>110</STDTablePrimary>
              <STDTablePrimary>120</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>환기</STDTableRowTitle>
              <STDTableRowTitle>mmAq</STDTableRowTitle>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>60</STDTablePrimary>
              <STDTablePrimary>60</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle rowSpan={2}>규격</STDTableRowTitle>
              <STDTableRowTitle>급기</STDTableRowTitle>
              <STDTableRowTitle>#</STDTableRowTitle>
              <STDTablePrimary>2 1/2</STDTablePrimary>
              <STDTablePrimary>3</STDTablePrimary>
              <STDTablePrimary>3</STDTablePrimary>
              <STDTablePrimary>3</STDTablePrimary>
              <STDTablePrimary>3 1/2</STDTablePrimary>
              <STDTablePrimary>3 1/2</STDTablePrimary>
              <STDTablePrimary>4</STDTablePrimary>
              <STDTablePrimary>4</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>환기</STDTableRowTitle>
              <STDTableRowTitle>#</STDTableRowTitle>
              <STDTablePrimary>2 1/2</STDTablePrimary>
              <STDTablePrimary>3</STDTablePrimary>
              <STDTablePrimary>3</STDTablePrimary>
              <STDTablePrimary>3</STDTablePrimary>
              <STDTablePrimary>3</STDTablePrimary>
              <STDTablePrimary>3 1/2</STDTablePrimary>
              <STDTablePrimary>3 1/2</STDTablePrimary>
              <STDTablePrimary>4</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle rowSpan={2}>규격</STDTableRowTitle>
              <STDTableRowTitle>급기</STDTableRowTitle>
              <STDTableRowTitle>HP</STDTableRowTitle>
              <STDTablePrimary>5</STDTablePrimary>
              <STDTablePrimary>7.5</STDTablePrimary>
              <STDTablePrimary>7.5</STDTablePrimary>
              <STDTablePrimary>7.5</STDTablePrimary>
              <STDTablePrimary>10</STDTablePrimary>
              <STDTablePrimary>10</STDTablePrimary>
              <STDTablePrimary>15</STDTablePrimary>
              <STDTablePrimary>15</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>환기</STDTableRowTitle>
              <STDTableRowTitle>HP</STDTableRowTitle>
              <STDTablePrimary>3</STDTablePrimary>
              <STDTablePrimary>5</STDTablePrimary>
              <STDTablePrimary>5</STDTablePrimary>
              <STDTablePrimary>5</STDTablePrimary>
              <STDTablePrimary>7.5</STDTablePrimary>
              <STDTablePrimary>7.5</STDTablePrimary>
              <STDTablePrimary>10</STDTablePrimary>
              <STDTablePrimary>10</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle
                cssStyle={'width: 68px; padding: 30px 16px;'}
                rowSpan={5}
              >
                COIL
              </STDTableRowTitle>
              <STDTableRowTitle>COOLING</STDTableRowTitle>
              <STDTableRowTitle>6R</STDTableRowTitle>
              <STDTableRowTitle>kcal/HR</STDTableRowTitle>
              <STDTablePrimary>54000</STDTablePrimary>
              <STDTablePrimary>63000</STDTablePrimary>
              <STDTablePrimary>72000</STDTablePrimary>
              <STDTablePrimary>81000</STDTablePrimary>
              <STDTablePrimary>90000</STDTablePrimary>
              <STDTablePrimary>113000</STDTablePrimary>
              <STDTablePrimary>135000</STDTablePrimary>
              <STDTablePrimary>179000</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>HEAING (STEAM)</STDTableRowTitle>
              <STDTableRowTitle>2R</STDTableRowTitle>
              <STDTableRowTitle>kcal/HR</STDTableRowTitle>
              <STDTablePrimary>86900</STDTablePrimary>
              <STDTablePrimary>101200</STDTablePrimary>
              <STDTablePrimary>114400</STDTablePrimary>
              <STDTablePrimary>129800</STDTablePrimary>
              <STDTablePrimary>143000</STDTablePrimary>
              <STDTablePrimary>179300</STDTablePrimary>
              <STDTablePrimary>214500</STDTablePrimary>
              <STDTablePrimary>250800</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>HEAING (온수)</STDTableRowTitle>
              <STDTableRowTitle>6R</STDTableRowTitle>
              <STDTableRowTitle>kcal/HR</STDTableRowTitle>
              <STDTablePrimary>62600</STDTablePrimary>
              <STDTablePrimary>72000</STDTablePrimary>
              <STDTablePrimary>82400</STDTablePrimary>
              <STDTablePrimary>92000</STDTablePrimary>
              <STDTablePrimary>102400</STDTablePrimary>
              <STDTablePrimary>128000</STDTablePrimary>
              <STDTablePrimary>153600</STDTablePrimary>
              <STDTablePrimary>179000</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle rowSpan={2}>규격</STDTableRowTitle>
              <STDTableRowTitle colSpan={2}>PASS</STDTableRowTitle>
              <STDTablePrimary>22</STDTablePrimary>
              <STDTablePrimary>26</STDTablePrimary>
              <STDTablePrimary>30</STDTablePrimary>
              <STDTablePrimary>30</STDTablePrimary>
              <STDTablePrimary>30</STDTablePrimary>
              <STDTablePrimary>36</STDTablePrimary>
              <STDTablePrimary>36</STDTablePrimary>
              <STDTablePrimary>38</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>점면면적</STDTableRowTitle>
              <STDTableRowTitle>M²</STDTableRowTitle>
              <STDTablePrimary>0.77</STDTablePrimary>
              <STDTablePrimary>0.9</STDTablePrimary>
              <STDTablePrimary>1.03</STDTablePrimary>
              <STDTablePrimary>1.15</STDTablePrimary>
              <STDTablePrimary>1.28</STDTablePrimary>
              <STDTablePrimary>1.6</STDTablePrimary>
              <STDTablePrimary>1.92</STDTablePrimary>
              <STDTablePrimary>2.24</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle
                cssStyle={'width: 68px; padding: 30px 16px;'}
                rowSpan={3}
              >
                COIL 배관 접속
              </STDTableRowTitle>
              <STDTableRowTitle>COOLING</STDTableRowTitle>
              <STDTableRowTitle colSpan={2}>입출구</STDTableRowTitle>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>65</STDTablePrimary>
              <STDTablePrimary>65</STDTablePrimary>
              <STDTablePrimary>80</STDTablePrimary>
              <STDTablePrimary>80</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle rowSpan={2}>HEAING (STEAM)</STDTableRowTitle>
              <STDTableRowTitle colSpan={2}>입구</STDTableRowTitle>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>65</STDTablePrimary>
              <STDTablePrimary>65</STDTablePrimary>
              <STDTablePrimary>80</STDTablePrimary>
              <STDTablePrimary>80</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle colSpan={2}>입구</STDTableRowTitle>
              <STDTablePrimary>32</STDTablePrimary>
              <STDTablePrimary>32</STDTablePrimary>
              <STDTablePrimary>32</STDTablePrimary>
              <STDTablePrimary>32</STDTablePrimary>
              <STDTablePrimary>32</STDTablePrimary>
              <STDTablePrimary>40</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
            </tr>
          </tbody>
        </STDTableWrapper>
      </STDContainer>
      <STDContainer>
        <STDTableWrapper>
          <thead>
            <tr>
              <th colSpan={4}>항목</th>
              <th>DJAH 40</th>
              <th>DJAH 45</th>
              <th>DJAH 50</th>
              <th>DJAH 57</th>
              <th>DJAH 65</th>
              <th>DJAH 72</th>
              <th>DJAH 80</th>
              <th>DJAH 90</th>
              <th>DJAH 100</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <STDTableRowTitle
                cssStyle={'width: 68px; padding: 30px 16px;'}
                rowSpan={8}
              >
                FAN
              </STDTableRowTitle>
              <STDTableRowTitle rowSpan={2} colSpan={2}>
                풍량
              </STDTableRowTitle>
              <STDTableRowTitle>CMH</STDTableRowTitle>
              <STDTablePrimary>24000</STDTablePrimary>
              <STDTablePrimary>27000</STDTablePrimary>
              <STDTablePrimary>30000</STDTablePrimary>
              <STDTablePrimary>34200</STDTablePrimary>
              <STDTablePrimary>39000</STDTablePrimary>
              <STDTablePrimary>43200</STDTablePrimary>
              <STDTablePrimary>48000</STDTablePrimary>
              <STDTablePrimary>52800</STDTablePrimary>
              <STDTablePrimary>58800</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>CMM</STDTableRowTitle>
              <STDTablePrimary>400</STDTablePrimary>
              <STDTablePrimary>450</STDTablePrimary>
              <STDTablePrimary>500</STDTablePrimary>
              <STDTablePrimary>570</STDTablePrimary>
              <STDTablePrimary>650</STDTablePrimary>
              <STDTablePrimary>720</STDTablePrimary>
              <STDTablePrimary>800</STDTablePrimary>
              <STDTablePrimary>880</STDTablePrimary>
              <STDTablePrimary>980</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle cssStyle={'width: 96px;'} rowSpan={2}>
                정압
              </STDTableRowTitle>
              <STDTableRowTitle>급기</STDTableRowTitle>
              <STDTableRowTitle>mmAq</STDTableRowTitle>
              <STDTablePrimary>120</STDTablePrimary>
              <STDTablePrimary>120</STDTablePrimary>
              <STDTablePrimary>120</STDTablePrimary>
              <STDTablePrimary>120</STDTablePrimary>
              <STDTablePrimary>120</STDTablePrimary>
              <STDTablePrimary>120</STDTablePrimary>
              <STDTablePrimary>120</STDTablePrimary>
              <STDTablePrimary>120</STDTablePrimary>
              <STDTablePrimary>130</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>환기</STDTableRowTitle>
              <STDTableRowTitle>mmAq</STDTableRowTitle>
              <STDTablePrimary>60</STDTablePrimary>
              <STDTablePrimary>65</STDTablePrimary>
              <STDTablePrimary>65</STDTablePrimary>
              <STDTablePrimary>65</STDTablePrimary>
              <STDTablePrimary>70</STDTablePrimary>
              <STDTablePrimary>70</STDTablePrimary>
              <STDTablePrimary>70</STDTablePrimary>
              <STDTablePrimary>70</STDTablePrimary>
              <STDTablePrimary>70</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle rowSpan={2}>규격</STDTableRowTitle>
              <STDTableRowTitle>급기</STDTableRowTitle>
              <STDTableRowTitle>#</STDTableRowTitle>
              <STDTablePrimary>4 1/2</STDTablePrimary>
              <STDTablePrimary>5</STDTablePrimary>
              <STDTablePrimary>5</STDTablePrimary>
              <STDTablePrimary>5 1/2</STDTablePrimary>
              <STDTablePrimary>5 1/2</STDTablePrimary>
              <STDTablePrimary>6</STDTablePrimary>
              <STDTablePrimary>6</STDTablePrimary>
              <STDTablePrimary>7</STDTablePrimary>
              <STDTablePrimary>7</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>환기</STDTableRowTitle>
              <STDTableRowTitle>#</STDTableRowTitle>
              <STDTablePrimary>4</STDTablePrimary>
              <STDTablePrimary>4 1/2</STDTablePrimary>
              <STDTablePrimary>5</STDTablePrimary>
              <STDTablePrimary>5 1/2</STDTablePrimary>
              <STDTablePrimary>5 1/2</STDTablePrimary>
              <STDTablePrimary>6</STDTablePrimary>
              <STDTablePrimary>6</STDTablePrimary>
              <STDTablePrimary>6</STDTablePrimary>
              <STDTablePrimary>7</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle rowSpan={2}>규격</STDTableRowTitle>
              <STDTableRowTitle>급기</STDTableRowTitle>
              <STDTableRowTitle>HP</STDTableRowTitle>
              <STDTablePrimary>20</STDTablePrimary>
              <STDTablePrimary>25</STDTablePrimary>
              <STDTablePrimary>25</STDTablePrimary>
              <STDTablePrimary>25</STDTablePrimary>
              <STDTablePrimary>30</STDTablePrimary>
              <STDTablePrimary>30</STDTablePrimary>
              <STDTablePrimary>40</STDTablePrimary>
              <STDTablePrimary>40</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>환기</STDTableRowTitle>
              <STDTableRowTitle>HP</STDTableRowTitle>
              <STDTablePrimary>15</STDTablePrimary>
              <STDTablePrimary>15</STDTablePrimary>
              <STDTablePrimary>15</STDTablePrimary>
              <STDTablePrimary>20</STDTablePrimary>
              <STDTablePrimary>25</STDTablePrimary>
              <STDTablePrimary>25</STDTablePrimary>
              <STDTablePrimary>25</STDTablePrimary>
              <STDTablePrimary>30</STDTablePrimary>
              <STDTablePrimary>30</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle
                cssStyle={'width: 68px; padding: 30px 16px;'}
                rowSpan={5}
              >
                COIL
              </STDTableRowTitle>
              <STDTableRowTitle>COOLING</STDTableRowTitle>
              <STDTableRowTitle>6R</STDTableRowTitle>
              <STDTableRowTitle>kcal/HR</STDTableRowTitle>
              <STDTablePrimary>180000</STDTablePrimary>
              <STDTablePrimary>203000</STDTablePrimary>
              <STDTablePrimary>225000</STDTablePrimary>
              <STDTablePrimary>257000</STDTablePrimary>
              <STDTablePrimary>293000</STDTablePrimary>
              <STDTablePrimary>324000</STDTablePrimary>
              <STDTablePrimary>360000</STDTablePrimary>
              <STDTablePrimary>396000</STDTablePrimary>
              <STDTablePrimary>441000</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>HEAING (STEAM)</STDTableRowTitle>
              <STDTableRowTitle>2R</STDTableRowTitle>
              <STDTableRowTitle>kcal/HR</STDTableRowTitle>
              <STDTablePrimary>286000</STDTablePrimary>
              <STDTablePrimary>322300</STDTablePrimary>
              <STDTablePrimary>361900</STDTablePrimary>
              <STDTablePrimary>409200</STDTablePrimary>
              <STDTablePrimary>465300</STDTablePrimary>
              <STDTablePrimary>518100</STDTablePrimary>
              <STDTablePrimary>573100</STDTablePrimary>
              <STDTablePrimary>633600</STDTablePrimary>
              <STDTablePrimary>705100</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>HEAING (온수)</STDTableRowTitle>
              <STDTableRowTitle>6R</STDTableRowTitle>
              <STDTableRowTitle>kcal/HR</STDTableRowTitle>
              <STDTablePrimary>204000</STDTablePrimary>
              <STDTablePrimary>230000</STDTablePrimary>
              <STDTablePrimary>256000</STDTablePrimary>
              <STDTablePrimary>292000</STDTablePrimary>
              <STDTablePrimary>333000</STDTablePrimary>
              <STDTablePrimary>370000</STDTablePrimary>
              <STDTablePrimary>410000</STDTablePrimary>
              <STDTablePrimary>450000</STDTablePrimary>
              <STDTablePrimary>500000</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle rowSpan={2}>규격</STDTableRowTitle>
              <STDTableRowTitle colSpan={2}>PASS</STDTableRowTitle>
              <STDTablePrimary>42</STDTablePrimary>
              <STDTablePrimary>40</STDTablePrimary>
              <STDTablePrimary>22/22</STDTablePrimary>
              <STDTablePrimary>22/24</STDTablePrimary>
              <STDTablePrimary>24×2</STDTablePrimary>
              <STDTablePrimary>24×2</STDTablePrimary>
              <STDTablePrimary>28×2</STDTablePrimary>
              <STDTablePrimary>28×2</STDTablePrimary>
              <STDTablePrimary>28×2</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle>점면면적</STDTableRowTitle>
              <STDTableRowTitle>M²</STDTableRowTitle>
              <STDTablePrimary>2.56</STDTablePrimary>
              <STDTablePrimary>2.88</STDTablePrimary>
              <STDTablePrimary>3.2</STDTablePrimary>
              <STDTablePrimary>3.65</STDTablePrimary>
              <STDTablePrimary>4.17</STDTablePrimary>
              <STDTablePrimary>4.62</STDTablePrimary>
              <STDTablePrimary>5.13</STDTablePrimary>
              <STDTablePrimary>5.77</STDTablePrimary>
              <STDTablePrimary>6.41</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle
                cssStyle={'width: 68px; padding: 30px 16px;'}
                rowSpan={3}
              >
                COIL 배관 접속
              </STDTableRowTitle>
              <STDTableRowTitle>COOLING</STDTableRowTitle>
              <STDTableRowTitle colSpan={2}>입출구</STDTableRowTitle>
              <STDTablePrimary>80</STDTablePrimary>
              <STDTablePrimary>100</STDTablePrimary>
              <STDTablePrimary>65×2</STDTablePrimary>
              <STDTablePrimary>80×2</STDTablePrimary>
              <STDTablePrimary>80×2</STDTablePrimary>
              <STDTablePrimary>80×2</STDTablePrimary>
              <STDTablePrimary>80×2</STDTablePrimary>
              <STDTablePrimary>100×2</STDTablePrimary>
              <STDTablePrimary>100×2</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle rowSpan={2}>HEAING (STEAM)</STDTableRowTitle>
              <STDTableRowTitle colSpan={2}>입구</STDTableRowTitle>
              <STDTablePrimary>80</STDTablePrimary>
              <STDTablePrimary>80</STDTablePrimary>
              <STDTablePrimary>65×2</STDTablePrimary>
              <STDTablePrimary>65×2</STDTablePrimary>
              <STDTablePrimary>65×2</STDTablePrimary>
              <STDTablePrimary>80×2</STDTablePrimary>
              <STDTablePrimary>80×2</STDTablePrimary>
              <STDTablePrimary>80×2</STDTablePrimary>
              <STDTablePrimary>100×2</STDTablePrimary>
            </tr>
            <tr>
              <STDTableRowTitle colSpan={2}>입구</STDTableRowTitle>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>50</STDTablePrimary>
              <STDTablePrimary>40×2</STDTablePrimary>
              <STDTablePrimary>50×2</STDTablePrimary>
              <STDTablePrimary>50×2</STDTablePrimary>
              <STDTablePrimary>50×2</STDTablePrimary>
              <STDTablePrimary>50×2</STDTablePrimary>
              <STDTablePrimary>50×2</STDTablePrimary>
              <STDTablePrimary>65×2</STDTablePrimary>
            </tr>
          </tbody>
        </STDTableWrapper>
      </STDContainer>
    </>
  );
};

export default DesignCondition2;
