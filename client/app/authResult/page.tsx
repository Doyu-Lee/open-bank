'use client';

import { apiOAuth } from '@/api/oauth/apioauth';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import BankListPage from '../open-bank/list/page';
import { useRouter } from 'next/navigation';

const AuthResult = () => {
  const router = useRouter();
  const [requestBody, setRequestBody] = useState({
    code: '',
    client_id: process.env.NEXT_PUBLIC_BANK_CLIENT_ID || '',
    client_secret: process.env.NEXT_PUBLIC_BANK_CLIENT_SECRET || '',
    redirect_uri: process.env.NEXT_PUBLIC_BANK_REDIRECT_URI || '',
    grant_type: 'authorization_code',
  });
  // const [accessToken, setAccessToken] = useState();
  // const [userSeqNo, setUserSeqNo] = useState();

  const { mutateAsync: getAccessMutateAsync } = useMutation(() => {
    console.log(requestBody);
    return apiOAuth.postOAuthCode(requestBody);
  });

  const fetchData = useCallback(async () => {
    const getAccessResult = await getAccessMutateAsync();
    // const { accessToken, userSeqNo } = getAccessResult.data;

    // 실습을 위해 실제 거래 내역 데이터가 저장되어 있는 아이디 사용 (AccessToken 고정)
    let temAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwMDM0NzM2Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE3MDI0MzE5NDYsImp0aSI6ImRlNGRlNmEyLTIxNmItNGIyNi04YjA4LThlMDVkYmQwMzU0MyJ9.BirXtT1V5AmgZC3SuTAOj-E0TuTcFsrdVco0gR6FlsA';
    let temUserSeqNo = '1100034736';

    localStorage.setItem('bankAccessToken', temAccessToken);
    localStorage.setItem('bankUserSeqNo', temUserSeqNo);

    router.push('/open-bank/list');
  }, []);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code') || '';
    setRequestBody({ ...requestBody, code });
  }, []);

  useEffect(() => {
    if (requestBody.code !== '') {
      fetchData();
    }
  }, [requestBody.code]);

  return <BankListPage />;
};

export default AuthResult;
