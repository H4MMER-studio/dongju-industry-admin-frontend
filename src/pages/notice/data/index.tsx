import React from 'react';
import Router from 'next/router';
import { Notice } from '@/components';

const NoticeView: React.FC = () => {
  const route = Router;

  const clickNoticeItem = (id: string) => {
    route.push(`/notice/${id}`);
  };

  return <Notice.Container clickNoticeItem={clickNoticeItem} />;
};

export default NoticeView;
