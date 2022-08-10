import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';
import { Login } from '@/components';
import { homeActions } from '@/store';
import { idText } from 'typescript';

const LoginPage: NextPage = () => {
  const [currentIdPw, setCurrentIdPw] = useState({ id: '', pw: '' });
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const dongjuAdminToken = localStorage.getItem('dongju-admin-token');
    if (dongjuAdminToken) {
      router.push('/');
    }
  }, []);

  const onClickSubmit = () => {
    dispatch(
      homeActions.postLogin({
        admin_id: currentIdPw.id,
        admin_password: currentIdPw.pw,
      })
    );
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
