import React from 'react';
import Router, { useRouter } from 'next/router';
import { Company } from '@/components';
import { certificationMenuType } from '@/interfaces';
import { GetStaticPaths, GetStaticProps } from 'next';
import { COMPANY_MENU } from '@/utils';

const CompanyView: React.FC = () => {
  const router = useRouter();
  const { menu } = router.query as {
    menu: 'welcome' | 'history' | 'way-to-come';
  };

  const clickCertificationTypeMenu = (type: certificationMenuType) => {
    router.push(`?type=${type}`);
  };

  return (
    <Company.Container
      menu={menu}
      clickCertificationTypeMenu={clickCertificationTypeMenu}
    />
  );
};

export default CompanyView;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    fallback: false,
    paths: COMPANY_MENU.map((datapoint) => ({
      params: {
        menu: datapoint,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const currentMenu = ctx.params?.menu;

  return {
    props: {
      currentMenu,
    },
  };
};
