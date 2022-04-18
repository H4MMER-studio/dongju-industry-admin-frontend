import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { performanceActions } from '@/store';
import PerformanceMain from './PerformanceMain';
import AddPerformance from './AddPerformance';

const Performance: React.FC = () => {
  const [selectedSearchTitle, setSelectedSearchTitle] = useState('납품처');
  const [page, setPage] = useState(1);
  const [modalOnAt, setModalOnAt] = useState('');
  const [searchText, setSearchText] = useState('');
  const [orderModalOn, setOrderModalOn] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState('new');
  const dispatch = useDispatch();

  useEffect(() => {
    document.onclick = onClickCloseModal;

    return () => {
      document.onmousedown = null;
    };
  }, []);

  useEffect(() => {
    dispatch(
      performanceActions.getDeliveryList({
        isAsc: selectedOrder !== 'new',
        skip: 10 * page - 9,
        limit: 10 * page,
      })
    );
  }, [selectedOrder, page]);

  const onClickCloseModal = () => {
    setModalOnAt('');
    setOrderModalOn(false);
  };

  const onClickSetModalOnAt = (name: string) => {
    setModalOnAt(name);
  };

  const orderModalHandler = (onOff: boolean) => {
    setOrderModalOn(onOff);
  };

  const onClickSetSelectedOrder = (type: string) => {
    setSelectedOrder(selectedOrder);
  };

  const onChangeSearchText = (text: string) => {
    setSearchText(text);
  };

  const onClickSetSelectedSearchTitle = (type: string) => {
    setSelectedSearchTitle(type);
    setModalOnAt('');
  };

  const onClickPageHandler = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <AddPerformance />
      <PerformanceMain
        page={page}
        modalOnAt={modalOnAt}
        orderModalOn={orderModalOn}
        searchText={searchText}
        selectedOrder={selectedOrder}
        selectedSearchTitle={selectedSearchTitle}
        onClickSetModalOnAt={onClickSetModalOnAt}
        orderModalHandler={orderModalHandler}
        onClickSetSelectedOrder={onClickSetSelectedOrder}
        onChangeSearchText={onChangeSearchText}
        onClickSetSelectedSearchTitle={onClickSetSelectedSearchTitle}
        onClickPageHandler={onClickPageHandler}
      />
    </>
  );
};

export default Performance;
