import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Title = styled.div`
  font-size: 15px;
  color: #777777;
`;

const DatePickerLayout = styled.div`
  margin-top: 24px;
`;

const StartDateLayout = styled.div`
  display: flex;
  align-items: center;
`;

const Year = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 48px;
  background-color: #fcfcfc;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 17px;
  color: #777777;
  cursor: pointer;
`;

const Month = styled.div`
  display: flex;
  align-items: center;
  width: 81.75px;
  height: 48px;
  background-color: #fcfcfc;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 17px;
  color: #777777;
  cursor: pointer;
  margin-left: 16px;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  width: 81.75px;
  height: 48px;
  background-color: #fcfcfc;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 17px;
  color: #777777;
  cursor: pointer;
  margin-left: 16px;
`;

const MenuLayout = styled.div`
  background-color: #f5f5f5;
`;

const EndDateLayout = styled.div`
  display: flex;
  align-items: center;
`;

const FlexLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DatePicker: React.VFC = () => {
  const [selectedStartYear, setSelectedStartYear] = useState<string | null>(
    null
  );
  const [selectedStartMonth, setSelectedStartMonth] = useState<string | null>(
    null
  );
  const [selectedStartDate, setSelectedStartDate] = useState<string | null>(
    null
  );

  const [selectedEndYear, setSelectedEndYear] = useState<string | null>(null);
  const [selectedEndMonth, setSelectedEndMonth] = useState<string | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<string | null>(null);

  const [startYearanchorEl, setStartYearAnchorEl] =
    useState<null | HTMLElement>(null);
  const [startMonthAnchorEl, setStartMonthAnchorEl] =
    useState<null | HTMLElement>(null);
  const [startDateAnchorEl, setStartDateAnchorEl] =
    useState<null | HTMLElement>(null);

  const [endYearAnchorEl, setEndYearAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [endMonthAnchorEl, setEndMonthAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [endDateAnchorEl, setEndDateAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const startYearOpen = Boolean(startYearanchorEl);
  const startMonthOpen = Boolean(startMonthAnchorEl);
  const startDateOpen = Boolean(startDateAnchorEl);

  const endYearOpen = Boolean(endYearAnchorEl);
  const endMonthOpen = Boolean(endMonthAnchorEl);
  const endDateOpen = Boolean(endDateAnchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    type:
      | 'start-year'
      | 'start-month'
      | 'start-date'
      | 'end-year'
      | 'end-month'
      | 'end-date'
  ) => {
    switch (type) {
      case 'start-year':
        setStartYearAnchorEl(event.currentTarget);
        break;

      case 'start-month':
        setStartMonthAnchorEl(event.currentTarget);
        break;

      case 'start-date':
        setStartDateAnchorEl(event.currentTarget);
        break;

      case 'end-year':
        setEndYearAnchorEl(event.currentTarget);
        break;

      case 'end-month':
        setEndMonthAnchorEl(event.currentTarget);
        break;

      case 'end-date':
        setEndDateAnchorEl(event.currentTarget);
        break;

      default:
        break;
    }
  };
  const handleClose = () => {
    setStartYearAnchorEl(null);
    setStartMonthAnchorEl(null);
    setStartDateAnchorEl(null);
    setEndYearAnchorEl(null);
    setEndMonthAnchorEl(null);
    setEndDateAnchorEl(null);
  };

  const setStartYear = () => {
    const year = new Date().getFullYear() + 1;
    let result: string[] = [];

    Array.from({ length: year }).forEach((_, i) => {
      if (i >= 1980) {
        result.push(String(i));
      }
    });

    return result;
  };

  const setEndYear = () => {
    const todayYears = new Date().getFullYear();
    let result: string[] = [];

    if (selectedStartYear !== '연') {
      for (var i = Number(selectedStartYear); i < todayYears; i++) {
        result.push(String(i));
      }
    }

    return result;
  };

  const setStartDate = () => {
    let result: string[] = [];
    if (selectedStartYear && selectedStartMonth) {
      const date = new Date(
        Number(selectedStartYear),
        Number(selectedStartMonth),
        0
      ).getDate();

      Array.from({ length: date }).forEach((_, i) => {
        let iDate =
          String(i + 1).length === 2 ? String(i + 1) : `${0}${String(i + 1)}`;
        result.push(iDate);
      });
    }
    return result;
  };

  const setEndDate = () => {
    let result: string[] = [];
    if (selectedEndYear && selectedEndMonth) {
      const date = new Date(
        Number(selectedEndYear),
        Number(selectedEndMonth),
        0
      ).getDate();

      Array.from({ length: date }).forEach((_, i) => {
        let iDate =
          String(i + 1).length === 2 ? String(i + 1) : `${0}${String(i + 1)}`;
        result.push(iDate);
      });
    }
    return result;
  };

  const clickStarYear = (year: string) => {
    setSelectedStartYear(year);
    setSelectedStartMonth(null);
    setSelectedStartDate(null);
    setSelectedEndYear(null);
    setSelectedEndMonth(null);
    setSelectedEndDate(null);
  };

  const clickStartMonth = (month: string) => {
    setSelectedStartMonth(month);
    setSelectedStartDate(null);
  };

  const clickStartDate = (date: string) => {
    setSelectedStartDate(date);
  };

  const clickEndYear = (year: string) => {
    setSelectedEndYear(year);
    setSelectedEndMonth(null);
    setSelectedEndDate(null);
  };

  const clickEndMonth = (month: string) => {
    setSelectedEndMonth(month);
    setSelectedEndDate(null);
  };

  const clickEndDate = (date: string) => {
    setSelectedEndDate(date);
  };

  return (
    <DatePickerLayout>
      <Title>인증명</Title>
      <FlexLayout>
        <StartDateLayout>
          {/* 시작하는 년 */}
          <Year id="fade-menu" onClick={(e) => handleClick(e, 'start-year')}>
            {selectedStartYear ?? '연'}
          </Year>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
              disablePadding: true,
            }}
            anchorEl={startYearanchorEl}
            open={startYearOpen}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={{
              style: { width: 100 },
            }}
            variant="selectedMenu"
          >
            <MenuLayout>
              {setStartYear()?.map((year, i) => (
                <MenuItem
                  key={i}
                  onClick={() => {
                    handleClose();
                    clickStarYear(year);
                  }}
                  style={{ color: '#777777', height: 48, fontSize: 17 }}
                >
                  {year}
                </MenuItem>
              ))}
            </MenuLayout>
          </Menu>
          {/* 시작하는 월 */}
          <Month
            id="fade-menu"
            onClick={(e) => selectedStartYear && handleClick(e, 'start-month')}
          >
            {selectedStartMonth ?? '월'}
          </Month>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
              disablePadding: true,
            }}
            anchorEl={startMonthAnchorEl}
            open={startMonthOpen}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={{
              style: { width: 81.75 },
            }}
            variant="selectedMenu"
          >
            <MenuLayout>
              {[
                '01',
                '02',
                '03',
                '04',
                '05',
                '06',
                '07',
                '08',
                '09',
                '10',
                '11',
                '12',
              ].map((month, i) => (
                <MenuItem
                  key={month}
                  onClick={() => {
                    handleClose();
                    clickStartMonth(month);
                  }}
                  style={{ color: '#777777', height: 48, fontSize: 17 }}
                >
                  {month}
                </MenuItem>
              ))}
            </MenuLayout>
          </Menu>

          {/* 시작하는 일 */}
          <Day
            id="fade-menu"
            onClick={(e) => selectedStartMonth && handleClick(e, 'start-date')}
          >
            {selectedStartDate ?? '일'}
          </Day>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
              disablePadding: true,
            }}
            anchorEl={startDateAnchorEl}
            open={startDateOpen}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={{
              style: { width: 81.75 },
            }}
            variant="selectedMenu"
          >
            <MenuLayout>
              {setStartDate().map((date, i) => (
                <MenuItem
                  key={date}
                  onClick={() => {
                    handleClose();
                    clickStartDate(date);
                  }}
                  style={{ color: '#777777', height: 48, fontSize: 17 }}
                >
                  {date}
                </MenuItem>
              ))}
            </MenuLayout>
          </Menu>
        </StartDateLayout>

        {/* 종료 시점 */}
        <EndDateLayout>
          {/* 종료 되는 년 */}
          <Year id="fade-menu" onClick={(e) => handleClick(e, 'end-year')}>
            {selectedEndYear ?? '연'}
          </Year>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
              disablePadding: true,
            }}
            anchorEl={endYearAnchorEl}
            open={endYearOpen}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={{
              style: { width: 100 },
            }}
            variant="selectedMenu"
          >
            <MenuLayout>
              {setEndYear()?.map((year, i) => (
                <MenuItem
                  key={i}
                  onClick={() => {
                    handleClose();
                    clickEndYear(year);
                  }}
                  style={{ color: '#777777', height: 48, fontSize: 17 }}
                >
                  {year}
                </MenuItem>
              ))}
            </MenuLayout>
          </Menu>
          {/* 종료되는 월 */}
          <Month
            id="fade-menu"
            onClick={(e) => selectedEndYear && handleClick(e, 'end-month')}
          >
            {selectedEndMonth ?? '월'}
          </Month>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
              disablePadding: true,
            }}
            anchorEl={endMonthAnchorEl}
            open={endMonthOpen}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={{
              style: { width: 81.75 },
            }}
            variant="selectedMenu"
          >
            <MenuLayout>
              {[
                '01',
                '02',
                '03',
                '04',
                '05',
                '06',
                '07',
                '08',
                '09',
                '10',
                '11',
                '12',
              ].map((month, i) => (
                <MenuItem
                  key={month}
                  onClick={() => {
                    handleClose();
                    clickEndMonth(month);
                  }}
                  style={{ color: '#777777', height: 48, fontSize: 17 }}
                >
                  {month}
                </MenuItem>
              ))}
            </MenuLayout>
          </Menu>

          {/* 종료되는 일 */}
          <Day
            id="fade-menu"
            onClick={(e) => selectedEndMonth && handleClick(e, 'end-date')}
          >
            {selectedEndDate ?? '일'}
          </Day>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
              disablePadding: true,
            }}
            anchorEl={endDateAnchorEl}
            open={endDateOpen}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={{
              style: { width: 81.75 },
            }}
            variant="selectedMenu"
          >
            <MenuLayout>
              {setEndDate().map((date, i) => (
                <MenuItem
                  key={date}
                  onClick={() => {
                    handleClose();
                    clickEndDate(date);
                  }}
                  style={{ color: '#777777', height: 48, fontSize: 17 }}
                >
                  {date}
                </MenuItem>
              ))}
            </MenuLayout>
          </Menu>
        </EndDateLayout>
      </FlexLayout>
    </DatePickerLayout>
  );
};

export default DatePicker;
