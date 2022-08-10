import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { performanceActions } from '@/store';
import PerformanceMain from './PerformanceMain';
import AddPerformance from './AddPerformance';
import { IPostDelivery } from '@/interfaces';

export type AddInfo = {
  delivery_supplier: string;
  delivery_product: string;
  delivery_amount: string | number;
  delivery_year: string | number;
  delivery_month: string | number;
  delivery_reference: string;
};

const Performance: React.FC = () => {
  const [selectedSearchTitle, setSelectedSearchTitle] = useState('납품처');
  const [addInfo, setAddInfo] = useState<AddInfo>({
    delivery_supplier: '',
    delivery_product: '',
    delivery_amount: '',
    delivery_year: '2022',
    delivery_month: '4',
    delivery_reference: '',
  });
  const [page, setPage] = useState(1);
  const [modalOnAt, setModalOnAt] = useState('');
  const [searchText, setSearchText] = useState('');
  const [orderModalOn, setOrderModalOn] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState('new');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.onclick = onClickCloseModal;

    return () => {
      document.onmousedown = null;
    };
  }, []);

  useEffect(() => {
    getDeliveryList();
  }, [selectedOrder, page]);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      getSearchList(searchText);
    }, 200);
    setTimer(newTimer);
  }, [searchText]);

  const getSearchList = (searchText: string) => {
    dispatch(
      performanceActions.getDeliveryList({
        isAsc: selectedOrder !== 'new',
        isSearch: true,
        field:
          selectedSearchTitle === '납품처'
            ? 'delivery_supplier'
            : 'delivery_product',
        value: searchText,
        skip: 1,
        limit: 100,
      })
    );
  };

  const getDeliveryList = (currentSearchText?: string) => {
    dispatch(
      performanceActions.getDeliveryList({
        isAsc: selectedOrder !== 'new',
        isSearch: false,
        field:
          selectedSearchTitle === '납품처'
            ? 'delivery_supplier'
            : 'delivery_product',
        value: currentSearchText ?? searchText,
        skip: 10 * page - 9,
        limit: 10 * page,
      })
    );
  };

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
    setSelectedOrder(type);
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

  const addInfoHandler = (type: keyof AddInfo, value: string | number) => {
    setAddInfo((data) => {
      return { ...data, [type]: value };
    });
  };

  const onClickAddButton = () => {
    dispatch(performanceActions.postDelivery(addInfo));
  };

  const onClickDeleteDelivery = (id: number | string) => {
    dispatch(performanceActions.deleteDelivery({ id }));
  };

  const onClickPatchDelivery = (id: number | string, info: IPostDelivery) => {
    dispatch(performanceActions.patchDelivery({ id, info }));
  };

  return (
    <>
      <AddPerformance
        addInfo={addInfo}
        addInfoHandler={addInfoHandler}
        onClickAddButton={onClickAddButton}
      />
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
        onClickDeleteDelivery={onClickDeleteDelivery}
        onClickPatchDelivery={onClickPatchDelivery}
        getDeliveryList={getDeliveryList}
      />
    </>
  );
};

export default Performance;
