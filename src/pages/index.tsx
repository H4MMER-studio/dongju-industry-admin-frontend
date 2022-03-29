import React from 'react';
import { useDispatch } from 'react-redux';
import { useGetStore } from '@/hooks';
import { homeActions } from '@/store';
import { Home } from '@/components';
import { API } from '@/utils';
import { Widgets } from '@/components';

const HomePage: React.FC = () => {
  const { selectedMenu } = useGetStore.home();
  const dispatch = useDispatch();

  const onClickSetTest = (test: string) => {};

  const getData = async () => {
    try {
      const test = await API.GET('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Home.Container onClickSetTest={onClickSetTest} />
    </>
  );
};

export default HomePage;
