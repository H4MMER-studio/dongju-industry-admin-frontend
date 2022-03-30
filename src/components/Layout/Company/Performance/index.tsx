import React, { useState, useEffect } from 'react';
import PerformanceMain from './PerformanceMain';
import AddPerformance from './AddPerformance';

const Performance: React.FC = () => {
  const [selectedSearchTitle, setSelectedSearchTitle] = useState('납품처');
  const [modalOnAt, setModalOnAt] = useState('');
  const [searchText, setSearchText] = useState('');
  const [orderModalOn, setOrderModalOn] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState('new');

  useEffect(() => {
    document.onclick = onClickCloseModal;

    return () => {
      document.onmousedown = null;
    };
  }, []);

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

  return (
    <>
      <AddPerformance />
      <PerformanceMain
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
      />
    </>
  );
};

export default Performance;
