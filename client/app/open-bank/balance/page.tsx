'use client';
import { apiOAuth } from '@/api/oauth/apioauth';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import styles from './balance.module.css';
import { genTrasId } from '@/util/getTrasId';
import BalanceItem from '@/components/balance/BalanceItem';
import TransactionItem from '@/components/balance/TransactionItem';

const BalancePage = ({}) => {
  const searchParams = useSearchParams();
  const fintech_use_num = searchParams.get('finNum');

  const balanceParams = {
    bank_tran_id: genTrasId(),
    fintech_use_num,
    tran_dtime: '20230914103600',
  };

  const { data: balanceData } = useQuery(['balance'], () => apiOAuth.getBalance(balanceParams));

  const transactionParams = {
    bank_tran_id: genTrasId(),
    fintech_use_num,
    inquiry_type: 'A',
    inquiry_base: 'D',
    from_date: '20230912',
    to_date: '20230914',
    sort_order: 'A',
    tran_dtime: '20230914103600',
  };

  const { data: transactionData } = useQuery(['transaction'], () =>
    apiOAuth.getTransactionList(transactionParams),
  );

  return (
    <div className={styles.container}>
      {balanceData && transactionData && (
        <>
          <BalanceItem
            bankName={balanceData.data.bank_name}
            balanceAtm={balanceData.data.balance_amt}
            availableAmt={balanceData.data.available_amt}
          />
          <TransactionItem
            transactionData={transactionData?.data}
            transactionList={transactionData?.data.res_list}
          />
        </>
      )}
    </div>
  );
};

export default BalancePage;
