import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Login } from '@/components';

const LoginPage: NextPage = () => {
  const [currentIdPw, setCurrentIdPw] = useState({ id: '', pw: '' });
  const router = useRouter();

  const onClickSubmit = () => {
    router.push('/company/history');
  };

  const onChangeSetCurrentIdPw = (type: 'id' | 'pw', value: string) => {
    setCurrentIdPw((idPw) => {
      return type === 'id' ? { ...idPw, id: value } : { ...idPw, pw: value };
    });
  };

  return (
    <Login.Main
      currentIdPw={currentIdPw}
      onClickSubmit={onClickSubmit}
      onChangeSetCurrentIdPw={onChangeSetCurrentIdPw}
    />
  );
};

export default LoginPage;
