import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { MainNav, Footer } from '@/components';
import { AppProps } from 'next/app';
import withReduxSaga from 'next-redux-saga';
import { wrapper } from '@/store/configureStore';
import { mixins } from '@/styles';
import useResize from '@/hooks/useResize';
import CssBaseline from '@mui/material/CssBaseline';
import { ProductType } from '@/interfaces';

interface IContainerProps {
  height: number;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const STDContainer = styled.div<IContainerProps>`
  ${mixins.flexSet('flex-start', 'flex-start')}
  height: ${(props) => props.height}px;
  background-color: #f0f0f0;

  @media (max-width: 1024px) {
    ${mixins.flexSet('flex-start', 'flex-start', 'column')}
    height: auto;
  }
`;

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const selectedMenu = router.pathname;
  const params = router.query as {
    menu:
      | 'welcome'
      | 'history'
      | 'way-to-come'
      | 'performance'
      | 'certification';
  };
  const { height } = useResize();

  const onClickMenu = (menu: string) => {
    router.push(`/${menu}`);
  };

  const onClickProduct = (productType: ProductType['type']) => {
    router.push(`/product/${productType}`);
  };

  const onClickCompanyMenu = (
    companyMenu:
      | 'welcome'
      | 'history'
      | 'way-to-come'
      | 'performance'
      | 'certification'
  ) => {
    router.push(`/company/${companyMenu}`);
  };

  const onClickNoticeMenu = (noticeMenu: 'notice' | 'data') => {
    router.push(`/notice/${noticeMenu}`);
  };

  const onClickCustomerMenu = (customerMenu: 'inquiry') => {
    router.push(`/customer-service/${customerMenu}`);
  };

  return (
    <>
      <Head>
        <title>동주산업</title>
      </Head>
      <CssBaseline />
      <STDContainer height={height}>
        {selectedMenu !== '/login' && (
          <MainNav
            selectedMenu={selectedMenu}
            params={params}
            onClickMenu={onClickMenu}
            onClickProduct={onClickProduct}
            onClickNoticeMenu={onClickNoticeMenu}
            onClickCompanyMenu={onClickCompanyMenu}
            onClickCustomerMenu={onClickCustomerMenu}
          />
        )}
        <Component {...pageProps} />
      </STDContainer>
      {selectedMenu === '/' && <Footer />}
    </>
  );
}

export default wrapper.withRedux(withReduxSaga(App));
