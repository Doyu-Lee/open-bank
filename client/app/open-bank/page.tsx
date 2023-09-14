'use client';

import styles from './page.module.css';

const OpenBank = () => {
  const redirectURL = process.env.NEXT_PUBLIC_BANK_REDIRECT_URI;
  const clientId = process.env.NEXT_PUBLIC_BANK_CLIENT_ID;
  const scope = process.env.NEXT_PUBLIC_SCOPE;
  const state = process.env.NEXT_PUBLIC_STATE;
  const authType = process.env.NEXT_PUBLIC_AUTH_TYPE;

  const authURL = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scope}&state=${state}&auth_type=${authType}`;

  const handleOAuthLogin = () => {
    window.location.href = authURL;
  };

  return (
    <section className={styles.authPage}>
      <button type='button' onClick={handleOAuthLogin} className={styles.authBtn}>
        사용자 인증하기
      </button>
    </section>
  );
};

export default OpenBank;
