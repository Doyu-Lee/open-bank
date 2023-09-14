'use client';
import { useQuery } from '@tanstack/react-query';
import styles from './banklist.module.css';
import { apiOAuth } from '@/api/oauth/apioauth';
import BankItem from '@/components/bankList/BankItem';
import Loading from '@/components/common/page/Loading';

const BankList = () => {
  const {
    data: myInfoData,
    isLoading: isMyInfoLoading,
    error: isMyInfoError,
  } = useQuery(['myInfo'], apiOAuth.getMyInfo);

  return (
    <>
      {myInfoData ? (
        <div className={styles.container}>
          <h2 className={styles.userGreeting}>{myInfoData.data.user_name}님 안녕하세요?</h2>
          {myInfoData.data.res_list.map((bank: any) => (
            <BankItem
              key={bank.fintech_use_num}
              bankBrand={bank.bank_name}
              bankAlias={bank.account_alias}
              bankNum={bank.fintech_use_num}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default BankList;
