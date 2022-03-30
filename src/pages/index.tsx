import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useGetStore } from '@/hooks';
import { homeActions } from '@/store';
import { Home } from '@/components';
import { API } from '@/utils';
import { Widgets } from '@/components';

const HomePage: React.FC = () => {
  const { selectedMenu } = useGetStore.home();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, []);

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
